# brady

Bradyinc.com uses [Hugo](https://gohugo.io/) to build a static website. The page content is stored in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) templates.

[Hugo documentation](https://gohugo.io/overview/introduction/) is a great resource.

## Install Hugo

* Mac 
..* Use Homebrew: 
`brew update && brew install hugo`
..* [Download](https://gohugo.io/) from Hugo's website


* Windows
[Follow these instructions from Hugo's Website](https://gohugo.io/tutorials/installing-on-windows/) 

## Develop

Run `hugo server` in your preferred CLI from the root of the `development` branch.

## Build
Run `hugo` in CLI 
Compiles all files into a `public` folder.

_If you need to make changes or already have a `public folder`, delete the `public` folder locally & rerun `hugo` to get a fresh build._

## Deploy

Upload all files from the `public` folder [Hugo creates] to the `public` folder on the webhost.

_Make sure to push the `public` folder files to the `master` branch so we can keep track of the versions deployed to the host._
