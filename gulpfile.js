var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');

gulp.task('combine-js', function () {
	return gulp.src('js/*.js')
  .pipe(uglify())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('jscs', function(){
  return gulp.src('dist/all.js')
  .pipe(jscs())
  .pipe(jscs.reporter());
})
