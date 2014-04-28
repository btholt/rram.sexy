var gulp = require('gulp');
var react = require('gulp-react');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var jshint = require('gulp-jshint');

var paths = {
  jsx: 'jsx/**/*.jsx',
  js: 'dist/js',
  scss: 'scss/**/*.scss',
  css: 'dist/css',
  imgRaw: 'img-raw/**/*.{png,jpg,gif}',
  imgOptim: 'dist/img-optim',
  gulpfile: 'gulpfile.js'
};

gulp.task('lint', function() {
  return gulp.src([paths.jsx, paths.gulpfile])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    // .pipe(newer(paths.js))
    .pipe(react())
    .pipe(gulp.dest(paths.js));
});

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    // .pipe(newer(paths.css))
    .pipe(sass({sourcemap: true}))
    .pipe(gulp.dest(paths.css));
});

gulp.task('image', function () {
  return gulp.src(paths.imgRaw)
    .pipe(newer(paths.imgOptim))
    .pipe(imagemin({pngquant: true}))
    .pipe(gulp.dest(paths.imgOptim));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx, ['lint','jsx']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.img, ['image']);
});
