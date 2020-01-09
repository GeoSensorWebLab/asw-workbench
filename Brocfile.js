// This is the Brocfile. It sets up all the assets from the input JS/CSS/images
// and so on and converts them to static assets in the output directory or
// preview server.
var _ = require('underscore');
var babel = require('broccoli-babel-transpiler');
var browserify = require('broccoli-browserify');
var SassSourceMaps = require('broccoli-sass-source-maps');
var Sass = require('sass');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var templateBuilder = require('broccoli-template-builder');

const compileSass = SassSourceMaps(Sass);

var sassDir = 'app/styles';
var scripts = 'app/scripts';

// Covert main.scss stylesheet to app.css stylesheet in output directory
var styles = compileSass([sassDir], 'main.scss', 'app.css');

// Process all the JavaScript.
// First we use babel to convert the ES6 to ES5 for web browsers.
scripts = babel(scripts);
// Then use browserify to handle any `require` statements and automatically
// insert the required library inline.
scripts = browserify(scripts, {
  entries: ['./app.js'],
  outputFile: 'app.js'
});

// This builds all the Javascript Templates (JST) into JS files where the
// templates have been wrapped in functions using underscore's template system.
var templates = templateBuilder('app/scripts/workbench/templates', {
  extensions: ['jst'],
  outputFile: 'templates.js',
  compile: function(string) {
    return _.template(string, { variable: "obj" }).source;
  }
});

// Copy scripts to output directory
var jquery = funnel('node_modules/jquery/dist', {
  destDir: 'scripts'
});

var jqueryTransit = funnel('node_modules/jquery.transit', {
  destDir: 'scripts',
  files: ['jquery.transit.js']
});

var json2 = funnel('node_modules/json2/lib/JSON2/static', {
  destDir: 'scripts',
  files: ['json2.js']
});

var jqueryDeparam = funnel('node_modules/jquery-deparam', {
  destDir: 'scripts',
  files: ['jquery-deparam.js']
});

var proj4 = funnel('node_modules/proj4/dist', {
  destDir: 'scripts'
});

var proj4leaflet = funnel('node_modules/proj4leaflet/src', {
  destDir: 'scripts'
});

var markerCluster = funnel('node_modules/leaflet.markercluster/dist', {
  destDir: 'scripts',
  files: ['leaflet.markercluster.js']
});

var polarmap = funnel('node_modules/polarmap/dist', {
  destDir: 'scripts'
});

var bootstrap = funnel('node_modules/bootstrap/dist/js', {
  destDir: 'scripts'
});

var highstock = funnel('node_modules/highstock-release', {
  destDir: 'scripts',
  files: ['highstock.js', 'modules/exporting.js']
});

var underscore = funnel('node_modules/underscore', {
  destDir: 'scripts',
  files: ['underscore-min.js', 'underscore-min.js.map']
});

var backbone = funnel('node_modules/backbone', {
  destDir: 'scripts',
  files: ['backbone-min.js', 'backbone-min.map']
});

var marionette = funnel('node_modules/backbone.marionette/lib', {
  destDir: 'scripts',
  files: ['backbone.marionette.js', 'backbone.marionette.min.js.map']
});

var geocens = funnel('node_modules/geocens_js_api', {
  destDir: 'scripts',
  files: ['geocens.js', 'geocens-chart.js']
});

// Copy Font Awesome files to output directory
var faFonts = funnel('node_modules/font-awesome/fonts', {
  destDir: 'fonts'
});
var faStyles = funnel('node_modules/font-awesome/css', {
  destDir: 'styles'
});

// Copy Leaflet Marker Clusterer files to output directory
var clusterStyles = funnel('node_modules/leaflet.markercluster/dist', {
  destDir: 'styles',
  files: ['MarkerCluster.css', 'MarkerCluster.Default.css']
});

// Copy PolarMap.js files to output directory
var polarmapStyles = funnel('node_modules/polarmap/css', {
  destDir: 'styles',
  files: ['polarmap.css']
});

// Copy bootstrap files to output directory
var bootstrapStyles = funnel('node_modules/bootstrap/dist/css', {
  destDir: 'styles'
});


var views = jade('app/views');

module.exports = mergeTrees([styles, scripts, views, templates, faFonts,
  faStyles, clusterStyles, polarmapStyles, bootstrapStyles,
  jquery, json2, jqueryTransit, jqueryDeparam, proj4, proj4leaflet,
  markerCluster, polarmap, bootstrap, highstock, underscore, backbone,
  marionette, geocens]);
