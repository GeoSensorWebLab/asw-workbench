// Push records from JSON to Data Service
var fs = require('fs');
var request = require('request');

var argv = require('yargs')
  .usage('Usage: $0 <input records> <destination URL>')
  .demand(2)
  .argv;

var uploadEndpoint = argv._[1];

var file = argv._[0];
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log("Error: " + err);
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
    console.log("Upload complete", r.statusCode);
  });
};
