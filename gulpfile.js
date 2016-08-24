var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');
    // sminifycss = require('gulp-clean-css'),
    // browserSync = require('browser-sync'),
    // less = require('gulp-less'),
    // csscomb = require('gulp-csscomb'),
    // uncss = require('gulp-uncss'),
    // critical = require('critical');

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

// Wait for jekyll-build, then launch the Server
// Watch css
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


// Image Task
// Compress
// gulp.task('image', function() {
//     gulp.src('assets/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('assets/img'));
// });

// Compiling the CSS from less
// gulp.task('less', function () {
//   return gulp.src('./_less/style.less')
//   .pipe(less())
//   .pipe(gulp.dest('./assets/_sass/big'));
// });

// Sorting the CSS
// gulp.task('styles', ['less'], function() {
//   return gulp.src('./assets/_sass/big/style.css')
//   .pipe(csscomb())
//   .pipe(gulp.dest('./assets/_sass/combed'));
// });

// Removing unused classes in CSS
// gulp.task('uncss', ['styles'], function() {
//   return gulp.src('./assets/_sass/combed/style.css')
//     .pipe(uncss({
//     html: ['./_site/**/*.html'],
//     ignore: [/fp/],
//     timeout: 1000
//   }))
//   .pipe(gulp.dest('./assets/_sass/uncss/'));
// });

// Removing tabs and spaces in CSS
// gulp.task('minify-css', ['uncss'], function() {
//   return gulp.src('assets/_sass/uncss/style.css')
//   .pipe(cleanCSS({compatibility: 'ie8'}))
//   .pipe(gulp.dest('assets/_sass/'));
// });


// Extracting the critical path CSS
// gulp.task('critical', ['minify-css'], function() {
//   critical.generate({
//     base: '_site/',
//     src: 'index.html',  // Extract critical path CSS for index.html
//     css: ['assets/_sass/style.css'],
//     dest: './_includes/critical.css',
//     minify: true,
//     include: [/cc_/],
//     ignore: ['@font-face']
//   });
// });


// Run all the tasks above in the following fixed sequence
// gulp.task('css', ['less','styles', 'uncss', 'minify-css']);



