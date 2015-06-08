// Download sensors from RPI Data Service
// Outputs each sensor in list to a file in output directory.
// If Api Key is specified, then it will be added to each object. Api Key is
// for access through the Data Service Proxy.

var fs = require('fs');
var request = require('request');
var qs = require('querystring');

var argv = require('yargs')
  .usage('Usage: $0 <RPI HOST URL> <User UID> [API key] <-o directory>')
  .demand(2)
  .demand(['o'])
  .argv;

var url = argv._[0] + "/v01/users/" + argv._[1] + "/sensors";

request({
  url: url,
  qs: {
    detail: 'true'
  }
}, function (error, response, body) {
  outputStations(JSON.parse(body));
});

var outputStations = function (stations) {
  stations.forEach(function(item) {
    var filename = argv.o + "/" + encodeURIComponent(item.title) + ".json";

    if (argv._[2]) {
      item.api_key = argv._[2];
    }
    
    fs.writeFile(filename, JSON.stringify(item, null, "  "), function (err) {
      if (err) {
        console.error("error!", err);
      }
    });
  });
};
