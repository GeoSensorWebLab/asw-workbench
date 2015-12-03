Workbench.Models.Sensor = Backbone.Model.extend({
  idAttribute: "uid",

  initialize: function() {
    this.set("endpoint", "http://dataservice.geocens.ca/api/sensors/" + this.id);
    this.set("datastreams", new Workbench.Collections.DatastreamsCollection());
    this.set("selfLink", "/sensors/" + this.id + "?api_key=" + this.get("api_key"));

    if (location.search.length > 0) {
      var params = deparam(location.search.split('?')[1]);
      this.set("api_key", params.api_key);
    }

    this.set("source", new Geocens.DataService({ api_key: this.get("api_key") }));

    this.on("change:loc", function() {
      this.set("latitude", this.get("loc")[0]);
      this.set("longitude", this.get("loc")[1]);
    });
  },

  // Custom fetch function using GeoCENS JS API
  fetch: function() {
    var self = this;
    this.get("source").getSensor({
      sensor_id: this.id,
      done: function (sensor) {
        self.set(sensor.metadata);
        self.object = sensor;
        self.trigger("sensorLoaded");
        self.get("datastreams").fetch({ sensor: self.object });
      }
    });
    return this;
  }
});

Workbench.Collections.SensorsCollection = Backbone.Collection.extend({
  model: Workbench.Models.Sensor,

  initialize: function(options) {
    this.source = options.source;
  },

  // Retrieve a list of sensors from the GeoCENS JS API
  fetch: function(options) {
    var self = this;
    var xhr = this.source.getSensors({
      done: function(sensors) {
        self.reset();
        _.each(sensors, function(sensor) {
          var newSensor = new Workbench.Models.Sensor(sensor.metadata);
          newSensor.object = sensor;
          self.push(newSensor);
        });
      }
    });

    this.trigger("request", this, xhr);
    return this;
  }
});
