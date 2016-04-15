
# gulp-electron-packer
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> A [gulp](https://github.com/wearefractal/gulp) plugin used to create electron based application with electron-packager

## Usage

First, install `gulp-electron-packer` as a development dependency:

```shell
npm install --save-dev gulp-electron-packer
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require("gulp");
var electronPacker = require("gulp-electron-packer");
var packageJSON = require('./package.json');

gulp.src("./src/*.ext")
  .pipe(electronPacker(packageJSON))
  .pipe(gulp.dest("./dist"));
```

## API

### electronPacker(options)

#### options.name
Type: `String`  

Your application name

#### options.version
Type: `String`
Default: `0.0.0`  

Application version

#### options.packaging
Type: `Object`

Options for electron-packager


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-electron-packer
[npm-image]: https://badge.fury.io/js/gulp-electron-packer.png

[travis-url]: http://travis-ci.org/railsware/gulp-electron-packer
[travis-image]: https://secure.travis-ci.org/railsware/gulp-electron-packer.png?branch=master

[coveralls-url]: https://coveralls.io/r/alchapone/gulp-electron-packer
[coveralls-image]: https://coveralls.io/repos/alchapone/gulp-electron-packer/badge.png

[depstat-url]: https://david-dm.org/alchapone/gulp-electron-packer
[depstat-image]: https://david-dm.org/alchapone/gulp-electron-packer.png
