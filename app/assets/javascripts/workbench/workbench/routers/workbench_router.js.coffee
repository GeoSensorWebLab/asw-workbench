class Workbench.Routers.WorkbenchRouter extends Backbone.Router
  initialize: (options) ->
    @sensor = options.sensor
    @navigate(@sensor.id)

  routes:
    '': 'index'
    ':id(/)': 'show'

  index: ->
    console.log "loading index route"
    # render index view

  show: (id) ->
    console.log "loading show route", id
    # render show view
    showView = new Workbench.Views.SensorShowView
      model: new Workbench.Models.Sensor(@sensor)
      el: $("#sensorView")
    showView.render()
