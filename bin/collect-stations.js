// Collect sensor JSON from directory and convert for display in ASW
// overview map.
var fs = require('fs');

var argv = require('yargs')
  .usage('Usage: $0 <input directory> > output.json')
  .demand(1)
  .argv;


var sensors = [];
var inDir = argv._[0];
var sync = 0;

fs.readdir(inDir, function (err, files) {
  if (err) throw err;

  files.forEach(function (file) {
    ++sync;
    fs.readFile(inDir + "/" + file, readSensorFromFile);
  });
});

var readSensorFromFile = function (err, data) {
  if (err) throw err;
  sensors.push(convert(data));

  if (0 === --sync) {
    outputFile();
  }
};

var convert = function (json) {
  var sensor = JSON.parse(json);
  return {
    name: sensor.title,
    shortName: sensor.title,
    id: sensor.uid,
    href: "/sensors/" + sensor.uid + "?api_key=APIKEYHERE",
    location: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [sensor.loc[1], sensor.loc[0]]
      },
      properties: {}
    }
  };
};

var outputFile = function() {
  console.log(JSON.stringify(sensors, null, "  "));
};
