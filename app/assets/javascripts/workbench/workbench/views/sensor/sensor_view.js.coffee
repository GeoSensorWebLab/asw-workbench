class Workbench.Views.SensorView extends Backbone.View
  template: JST["workbench/workbench/templates/sensor"]

  tagName: "li"
  className: "sensor"

  initialize: ->

  render: ->
    @$el.html(@template(@model.toJSON()))
    this
