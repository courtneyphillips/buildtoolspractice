var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('runTests', function(){
  return gulp.src('test/ping-pong-tests.js')
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watchJs', function(){
  gulp.watch(['js/*.js', 'test/*.js'], ['runTests']);
});
