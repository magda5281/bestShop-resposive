const entryPath = 'public'; // Updated to reflect new folder structure

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function compileSass(done) {
  gulp
    .src('scss/main.scss') // Updated: source SCSS from root scss folder
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(entryPath + '/css')); // Output compiled CSS to public/css

  done();
}

function watcher(done) {
  browserSync.init({
    server: entryPath + '/', // Serve from public directory
  });

  gulp.watch('scss/**/*.scss', gulp.series(compileSass, reload)); // Watch SCSS changes
  gulp.watch(entryPath + '/*.html', gulp.series(reload)); // Watch HTML changes
  gulp.watch(entryPath + '/js/*.js', gulp.series(reload)); // Watch JS changes

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);
