var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

var $    = require('gulp-load-plugins')();

var sassPaths = [
  'assets/vendor/foundation-sites/scss',
  'assets/vendor/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('assets/_sass/main.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))    
    .pipe(gulp.dest('assets/css'));
});

// Watch Task
// Watch css
gulp.task('default', ['sass'], function() {
  gulp.watch(['assets/_sass/**/*.scss'], ['sass']);

});

// Image Task
// Compress
gulp.task('image', function() {
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'));
});