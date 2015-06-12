class Workbench.Controllers.SensorsController extends Backbone.Marionette.Controller
  initialize: (options) ->
    @getApiKey()
    Workbench.source = new Geocens.DataService({ api_key: @apiKey })

  # Check params for API Key.
  getApiKey: ->
    if (location.search.length > 0)
      params = deparam(location.search.split('?')[1])
      @apiKey = params.api_key

  #
  # Actions
  #

  index: =>
    @getApiKey()
    source = new Geocens.DataService({ api_key: @apiKey })
    @sensors = new Workbench.Collections.SensorsCollection
      source: source

    mainView = new Workbench.Views.SensorIndexView
      collection: @sensors
    window.rm.get('main').show(mainView)
    @sensors.fetch()

  show: (id) =>
    @getApiKey()
    source = new Geocens.DataService({ api_key: @apiKey })
    @sensor = new Workbench.Models.Sensor
      source: source
      uid: id
    @sensor.fetch()

    mainView = new Workbench.Views.SensorShowView
      model: @sensor
    window.rm.get('main').show(mainView)
