﻿A yeoman generator to scaffold an Angular2 application

[![Build Status](https://travis-ci.org/Erandi1234/generator-ng2-pro.svg?branch=master)](https://travis-ci.org/Erandi1234/generator-ng2-pro)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)  [![npm](https://img.shields.io/npm/dm/localeval.svg)]() [![npm](https://img.shields.io/npm/v/npm.svg)]()

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng2-pro using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/) ).

* Installing yarn 
```bash
npm install -g yarn 
npm install -g yo
npm install -g generator-ng2-pro
```

Then generate your new project:

```bash
yo ng2-pro
```
steps

* Run yarn start from a terminal
* Navigate to http://localhost:8080/ The app will automatically reload if you change any of the source files 

## Features

![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/karma.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/istanbul.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/sass.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/ts_lint.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/typedoc.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/webpack.png)
![img](https://raw.githubusercontent.com/ErandiPraboda/generator-ng2-pro/master/assets/yarn.jpg)

## Scaffold Complete Directory Layout
```bash
├── /config/                   
    └── /helpers.js
    └── /karma-test-shim.js
    └── /webpack.common.js
    └── /webpack.dev.js
    └── /webpack.test.js
├── /public/                    
    ├── /css
    ├── /images
├── /src/                       
    ├── /app
         └── /app.component.html
         └── /app.component.scss
         └── /app.component.spec.ts
         └── /app.component.ts
         └── /app.module.ts
    ├── /index.html
    └── main.ts
    └── polyfills.ts
    └── vendor.ts
├── /node_modules/             
├── .gitignore                                    
├── .travis.yml                                     
├── karma.conf.js              
├── Readme.md                
├── package.json                
├── typedoc.json                  
├── tsconfig.json              
├── tslint.json               
└── typings.json                
└── webpack.conf.js 
```
## Usage

That'll generate a project with all the common tools setup. This includes:
Filled package.json file 
* [Webpack](https://webpack.js.org/) task runner
* [Jasmine](https://jasmine.github.io/) unit testing
* [Karma](https://karma-runner.github.io/1.0/index.html) test runner
* [TSLint](https://palantir.github.io/tslint/) and [SASS Lint](https://www.npmjs.com/package/sass-lint) linting and code style checking
* [Istanbul](https://webpack.js.org/) code coverage
* [Travis CI](https://travis-ci.org/) continuous integration

Generating Component, Directives, Pipes and Services
```bash
You can use yo ng2-pro command to generate Angular Componenet, Directives, Pipes and Services

Scaffold               Usage
Component              yo ng2-pro:component --name [component-name]
Directive              yo ng2-pro:directive --name [directive-name]
Pipe                   yo ng2-pro:pipe --name [pipe-name]
Service                yo ng2-pro:service --name [service-name]
Interface              yo ng2-pro:interface --name [interface-name]
```
## Testing
```bash
yarn test
```

## Tslint
Uses the sass-lint npm module to check ts files. you can use this linter by runing following command
```bash
yarn tslint
```

## sass-lint
Uses the sass-lint npm module to check scss and sass files. you can use this linter by runing following command
```bash
yarn sass-lint
```
## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Erandi](erandipraboda@gmail.com)



