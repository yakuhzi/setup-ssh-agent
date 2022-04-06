#!/bin/bash
# Actions requires a node_modules dir https://github.com/actions/toolkit/blob/master/docs/javascript-action.md#publish-a-releasesv1-action
# It is recommended not to check these in https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#recommendations

git checkout -b releases/v2
rm -rf node_modules dist
npm install
npm run build
git add -f node_modules dist
git commit -m "Update node_modules & dist"
git push -f origin releases/v2

git push origin :refs/tags/v2
git tag -fa v2 -m "Update v2 tag"
git push origin v2
git checkout master
git branch -D releases/v2
npm install
