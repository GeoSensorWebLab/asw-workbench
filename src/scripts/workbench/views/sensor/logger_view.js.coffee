class Workbench.Views.SensorLoggerView extends Backbone.View
  template: JST["workbench/templates/logger"]

  initialize: ->
    @listenTo @model, "sensorLoaded", =>
      @render()

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  # Render without sensor information
  renderBasic: (container) ->
    container.append(@$el)
    @$el.html(@template()).show()
    this

  render: ->
    @swapContent(@$(".sensor-endpoint"), @model.get("endpoint"))
    this
