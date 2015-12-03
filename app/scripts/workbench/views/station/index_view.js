Workbench.Views.StationIndexView = Backbone.Marionette.LayoutView.extend({
  template: "station_index",

  regions: {
    map: "#stationsMap"
  },

  onShow: function() {
    this.map.show(new Workbench.Views.StationsMapView({
      collection: this.collection
    }));
  }
});
