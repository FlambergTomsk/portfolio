#!/usr/bin/env sh

set -e

npm run build

cd dist


git init
git add -A
git commit -m 'deploy portfolio'
git push -f git@github.com:FlambergTomsk/portfolio.git master:gh-pages
cd -

