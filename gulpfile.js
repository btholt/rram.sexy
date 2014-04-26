var gulp = require('gulp');
var react = require('gulp-react');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

var paths = {
  jsx: 'jsx/*.jsx',
  scss: 'scss/*.scss',
  img: 'img-raw/**/*.{png,jpg,gif}'
}

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    .pipe(react())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sass({sourcemap: true}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx, ['jsx']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.img, ['image']);
});

gulp.task('image', function () {
  return gulp.src(paths.img)
    .pipe(imagemin({pngquant: true}))
    .pipe(gulp.dest('dist/img-optim'));
});
