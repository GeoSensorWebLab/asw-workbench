var assetsHelper = require('./lib/assets-helper');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var minceTree = require('broccoli-mincer');

var assetsTree = minceTree('src', {
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

// Expose functions for mincer includes for the Jade templates
var locals = assetsHelper(assetsTree);

var views = jade('src/views', {data: locals});
var fonts = funnel('bower_components/font-awesome/fonts', {
  destDir: 'fonts'
});

module.exports = mergeTrees([assetsTree, views, fonts]);
