module.exports = function(gulp, plugins) {
  return function () {
    return gulp.src('css/ngFormBuilder.css')
      .pipe(gulp.dest('dist'))
      .pipe(plugins.cssnano())
      .pipe(plugins.rename('ngFormBuilder.min.css'))
      .pipe(gulp.dest('dist'));
  };
};
