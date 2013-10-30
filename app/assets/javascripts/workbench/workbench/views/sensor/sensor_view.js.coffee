class Workbench.Views.SensorView extends Backbone.View
  template: JST["workbench/workbench/templates/sensor"]

  tagName: "li"
  className: "sensor"

  initialize: ->

  render: ->
    attributes = @model.toJSON()
    attributes.api_key = appRouter.apiKey
    @$el.html(@template(attributes))
    this
