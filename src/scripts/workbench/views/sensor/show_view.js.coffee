class Workbench.Views.SensorShowView extends Backbone.View
  template: JST["workbench/templates/sensor_show"]
  id: "sensorView"
  className: "page-header"

  initialize: ->
    @datastreamListView = new Workbench.Views.DatastreamListView(
      collection: @model.get("datastreams")
    )

    @loggerView = new Workbench.Views.SensorLoggerView(
      model: @model
    )

    @metadataView = new Workbench.Views.SensorMetadataView(
      model: @model
    )

    @listenTo @model, "sensorLoaded", =>
      @render()

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  remove: ->
    @datastreamListView.remove()
    @loggerView.remove()
    @metadataView.remove()
    super()

  # Render without sensor information
  renderBasic: (container) ->
    container.append(@$el)
    @$el.html(@template()).show()

    @datastreamListView.setElement(@$("#dataView ul"))
    @loggerView.renderBasic(@$el)
    @metadataView.renderBasic(@$el)
    this

  render: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
    @datastreamListView.render()
    this
