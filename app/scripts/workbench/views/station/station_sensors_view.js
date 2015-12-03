Workbench.Views.StationSensorView = Backbone.Marionette.ItemView.extend({
  template: "station_sensor"
});

Workbench.Views.StationSensorsView = Backbone.Marionette.CollectionView.extend({
  childView: Workbench.Views.StationSensorView,
  emptyView: Workbench.Views.EmptyView
});
