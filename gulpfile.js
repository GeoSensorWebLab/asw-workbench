var gulp      = require('gulp'),
    // this is an arbitrary object that loads all gulp plugins in package.json.
    coffee    = require('coffee-script/register'),
    $         = require("gulp-load-plugins")(),
    express   = require('express'),
    path      = require('path'),
    tinylr    = require('tiny-lr'),
    assets    = require('connect-assets'),
    app       = express(),
    server    = tinylr();

gulp.task('express', function() {
  // app.use(express.static(path.resolve('./dist')));
  app.set('views', 'src/views');
  app.set('view engine', 'jade');
  require('./routes')(app);
  app.use(assets({
    paths: ['src/scripts', 'src/images', 'src/stylesheets', 'src/views']
  }));

  app.listen(1337);
  $.util.log('Listening on port: 1337');
});

// Default Task
gulp.task('default', ['express']);
