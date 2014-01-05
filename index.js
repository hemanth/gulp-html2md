'use strict';
var map = require('map-stream');
var es = require('event-stream');;
var gutil = require('gulp-util');
var html2md = require('html-md');

module.exports = function() {
  return es.map(function (file, cb) {
    file.contents = new Buffer(html2md(file.contents.toString()));
    file.path = gutil.replaceExtension(file.path, '.md');
    cb(null,file);
  });
};
