var gulp = require('gulp');
var react = require('gulp-react');
var sass = require('gulp-sass');

var paths = {
  jsx: 'jsx/*.jsx',
  scss: 'scss/*.scss'
}

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    .pipe(react())
    .pipe(gulp.dest('js'));
});

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sass({sourcemap: true}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx, ['jsx']);
  gulp.watch(paths.scss, ['scss']);
});
