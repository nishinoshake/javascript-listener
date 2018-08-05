#!/bin/sh

export $(cat .env | xargs)

npm run generate

# htmlはno-store
# woff2だけcontent-typeをguessできていなかったので明示
aws s3 sync ./dist/ s3://listener.noplan.cc --exact-timestamps --delete --exclude "*DS_Store" --cache-control max-age=31536000
aws s3 cp ./dist/fonts/noto-serif-sub.woff2 s3://listener.noplan.cc/fonts/noto-serif-sub.woff2 --cache-control max-age=31536000 --content-type font/woff2
aws s3 sync ./dist/ s3://listener.noplan.cc --exact-timestamps --delete --exclude "*" --include "*.html" --cache-control no-store
aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
