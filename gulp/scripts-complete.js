module.exports = function(gulp, plugins) {
  return function() {
    var bundle = plugins.browserify({
      entries: './src/ngFormBuilder-complete.js',
      debug: false
    });

    return bundle
      .bundle()
      .pipe(plugins.source('ngFormBuilder-complete.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('ngFormBuilder-complete.min.js'))
      .pipe(plugins.streamify(plugins.uglify()))
      .pipe(gulp.dest('dist/'))
      .on('error', function(err){
        console.log(err);
        this.emit('end');
      });
  };

};
