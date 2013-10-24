class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  initialize: (options) ->
    if (location.search.length < 1)
      # Demo user read-only key
      apiKey = "3359a8ffba94a54978aa6c645e3c617a"
    else
      params = $.deparam(location.search.split('?')[1])
      apiKey = params.api_key

    Workbench.source = new Geocens.DataService({ api_key: apiKey })

    if options.sensor_uid?
      @sensor_uid = options.sensor_uid
      @navigate(@sensor_uid)

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
