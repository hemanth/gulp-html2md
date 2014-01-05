# gulp-html2md [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> Cleans your HTML using [html-md](http://neocotic.com/html.md/)

## Usage

First, install `gulp-html2md` as a development dependency:

```shell
npm install --save-dev gulp-html2md
```

Then, add it to your `gulpfile.js`:

```javascript
var html2md = require('gulp-html2md');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(html2md())
    .pipe(gulp.dest('build'));
});
```
The above will convert index.html to index.md!  

[travis-url]: http://travis-ci.org/hemanth/gulp-html2md
[travis-image]: https://secure.travis-ci.org/lazd/gulp-html2md.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-html2md
[npm-image]: https://badge.fury.io/js/gulp-repl.png

