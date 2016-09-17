var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

// This builds the CSS file inside /public/css/
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// This starts server.js, after running the SASS target above
gulp.task('start', ["sass"], function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html css'
  , env: { 'NODE_ENV': 'development' }
  })
})