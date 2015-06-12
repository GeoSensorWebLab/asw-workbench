var compileSass = require('broccoli-sass');
var filterCoffeeScript = require('broccoli-coffee');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var minceTree = require('broccoli-mincer');
var path = require('path');

var baseURL = ".";

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


var locals = {
  javascript: function javascript(logicalPath) {
    var environment = assetsTree.environment();
    var asset = environment.findAsset(logicalPath);
    if (!asset) {
      // this will help us notify that given logicalPath is not found
      // without "breaking" view renderer
      return '<script type="application/javascript">throw("Javascript file ' +
             JSON.stringify(logicalPath).replace(/"/g, '\\"') +
             ' not found.")</script>';
    }
    var source = asset.digestPath, ext = ".js";
    var uri = path.join(baseURL, (path.extname(source) === ext) ? source : path.join(source, ext));
    return '<script type="application/javascript" src="' +
      uri +
      '"></script>';
  },

  stylesheet: function stylesheet(logicalPath) {
    var environment = assetsTree.environment();
    var asset = environment.findAsset(logicalPath);
    if (!asset) {
      // this will help us notify that given logicalPath is not found
      // without "breaking" view renderer
      return '<script type="application/javascript">throw("Stylesheet file ' +
        JSON.stringify(logicalPath).replace(/"/g, '\\"') +
        ' not found.")</script>';
    }
    var source = asset.digestPath, ext = ".css";
    var uri = path.join(baseURL, (path.extname(source) === ext) ? source : path.join(source, ext));
    return '<link rel="stylesheet" type="text/css" href="' +
      uri +
      '" />';
  }
};

var views = jade('src/views', {data: locals});

module.exports = mergeTrees([assetsTree, views]);
