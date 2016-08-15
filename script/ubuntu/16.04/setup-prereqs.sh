#!/usr/bin/env bash

sudo apt-get --yes install git-daemon-sysvinit gitg
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get --yes install nodejs

sudo npm install -g npm@3

sudo apt-get --yes install mocha

npm install

