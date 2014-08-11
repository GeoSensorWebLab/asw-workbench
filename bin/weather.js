var request = require('request');
var qs = require('querystring');

var argv = require('yargs')
  .usage('Usage: $0 -t <timeframe> -s <station ID> -Y <year> -m <month> -d <day>')
  .demand(['t', 's', 'Y', 'm', 'd'])
  .argv;

request({
  url: 'http://climate.weather.gc.ca/climateData/bulkdata_e.html',
  qs: {
    format: 'csv',
    stationID: argv.s,
    Year: argv.Y,
    Month: argv.m,
    Day: argv.d,
    timeframe: argv.t,
    submit: 'Download Data'
  }
}, function (error, response, body) {
  console.log(body);
});
