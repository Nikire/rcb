#!/bin/sh
# use : ./fp "message"
git pull origin development;
git add -A;
git commit -m "$1";
git push;
