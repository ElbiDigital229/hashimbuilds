#!/usr/bin/env bash
# One-time setup: let GitHub Actions deploy hashimbuilds.com without storing AWS keys.
# Paste into AWS CloudShell (us-east-1, account 304359596288).
set -euo pipefail
ACCOUNT=304359596288
REPO=ElbiDigital229/hashimbuilds
ROLE=hashimbuilds-deploy
BUCKET=hashimbuilds-site
DIST=E1PA92Q5OLDGU2

echo "== 1. GitHub OIDC identity provider =="
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1 \
  2>/dev/null && echo "created" || echo "already exists, reusing"

echo "== 2. Trust policy (this repo, main branch only) =="
cat > /tmp/trust.json <<JSON
{"Version":"2012-10-17","Statement":[{
  "Effect":"Allow",
  "Principal":{"Federated":"arn:aws:iam::${ACCOUNT}:oidc-provider/token.actions.githubusercontent.com"},
  "Action":"sts:AssumeRoleWithWebIdentity",
  "Condition":{
    "StringEquals":{"token.actions.githubusercontent.com:aud":"sts.amazonaws.com"},
    "StringLike":{"token.actions.githubusercontent.com:sub":"repo:${REPO}:ref:refs/heads/main"}}}]}
JSON
aws iam create-role --role-name "$ROLE" \
  --assume-role-policy-document file:///tmp/trust.json \
  --description "GitHub Actions deploy for hashimbuilds.com" >/dev/null 2>&1 \
  && echo "role created" \
  || { aws iam update-assume-role-policy --role-name "$ROLE" --policy-document file:///tmp/trust.json; echo "role existed, trust updated"; }

echo "== 3. Permissions: this bucket and this distribution only =="
cat > /tmp/perm.json <<JSON
{"Version":"2012-10-17","Statement":[
 {"Effect":"Allow","Action":["s3:ListBucket"],"Resource":"arn:aws:s3:::${BUCKET}"},
 {"Effect":"Allow","Action":["s3:PutObject","s3:DeleteObject"],"Resource":"arn:aws:s3:::${BUCKET}/*"},
 {"Effect":"Allow","Action":["cloudfront:CreateInvalidation"],"Resource":"arn:aws:cloudfront::${ACCOUNT}:distribution/${DIST}"}]}
JSON
aws iam put-role-policy --role-name "$ROLE" --policy-name deploy --policy-document file:///tmp/perm.json
echo "policy attached"

echo
echo "ROLE ARN: arn:aws:iam::${ACCOUNT}:role/${ROLE}"
echo "Done. Push to main now deploys automatically."
