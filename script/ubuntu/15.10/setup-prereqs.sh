#!/usr/bin/env bash

sudo apt-get --yes install git-daemon-sysvinit gitg
sudo apt-get --yes install nodejs
#sudo apt-get --yes install nodejs-legacy
sudo apt-get --yes install npm
sudo apt-get --yes install mocha

sudo npm install -g npm@3

npm install

