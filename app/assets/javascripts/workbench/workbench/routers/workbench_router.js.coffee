class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  routes:
    'sensors(/)': 'index'
    'sensors/:id(/)': 'show'

  initialize: (options) ->
    @element = options.element
    @getApiKey()

    Workbench.source = new Geocens.DataService({ api_key: @apiKey })

    @listenTo Workbench.Events, "redirectToSensor", (sensor) =>
      @navigate "sensors/#{sensor.id}", { trigger: true }

  cleanupViews: ->
    if @indexView
      @indexView.remove()
      delete @indexView

    if @showView
      @showView.remove()
      delete @showView

  getApiKey: ->
    if (location.search.length < 1)
      # Demo user read-only key
      @apiKey ||= "3359a8ffba94a54978aa6c645e3c617a"
    else
      params = $.deparam(location.search.split('?')[1])
      @apiKey ||= params.api_key

  index: ->
    console.log "loading index route"
    @cleanupViews()

    if (location.search.length < 1)
      @navigate "sensors?api_key=#{@apiKey}", { replace: true }

    sensors = new Workbench.Collections.SensorsCollection
      source: Workbench.source

    @indexView = new Workbench.Views.SensorIndexView
      collection: sensors

    @indexView.render(@element)
    sensors.fetch()

  show: (id) ->
    console.log "loading show route", id
    @cleanupViews()

    if id is "demo"
      # Demo user
      id = "f9b0b42d4b742638f96dfea960ef4735"

    # render show view
    sensor = new Workbench.Models.Sensor
      source: Workbench.source
      uid: id
    sensor.fetch()

    @showView = new Workbench.Views.SensorShowView
      model: sensor
    @showView.renderBasic(@element)
