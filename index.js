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
    exec(cmdCreateReleases())
    for (var i = 0; i < param.packaging.platforms.length; i++) {
      var platform = param.packaging.platforms[i]
      exec(cmdPackage(platform, file.path))
      exec(cmdMove(platform))
      console.log('Moved app to ' + param.packaging.destination)
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

  function cmdCreateReleases () {
    return 'mkdir -p ' + param.packaging.destination
  }

  function cmdPackage (platform, path) {
    var cmd, os, arch

    os = platform.split('-')[0]
    arch = platform.split('-')[1]

    cmd = './node_modules/.bin/electron-packager ' +
      path + ' ' +
      param.name +
      ' --platform=' + os +
      ' --arch=' + arch
    if (param.packaging.overwrite) {
      cmd += ' --overwrite'
    }

    if (param.packaging.archive) {
      cmd += ' --asar'
    }
    return cmd
  }

  function cmdMove (platform) {
    var name = packageName(platform)
    return 'cp -R ./' + name + ' ' + param.packaging.destination + '/' + name + ' && rm -rf ./' + name
  }

  function packageName (platform) {
    return param.name + '-' + platform
  }

  return through.obj(electronPacker)
}
