var assetsHelper = require('./lib/assets-helper');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var minceTree = require('broccoli-mincer');

var assetsTree = minceTree('app', {
  inputFiles: [
    'scripts/app.*',
    'styles/main.*'
  ],
  paths: [
    'scripts',
    'styles'
  ]
});

// Copy scripts to output directory
var jquery = funnel('node_modules/jquery/dist', {
  destDir: 'scripts'
});

var jqueryTransit = funnel('node_modules/jquery.transit', {
  destDir: 'scripts',
  files: ['jquery.transit.js']
});

var json2 = funnel('node_modules/json2/lib', {
  destDir: 'scripts',
  files: ['JSON2.js']
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
  files: ['underscore-min.js', 'underscore-min.map']
});

var backbone = funnel('node_modules/backbone', {
  destDir: 'scripts',
  files: ['backbone-min.js', 'backbone-min.map']
});

var marionette = funnel('node_modules/backbone.marionette/lib', {
  destDir: 'scripts',
  files: ['backbone.marionette.js', 'backbone.marionette.map']
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

// Expose functions for mincer includes for the Jade templates
var locals = assetsHelper(assetsTree);

var views = jade('app/views', {data: locals});

module.exports = mergeTrees([assetsTree, views, faFonts, faStyles,
  clusterStyles, polarmapStyles, bootstrapStyles,
  jquery, json2, jqueryTransit, jqueryDeparam, proj4, proj4leaflet,
  markerCluster, polarmap, bootstrap, highstock, underscore, backbone,
  marionette, geocens]);
