# EMPLOYEES-HUB PROJECT

Steps to create monorepo project architecture:

1. lerna init && npm install

Initialize monorepo with Lerna and install packages. Change default projects name folder from "packages" to "apps", as it better ilustrates project purpose.

2. npm install typescript --save-dev

Install TypeScript for project 

3. mkdir apps && cd apps

Create folder manually and step into new folder. We could use *lerna create appname*, but it creates files, which we don't want.

4. nest new api

Create backend project using Nest.js

5. npm create vite@latest

Create frontend project using Vite.js, with options React + TypeScript
