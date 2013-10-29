class Workbench.Views.SensorListView extends Backbone.View
  loadingTemplate: JST["workbench/workbench/templates/loading"]

  initialize: ->
    @views = []

    @listenTo @collection, "all", (eventName) =>
      console.log eventName, this

    @listenTo @collection, "request", =>
      @$el.append(@loadingTemplate())

    @listenTo @collection, "reset", =>
      @$el.empty()

    @listenTo @collection, "add", (sensor) =>
      @addOne sensor

  addAll: (sensors) =>
    sensors.each @addOne

  addOne: (sensor) =>
    sensorView = new Workbench.Views.SensorView
      model: sensor

    @append(sensorView)

  append: (sensorView) ->
    @views.push(sensorView)
    @$el.append sensorView.render().el

  renderBasic: ->
    @$el.show()
    this

  render: ->
    @addAll(@collection)
    this
