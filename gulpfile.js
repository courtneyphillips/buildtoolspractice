var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('runTests', function(){
  return gulp.src('test/ping-pong-tests.js')
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watchJs', function(){
  gulp.watch(['js/*.js', 'test/*.js'], ['runTests', 'jsBrowserify']);
});

gulp.task('jsBrowserify', function(){
  return browserify({ entries: ['./js/browser.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
