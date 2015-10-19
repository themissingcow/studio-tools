var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );


gulp.task( 'browser-sync', function () {
  return browserSync.init( null, {
    open: false,
    server: {
      baseDir: "./"
    },
    watchOptions: {
      debounceDelay: 1000
    },
    ghostMode: false,
    online: false
  });
});



gulp.task( 'default', ['browser-sync'], function () {

  var reload = function (file) {
    if (file.type === "changed") {
      return browserSync.reload( file.path );
    }
  };
  
  gulp.watch( './*.css', reload );
  gulp.watch( './*.js', reload );
  gulp.watch( './*.html', reload );
});

