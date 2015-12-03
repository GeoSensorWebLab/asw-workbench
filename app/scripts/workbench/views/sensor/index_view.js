Workbench.Views.SensorIndexView = Backbone.Marionette.LayoutView.extend({
  template: "sensor_index",
  id: "listView",

  regions: {
    sensors: "#sensorList"
  },

  ui: {
    api_link: "a.api-key"
  },

  onRender: function() {
    var key = this.collection.source.api_key;
    this.ui.api_link.prop('href', "sensors?api_key=" + key);
    this.ui.api_link.text(key);

    this.sensors.show(new Workbench.Views.SensorCollectionView({
      collection: this.collection
    }));
  }
});
