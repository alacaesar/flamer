This is a blank React App with Router, Redux and Sass setup.

# Setup

In the project directory, you can run:

## React

```
npm init react-app flamer
cd flamer
npm start
```

source: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

## Redux

State container

```
npm install --save redux
npm install --save react-redux
```

source: [https://github.com/reduxjs/redux](https://github.com/reduxjs/redux)

## React Router DOM

Declarative routing for React

```
npm install react-router-dom
```

source: [https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

## Sass

Pre-processed CSS

```
npm install -g sass
```

source: [https://sass-lang.com/guide](https://sass-lang.com/guide)

## npm-run-all

A CLI tool to run multiple npm-scripts

```
npm install —save npm-run-all
```

Edit the `package.json` scripts section to look like this:

```
”scripts":{
  "watch-css": "sass --watch ./src/css/styles.scss ./src/css/styles.css",
  "build-css": "sass ./src/css/styles.scss ./src/css/styles.css",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm-run-all build-css && react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

source: [https://github.com/mysticatea/npm-run-all](https://github.com/mysticatea/npm-run-all)

## React Developer Tools

Download: [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

:+1: Let's get to work @qteam.
