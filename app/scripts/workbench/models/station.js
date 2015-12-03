Workbench.Models.Feature =  Backbone.Model.extend({
  initialize: function(attributes, options) {
    this.set("latitude", attributes.geometry.coordinates[1]);
    this.set("longitude", attributes.geometry.coordinates[0]);
    this.set("height", attributes.geometry.coordinates[2]);
  }
});

Workbench.Models.Station = Backbone.Model.extend({
  initialize: function(attributes, options) {
    this.geometry = new Workbench.Models.Feature(attributes.geo);
    this.unset("geo");
    this.sensors = new Workbench.Collections.SensorsCollection(this.get("sensors") || []);
  },

  latlng: function() {
    return [this.geometry.get("latitude"), this.geometry.get("longitude")];
  }
});

Workbench.Collections.StationsCollection = Backbone.Collection.extend({
  model: Workbench.Models.Station
});
