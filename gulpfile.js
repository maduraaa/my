'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
  }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
});


// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var minify = require('gulp-minify-css');

// gulp.task('js', function() {
//     gulp.src('assets/scripts/**/*.js')
//         .pipe(concat('script.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('build/scripts/'));
// });

// gulp.task('css', function() {
//     gulp.src('assets/styles/**/*.css')
//         .pipe(concat('styles.min.css'))
//         .pipe(minify())
//         .pipe(gulp.dest('build/styles/'));
// });

// gulp.task('default', ['js', 'css'], function() {});

// gulp.task('watch', function() {

//     gulp.watch('assets/styles/**/*', ['css']);
//     gulp.watch('assets/scripts/**/*', ['js']);

// });