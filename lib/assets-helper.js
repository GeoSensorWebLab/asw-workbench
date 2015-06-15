var path = require('path');

var baseURL = ".";

// Expose functions for mincer includes for the Jade templates
module.exports = function(assetsTree) {
  return {
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
      return '<script type="application/javascript" src="/' +
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
      return '<link rel="stylesheet" type="text/css" href="/' +
        uri +
        '" />';
    }
  };
};
