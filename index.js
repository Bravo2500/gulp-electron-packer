'use strict'

var through = require('through2')
var gutil = require('gulp-util')
var child_process = require('child_process')

module.exports = function (param) {
	// if necessary check for required param(s), e.g. options hash, etc.
  if (!param) {
    throw new gutil.PluginError('gulp-electron-packer', 'No param supplied')
  }

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
  function electronPacker (file, enc, callback) {
    for (var i = 0; i < param.packaging.platforms.length; i++) {
      exec(cmdPackage(param.packaging.platforms[i], file.path))
    }

		// Do nothing if no contents
    if (file.isNull()) {
      this.push(file)
      return callback()
    }

    if (file.isStream()) {
			// accepting streams is optional
      this.emit('error',
        new gutil.PluginError('gulp-electron-packer', 'Stream content is not supported'))
      return callback()
    }
		// check if file.contents is a `Buffer`
    if (file.isBuffer()) {
			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
      file.contents = new Buffer(String(file.contents) + '\n' + param)

      this.push(file)
    }

    return callback()
  }

  function exec (cmd, callback) {
    return child_process.execSync(cmd, function (error, stdout, stderr) {
      console.log(stdout)
      console.log(error)
    })
  }

  function cmdPackage (platform, path) {
    var cmd, os, arch

    os = platform.split('-')[0]
    arch = platform.split('-')[1]

    cmd = './node_modules/.bin/electron-packager ' +
      path + ' ' +
      param.name +
      ' --platform=' + os +
      ' --arch=' + arch +
      ' --out=' + param.packaging.destination +
      ' --icon=' + param.packaging.platformResources.icon
    if (param.packaging.overwrite) {
      cmd += ' --overwrite'
    }

    if (param.packaging.archive) {
      cmd += ' --asar'
    }
    return cmd
  }

  return through({objectMode: true}, electronPacker)
}
