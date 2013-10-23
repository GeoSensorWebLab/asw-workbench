class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  initialize: (options) ->
    if options.sensor_uid?
      @sensor_uid = options.sensor_uid
      @navigate(@sensor_uid)

    if options.api_key?
      @api_key = options.api_key

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
      api_key: @api_key
      uid: @sensor_uid
    sensor.fetch()

    showView = new Workbench.Views.SensorShowView
      model: sensor
      el: $("#sensorView")
    showView.renderBasic()
