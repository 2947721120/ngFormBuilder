module.exports = function(gulp, plugins) {
  return function() {
    var bundle = plugins.browserify({
      entries: './src/ngFormBuilder-full.js',
      debug: false
    });

    return bundle
      .bundle()
      .pipe(plugins.source('ngFormBuilder-full.js'))
      .pipe(plugins.replace('<%=version%>', plugins.packageJson.version))
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('ngFormBuilder-full.min.js'))
      .pipe(plugins.streamify(plugins.uglify({preserveComments: 'license'})))
      .pipe(gulp.dest('dist/'))
      .on('error', function(err){
        console.log(err);
        this.emit('end');
      });
  };

};
