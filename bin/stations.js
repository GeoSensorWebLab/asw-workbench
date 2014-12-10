// Take CSV data and convert to descriptive JSON.

var fs = require('fs');
var parse = require('csv-parse');

var argv = require('yargs')
  .usage('Usage: $0 <CSV file>')
  .demand(1)
  .argv;

var DEGREE = "°";
var MINUTE = "’";

var stations = [];

var linksForRow = function(row) {
  var links = {};
  if (row[3] !== "") {
    links.site_info = {
      description: row[3],
      href: row[4]
    };
  }
  links.interact_info = {
    description: row[5],
    href: row[6]
  };

  return links;
};

var geoForRow = function(row) {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: coordinatesForRow(row)
    },
    crs: {
      type: "link",
      properties: {
        href: "http://spatialreference.org/ref/epsg/4979/proj4/",
        type: "proj4"
      }
    },
    properties: {}
  };
};

var coordinatesForRow = function(row) {
  var dms = row[7].split(',');
  var latitude = convertDMS(dms[0]);
  var longitude = convertDMS(dms[1]);
  var elevation = parseFloat(row[8]) || "";
  return [longitude, latitude, elevation];
};

var convertDMS = function(dms) {
  var degrees = parseFloat(dms.split(DEGREE)[0]);
  var minutes = parseFloat(dms.split(DEGREE)[1].split(MINUTE)[0]);
  var seconds = parseFloat(dms.split(DEGREE)[1].split(MINUTE)[1]) || 0;
  var decimal = degrees + (minutes / 60) + (seconds / 3600);

  var sign = 1;
  if ((dms.indexOf("W") !== -1) || (dms.indexOf("S") !== -1)) {
    sign = -1;
  }

  return sign * decimal;
};

var parser = parse({ delimiter: ',' }, function (err, rows) {

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var station = {
      id: row[0],
      name: row[1],
      shortName: row[2],
      _links: linksForRow(row),
      geo: geoForRow(row)
    };
    stations.push(station);
  };

  console.log(JSON.stringify(stations, null, "  "));
});

fs.createReadStream(argv._[0]).pipe(parser);
