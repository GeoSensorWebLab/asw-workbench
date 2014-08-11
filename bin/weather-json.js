// Take CSV data and convert to descriptive JSON.

var fs = require('fs');
var parse = require('csv-parse');
var moment = require('moment');

var argv = require('yargs')
  .usage('Usage: $0 <CSV file> -z <station time zone>')
  .demand(1)
  .demand(['z'])
  .argv;

var station = {};
var envData = {};

var parseValues = function(row, col) {
  if (typeof(row[0]) !== 'undefined' && typeof(row[col]) !== 'undefined') {
    return [moment(row[0] + " " + argv.z, 'YYYY-MM-DD HH:mm Z').format(), row[col]];
  }
};

var extractValues = function (rows, col) {
  return rows.map(function (row) {
    return parseValues(row, col);
  }).filter(function (row) {
    return row !== undefined;
  });
};

var parser = parse({ delimiter: ',' }, function (err, data) {

  // First 8 are station info
  for (var i = 0; i < 8; i++) {
    station[data[i][0]] = data[i][1];
  };

  station["Zone"] = argv.z;

  // Row 17 is headers
  envData.headers = data[16];

  envData.tempC = extractValues(data.slice(17), 6);
  envData.dewPointTempC = extractValues(data.slice(17), 8);
  envData.relHum = extractValues(data.slice(17), 10);
  envData.windDir = extractValues(data.slice(17), 12);
  envData.windSpd = extractValues(data.slice(17), 14);
  envData.visibility = extractValues(data.slice(17), 16);
  envData.stnPress = extractValues(data.slice(17), 18);


  console.log(JSON.stringify({
    station: station,
    data: envData
  }, null, "  "));
});

fs.createReadStream(argv._[0]).pipe(parser);
