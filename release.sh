#!/bin/bash
# Actions requires a node_modules dir https://github.com/actions/toolkit/blob/master/docs/javascript-action.md#publish-a-releasesv1-action
# It is recommended not to check these in https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#recommendations

git checkout -b releases/v1
rm -rf node_modules dist
npm install --production
npm run tsc
git add -f node_modules dist
git commit -m "update node_modules & dist"
git push -f origin releases/v1

git push origin :refs/tags/v1
git tag -fa v1 -m "Update v1 tag"
git push origin v1
git checkout master
git branch -D releases/v1
