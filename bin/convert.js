// Convert data for upload
var fs = require('fs');
var moment = require('moment');

var argv = require('yargs')
  .usage('Usage: $0 <JSON file> <datastream name>')
  .demand(2)
  .argv;

var file = argv._[0];
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log("Error: " + err);
    return;
  }

  console.log(JSON.stringify(convert(data), null, "  "));
});

var convert = function (source) {
  var rawFormat = JSON.parse(source);
  return dataServiceFormat(rawFormat.data[argv._[1]]);
};

function hex(n) {
  n = n || 16;
  var result = '';
  while (n--) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
}

var dataServiceFormat = function (rows) {
  return rows.map(function (row) {
    var date = moment(row[0]);
    var utcdate = date.clone().utc();
    var value = row[1];

    return {
      "uid": hex(32),
      "id": utcdate.format("YYYY-MM-DDTHH:mm:ss"),
      "reading": value,
      "dateTime": utcdate.format("ddd MMM D HH:mm:ss Z YYYY")
    };
  });
};
