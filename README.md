# react-bootcards

[Bootcards](http://bootcards.org/) components built with [React](http://facebook.github.io/react/)

[![NPM version](https://badge.fury.io/js/react-bootcards.svg)](https://badge.fury.io/js/react-bootcards)
[![Dependency Status](https://david-dm.org/kobanyan/react-bootcards.svg)](https://david-dm.org/kobanyan/react-bootcards)
[![devDependency Status](https://david-dm.org/kobanyan/react-bootcards/dev-status.svg)](https://david-dm.org/kobanyan/react-bootcards#info=devDependencies)
[![peerDependency Status](https://david-dm.org/kobanyan/react-bootcards/peer-status.svg)](https://david-dm.org/kobanyan/react-bootcards#info=peerDependencies)

## Demo & Examples

Live demo: [kobanyan.github.io/react-bootcards](http://kobanyan.github.io/react-bootcards/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-bootcards is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-bootcards.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-bootcards --save
```


## Usage

### Properties

### Notes


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License
