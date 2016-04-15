(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-electron-packer
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> electron-packer plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-electron-packer` as a development dependency:

```shell
npm install --save-dev gulp-electron-packer
```

Then, add it to your `gulpfile.js`:

```javascript
var electronPacker = require("gulp-electron-packer");
var packageJSON = require('./package.json');
gulp.src("./src/*.ext")
	.pipe(electronPacker({
    packageJSON
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### electron-packer(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-electron-packer
[npm-image]: https://badge.fury.io/js/gulp-electron-packer.png

[travis-url]: http://travis-ci.org/alchapone/gulp-electron-packer
[travis-image]: https://secure.travis-ci.org/alchapone/gulp-electron-packer.png?branch=master

[coveralls-url]: https://coveralls.io/r/alchapone/gulp-electron-packer
[coveralls-image]: https://coveralls.io/repos/alchapone/gulp-electron-packer/badge.png

[depstat-url]: https://david-dm.org/alchapone/gulp-electron-packer
[depstat-image]: https://david-dm.org/alchapone/gulp-electron-packer.png
