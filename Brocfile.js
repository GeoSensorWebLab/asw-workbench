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
    '../bower_components',
    'scripts',
    'styles'
  ]
});

// Copy scripts to output directory
var jquery = funnel('bower_components/jquery/dist', {
  destDir: 'scripts'
});

var jqueryTransit = funnel('bower_components/jquery.transit', {
  destDir: 'scripts',
  files: ['jquery.transit.js']
});

var json2 = funnel('bower_components/json2', {
  destDir: 'scripts',
  files: ['json2.js']
});

var jqueryDeparam = funnel('bower_components/jquery-deparam', {
  destDir: 'scripts',
  files: ['jquery-deparam.js']
});

var proj4 = funnel('bower_components/proj4/dist', {
  destDir: 'scripts'
});

var proj4leaflet = funnel('bower_components/proj4leaflet/src', {
  destDir: 'scripts'
});

var markerCluster = funnel('bower_components/leaflet.markercluster/dist', {
  destDir: 'scripts',
  files: ['leaflet.markercluster.js']
});

var polarmap = funnel('bower_components/polarmap/dist', {
  destDir: 'scripts'
});

// Copy Font Awesome files to output directory
var faFonts = funnel('bower_components/font-awesome/fonts', {
  destDir: 'fonts'
});
var faStyles = funnel('bower_components/font-awesome/css', {
  destDir: 'styles'
});

// Copy Leaflet Marker Clusterer files to output directory
var clusterStyles = funnel('bower_components/leaflet.markercluster/dist', {
  destDir: 'styles',
  files: ['MarkerCluster.css', 'MarkerCluster.Default.css']
});

// Copy PolarMap.js files to output directory
var polarmapStyles = funnel('bower_components/polarmap/css', {
  destDir: 'styles',
  files: ['polarmap.css']
});

// Copy bootstrap files to output directory
var bootstrapStyles = funnel('bower_components/bootstrap/dist/css', {
  destDir: 'styles'
});

// Expose functions for mincer includes for the Jade templates
var locals = assetsHelper(assetsTree);

var views = jade('app/views', {data: locals});

module.exports = mergeTrees([assetsTree, views, faFonts, faStyles,
  clusterStyles, polarmapStyles, bootstrapStyles,
  jquery, json2, jqueryTransit, jqueryDeparam, proj4, proj4leaflet,
  markerCluster, polarmap]);
