#!/bin/bash
git checkout gh-pages
git checkout master -- _book
cp -rf _book/* ./ 
rm -rf ./_book
git reset HEAD 