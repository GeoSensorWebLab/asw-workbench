// Push records from JSON to Data Service
var fs = require('fs');
var request = require('request');

var usage = function() {
  console.log("\nUsage: node push.js <input records> <destination URL>");
  console.log("Example: node push.js output.json \"http://data-service.geocens.ca/...\"");
  console.log("URL should point to record resource on Data Service.")
};

if (process.argv.length !== 4) {
  console.log("Error! not enough arguments");
  usage();
  process.exit(1);
};

var uploadEndpoint = process.argv[3];

var file = process.argv[2];
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
