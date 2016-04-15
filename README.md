(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-electron-packager
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> electron-packager plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-electron-packager` as a development dependency:

```shell
npm install --save-dev gulp-electron-packager
```

Then, add it to your `gulpfile.js`:

```javascript
var electron-packager = require("gulp-electron-packager");

gulp.src("./src/*.ext")
	.pipe(electron-packager({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### electron-packager(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-electron-packager
[npm-image]: https://badge.fury.io/js/gulp-electron-packager.png

[travis-url]: http://travis-ci.org/alchapone/gulp-electron-packager
[travis-image]: https://secure.travis-ci.org/alchapone/gulp-electron-packager.png?branch=master

[coveralls-url]: https://coveralls.io/r/alchapone/gulp-electron-packager
[coveralls-image]: https://coveralls.io/repos/alchapone/gulp-electron-packager/badge.png

[depstat-url]: https://david-dm.org/alchapone/gulp-electron-packager
[depstat-image]: https://david-dm.org/alchapone/gulp-electron-packager.png
