class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  initialize: (options) ->
    if (location.search.length < 1)
      # Demo user read-only key
      apiKey = "3359a8ffba94a54978aa6c645e3c617a"
    else
      params = $.deparam(location.search.split('?')[1])
      apiKey = params.api_key

    Workbench.source = new Geocens.DataService({ api_key: apiKey })

  routes:
    '': 'index'
    ':id(/)': 'show'

  index: ->
    console.log "loading index route"
    # render index view

  show: (id) ->
    console.log "loading show route", id
    if id is "demo"
      # Demo user
      id = "f9b0b42d4b742638f96dfea960ef4735"

    # render show view
    sensor = new Workbench.Models.Sensor
      source: Workbench.source
      uid: id
    sensor.fetch()

    showView = new Workbench.Views.SensorShowView
      model: sensor
      el: $("#sensorView")
    showView.renderBasic()
