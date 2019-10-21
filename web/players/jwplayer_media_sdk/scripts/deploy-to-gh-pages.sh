#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

echo "Purge artifacts before starting"
rm -rf bundle 
mkdir bundle 

# config
# git config --global user.email "nobody@nobody.org"
# git config --global user.name "Travis CI"

# build (CHANGE THIS)
# make

cd bundle 
echo "Copying Dist Folder"
cp ../dist/* .

# copy ads
echo "Copying Ads"
mkdir ads-vast
cp ../../../../ads-vast/*.xml ads-vast/

# deploy
echo "Deploying to Github Pages"
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@$github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1