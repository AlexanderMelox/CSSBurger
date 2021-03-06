const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
    './css/*.css',
    '!./css/*.min.css'
  ])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// JS
// gulp.task('js', ['js:minify']);

// Default
gulp.task('default', ['css']);

// Configure browser-sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('dev', ['css', 'browserSync'], function() {
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./js/*.js', browserSync.reload());
  gulp.watch('*.html', browserSync.reload());
});