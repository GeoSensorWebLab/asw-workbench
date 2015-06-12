var funnel = require('broccoli-funnel');


var tree = funnel('src', {
  destDir: '/'
});

module.exports = tree;
