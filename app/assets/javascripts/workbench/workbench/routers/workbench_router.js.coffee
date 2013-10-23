class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  initialize: (options) ->
    if options.sensor_uid?
      @sensor_uid = options.sensor_uid
      @navigate(@sensor_uid)

    Workbench.source = options.source

  routes:
    '': 'index'
    ':id(/)': 'show'

  index: ->
    console.log "loading index route"
    # render index view

  show: (id) ->
    console.log "loading show route", id
    # render show view
    sensor = new Workbench.Models.Sensor
      source: Workbench.source
      uid: @sensor_uid
    sensor.fetch()

    showView = new Workbench.Views.SensorShowView
      model: sensor
      el: $("#sensorView")
    showView.renderBasic()
