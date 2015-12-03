Workbench.Models.Datastream = Backbone.Model.extend({
  idAttribute: "uid",

  initialize: function() {},

  getTimeSeries: function() {
    var self = this;
    return this.object.getTimeSeries({
      recent: true,
      limit: 500,
      done: function (seriesData) {
        // Data is returned in newest-first order, so reverse it
        return self.set("seriesData", seriesData.reverse());
      }
    });
  },

  seriesData: function() {
    return this.get("seriesData");
  },

  // name is alias for id
  name: function() {
    return this.get("id");
  },

  // units is alias for unit
  units: function() {
    return this.get("unit");
  }
});

Workbench.Collections.DatastreamsCollection = Backbone.Collection.extend({
  model: Workbench.Models.Datastream,

  // Retrieve a list of datastreams from the GeoCENS JS API
  fetch: function(options) {
    var self = this;
    var xhr = options.sensor.getDatastreams({
      done: function (datastreams) {
        self.reset();
        return _.each(datastreams, function(datastream) {
          var stream = new Workbench.Models.Datastream(datastream._attributes);
          stream.object = datastream;
          stream.getTimeSeries();
          return self.push(stream);
        });
      }
    });

    this.trigger("request", this, xhr);
    return this;
  }
});
