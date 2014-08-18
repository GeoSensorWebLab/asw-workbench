// Push records from JSON to Data Service
var fs = require('fs');
var request = require('request');

var argv = require('yargs')
  .usage('Usage: $0 [options] <input records> <destination URL>')
  .count('verbose')
  .boolean('verbose')
  .alias('v', 'verbose')
  .demand(2)
  .argv;

VERBOSE_LEVEL = argv.verbose;
var file = argv._[0];
var uploadEndpoint = argv._[1];

function WARN()  { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }


fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    WARN("Error: " + err);
    return;
  }

  uploadRecords(JSON.parse(data));
});

var uploadRecords = function (records) {
  records.forEach(function (record) {
    uploadRecord(record);
  });
};

var uploadRecord = function (record) {
  request.post({
    uri: uploadEndpoint,
    json: JSON.stringify(record)
  }, function (e, r, body) {
    WARN("Upload complete", r.statusCode);
    INFO("Error info: ", e);
    DEBUG("Response body:\n", body);
  });
};
