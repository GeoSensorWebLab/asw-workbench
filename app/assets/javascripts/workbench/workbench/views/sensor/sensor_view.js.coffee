class Workbench.Views.SensorView extends Backbone.View
  template: JST["workbench/workbench/templates/sensor"]

  tagName: "li"
  className: "sensor"

  events:
    "click .viewSensor": "redirectToSensor"

  initialize: ->


  redirectToSensor: ->
    Workbench.Events.trigger "redirectToSensor", @model

  render: ->
    @$el.html(@template(@model.toJSON()))
    this
