#Angular 2 starter

[Instructions: Getting started with Angular 2](https://docs.google.com/document/d/1MkpvTNfmxHwdSv9rQyQIvjRLnoGk4rvkNMkOEWTPkCw/edit#heading=h.fn3zh8ljy85u)

> Based on https://github.com/angular-class/angular2-webpack-starter.

Besides `app` and `app-simple` there is `my-app`. 

`my-app` has a simple top navigation with two sections 'Home' and 'Users'. It is a basic application to explore the component router in Angular 2.

```
//src/public/index.html

45  <!-- App script -->
46  <script src="/__build__/my-app.js"></script>
47  <!-- TODO: replace with /app-simple.js or /app.js -->
```

# Getting Started (from original readme)
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v0.12.2`+ and NPM `2.10.0`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install -global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `npm run server` to start the server

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080` (or if you prefer IPv6 then it's `http://[::1]:8080/`).
 
### server
```bash
$ NODE_ENV=development npm run server # or either webpack-dev-server or npm run express
```

## Other commands 

### build files
```bash
$ npm run build  # or webpack
```

### watch and build files
```bash
$ npm run watch  # or webpack --watch
```
