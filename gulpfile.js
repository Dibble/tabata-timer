var gulp = require('gulp')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')

gulp.task('bundle', function () {
  return gulp.src('src/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['bundle'], function () {
  gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['bundle'])
})
