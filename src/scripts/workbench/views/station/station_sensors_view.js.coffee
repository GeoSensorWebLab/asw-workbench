class Workbench.Views.StationSensorView extends Backbone.Marionette.ItemView
  template: "workbench/templates/station_sensor"

  initialize: ->
    console.log "creating station sensor view", @model.toJSON()

class Workbench.Views.StationSensorsView extends Backbone.Marionette.CollectionView
  childView: Workbench.Views.StationSensorView
