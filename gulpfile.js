var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var ghPages = require('gulp-gh-pages');

gulp.task('minify', function () {
  gulp.src('./assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./minified/assets/js/'));
  
  gulp.src('./assets/css/*.*')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/assets/css/'));
   
  gulp.src('./test/*.*')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/test/'));   

  gulp.src('./*.*')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'));
    
  gulp.src('./.travis.yml')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'));    


});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('deploy', function() {
      return gulp.src('./minified/')
        .pipe(ghPages());
});