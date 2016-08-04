# fac-cycle


## Project structure:

```
.
+-- public/
|   static assets to be served by web server
+-- src/
|   all front end assets which need to be compiled by webpack into bundle.js
+-- server/
|   all backend files
+-- test_src/
|   all tests for `src` directory: file structure within `test_src` should mirror `src`
+-- test_server/
|   all tests for `server` directory: file structure within `test_server` should mirror `server`
```


### Frontend structure:

```
.
+-- main.jsx : app entry point (avoid putting code in here)
+-- components/
|   +-- all React components (one per file)
+-- lib/
|   +-- all non-React functions (organised by feature)
+-- scss/
|   +-- all sass (to be compiled by webpack)
```



## Webpack setup:
To run in development mode run: `npm run webpack-dev`


To build bundle.js run: `npm run webpack-build`



## Todo:
- scss - we should compile this using webpack (Matt to setup)
- environment variables
- script to start webpack-dev-server and backend server
