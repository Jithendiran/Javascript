#! /bin/bash

cd ~/Downloads && echo Changed

echo $(pwd)

echo "Enter the latest Node dowmload url here"
read URL


sudo apt update && sudo apt install wget xz-utils

wget -O node.tar.gz $URL

sudo tar -xvf node.tar.gz

sudo cp -r node/{bin,include,lib,share} /usr/

rm -rf node

alert "Successfully installed node"

sudo npm install -g nodemon jest express-generator