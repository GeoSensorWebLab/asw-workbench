class Workbench.Views.SensorLoggerView extends Backbone.Marionette.ItemView
  template: "workbench/templates/logger"

  modelEvents:
    "sensorLoaded": "loadAttributes"

  ui:
    log: "#logger"
    endpoint: ".sensor-endpoint"

  initialize: ->
    @renderDeferred = $.Deferred()

  onRender: ->
    @renderDeferred.resolve()

  loadAttributes: ->
    @renderDeferred.done(=>
      @swapContent(@ui.endpoint, @model.get("endpoint"))
    )

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )
