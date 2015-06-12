var compileSass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');

var views = jade('src/views');

var styles = compileSass(['src/stylesheets'], 'main.scss', 'css/main.css');

module.exports = mergeTrees([views, styles]);
