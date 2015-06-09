class Workbench.Controllers.SensorsController extends Backbone.Marionette.Controller
  initialize: (options) ->
    @getApiKey()
    Workbench.source = new Geocens.DataService({ api_key: @apiKey })

  # Check params for API Key.
  getApiKey: ->
    if (location.search.length > 0)
      params = deparam(location.search.split('?')[1])
      @apiKey ||= params.api_key

  #
  # Actions
  #

  index: =>
    @sensors = new Workbench.Collections.SensorsCollection
      source: Workbench.source

    mainView = new Workbench.Views.SensorIndexView
      collection: @sensors
    window.rm.get('main').show(mainView)
    @sensors.fetch()

  show: (id) =>
    @sensor = new Workbench.Models.Sensor
      source: Workbench.source
      uid: id
    @sensor.fetch()

    mainView = new Workbench.Views.SensorShowView
      model: @sensor
    window.rm.get('main').show(mainView)
