# South West Motocross Club

After cloning ensure to run

```
$ npm install
```

This will install all of the relevant packages required

Use the below command, to build and publish the website to the gh-pages branch

## gh-pages

Change package.json

Add to base

- "homepage": "http://southwestmx.github.io/southwestmotocrossclub"

  Change scripts

- "predeploy": "npm run build",
- "deploy": "gh-pages -d build"

## surge

Initially used gh-pages, however had issues with using router and nice urls so moved to Surge

https://medium.com/@Jeff_Duke_io/how-to-deploy-an-app-using-react-and-react-router4-fe5f02a27a97

Site can be seen here:

http://tired-pollution.surge.sh/

```
$ npm run deploy
```
