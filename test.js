'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var html2md = require('./index');

it('should convert html to md', function (cb) {
        var stream = html2md("function (){}");

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.md');
                assert.equal(file.contents.toString(), '# Test');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.html',
                contents: new Buffer("<h1>Test</h1>")
        }));
});