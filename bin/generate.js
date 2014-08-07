// Generator Script
var moment = require('moment');

var usage = function() {
  console.log("\nUsage: node generate.js <start-date> <end-date> <distribution>");
  console.log("Example: node generate.js 2014-07-01T00:00:00Z 2014-07-31T23:59:59Z uniform");
};

if (process.argv.length !== 5) {
  console.log("Error! not enough arguments");
  usage();
  process.exit(1);
};

var startDate = moment(process.argv[2]);
if (!startDate.isValid()) {
  console.log("Error! Invalid start date format. Try ISO.");
  process.exit(2);
};

var endDate = moment(process.argv[3]);
if (!endDate.isValid()) {
  console.log("Error! Invalid end date format. Try ISO.");
  process.exit(2);
};

var distribution = process.argv[4];
if (distribution !== "uniform" && distribution !== "normal") {
  console.log("Error! Unknown distribution type. Try uniform or normal.");
  process.exit(2);
};

// Generation

function hex(n) {
  n = n || 16;
  var result = '';
  while (n--) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
}

function rand_uniform(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rand_normal() {
  var V1, V2, S;

  do {
    var U1 = Math.random();
    var U2 = Math.random();
    V1 = 2 * U1 - 1;
    V2 = 2 * U2 - 1;
    S = V1 * V1 + V2 * V2;
  } while (S > 1);

  X = Math.sqrt(-2 * Math.log(S) / S) * V1;
  return X;
}

var dist_func = null;

switch(distribution) {
  case "normal":
  dist_func = function() {
    return rand_normal();
  };
  break;
  case "uniform":
  default:
  dist_func = function() {
    return rand_uniform(0, 10);
  };
}

var data = [];

for (var i = +startDate; i < +endDate; i += 15 * 60 * 1000) {
  var time = moment.utc(moment.unix(i / 1000));

  data.push({
    uid: hex(32),
    id: time.format("YYYY-MM-DDTHH:mm:ss"),
    reading: dist_func().toString(),
    dateTime: time.format("ddd MMM D HH:mm:ss UTC YYYY")
  });
};

console.log(JSON.stringify(data, null, 2));
