class Workbench.Controllers.SensorsController extends Backbone.Marionette.Controller
  initialize: (options) ->
    @$el = options.el
    @getApiKey()
    Workbench.source = new Geocens.DataService({ api_key: @apiKey })

  # Ensure the API Key is displayed in the URL params.
  addApiKeyParam: (base) ->
    if (location.search.length < 1)
      Backbone.history.navigate "#{base}?api_key=#{@apiKey}", { replace: true }

  # Check params for API Key. Use the demo user's key if none is specified.
  getApiKey: ->
    if (location.search.length < 1)
      # Demo user read-only key
      @apiKey ||= "798192d6c2c55da138e1a1619caeeff4"
    else
      params = deparam(location.search.split('?')[1])
      @apiKey ||= params.api_key

  #
  # Actions
  #

  index: =>
    @addApiKeyParam("sensors")

    @sensors = new Workbench.Collections.SensorsCollection
      source: Workbench.source

    mainView = new Workbench.Views.SensorIndexView
      collection: @sensors
      el: @$el
    mainView.render()
    @sensors.fetch()

  show: (id) =>
    @addApiKeyParam("sensors/#{id}")

    @sensor = new Workbench.Models.Sensor
      source: Workbench.source
      uid: id
    @sensor.fetch()

    mainView = new Workbench.Views.SensorShowView
      model: @sensor
      el: @$el
    mainView.render()
