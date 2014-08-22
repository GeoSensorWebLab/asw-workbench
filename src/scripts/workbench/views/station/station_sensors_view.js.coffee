class Workbench.Views.StationSensorView extends Backbone.Marionette.ItemView
  template: "workbench/templates/station_sensor"

class Workbench.Views.StationSensorsView extends Backbone.Marionette.CollectionView
  childView: Workbench.Views.StationSensorView
  emptyView: Workbench.Views.EmptyView
