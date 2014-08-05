class Workbench.Views.SensorView extends Backbone.View
  template: JST["workbench/templates/sensor"]

  tagName: "li"
  className: "sensor"

  initialize: ->

  render: ->
    attributes = @model.toJSON()
    attributes.sensorURL = "#{Backbone.history.root}sensors/#{@model.get("uid")}?api_key=#{appRouter.apiKey}"
    @$el.html(@template(attributes))
    this
