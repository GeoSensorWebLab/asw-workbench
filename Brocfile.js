var compileSass = require('broccoli-sass');
var filterCoffeeScript = require('broccoli-coffee');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var minceTree = require('broccoli-mincer');
var assetsHelper = require('./lib/assets-helper');

var assetsTree = minceTree('src', {
  inputFiles: [
    'scripts/app.*',
    'stylesheets/main.*'
  ],
  paths: [
    '../bower_components',
    'scripts',
    'stylesheets'
  ]
});

// Expose functions for mincer includes for the Jade templates
var locals = assetsHelper(assetsTree);

var views = jade('src/views', {data: locals});
var fonts = funnel('bower_components/font-awesome/fonts', {
  destDir: 'fonts'
});

module.exports = mergeTrees([assetsTree, views, fonts]);
