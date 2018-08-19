#!/bin/sh

cd /home/ivygate/ivygate-web/
git pull
systemctl reload nginx
