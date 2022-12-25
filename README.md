[js-graph-augment](http://make-github-pseudonymous-again.github.io/js-graph-augment)
==

Augmented graphs code bricks for JavaScript

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-augment/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-augment.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-augment)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-augment.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-augment)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-augment)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-graph-augment)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-augment#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-augment#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-augment)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-augment.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-augment)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-augment.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-graph-augment/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-augment.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-augment)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-augment
# or
jspm install npm:@aureooms/js-graph-augment
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-augment
```

### bower
```terminal
bower install @aureooms/js-graph-augment
```

### ender
```terminal
ender add @aureooms/js-graph-augment
```

### jam
```terminal
jam install @aureooms/js-graph-augment
```

### spm
```terminal
spm install @aureooms/js-graph-augment --save
```

### npm
```terminal
npm install @aureooms/js-graph-augment --save
```

## Require
### jspm
```js
let graphaugment = require( "github:aureooms/js-graph-augment" ) ;
// or
import graphaugment from '@aureooms/js-graph-augment' ;
```
### duo
```js
let graphaugment = require( "aureooms/js-graph-augment" ) ;
```

### component, ender, spm, npm
```js
let graphaugment = require( "@aureooms/js-graph-augment" ) ;
```

### bower
The script tag exposes the global variable `graphaugment`.
```html
<script src="bower_components/@aureooms/js-graph-augment/js/dist/graph-augment.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-graph-augment" ] , function ( graphaugment ) { ... } ) ;
```