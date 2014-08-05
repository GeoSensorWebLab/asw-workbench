class Workbench.Views.SensorShowView extends Backbone.View
  template: JST["workbench/templates/sensor_show"]
  id: "sensorView"
  className: "page-header"

  initialize: ->
    @datastreamCollectionView = new Workbench.Views.DatastreamCollectionView(
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
    @datastreamCollectionView.remove()
    @loggerView.remove()
    @metadataView.remove()
    super()

  # Render without sensor information
  renderBasic: (container) ->
    container.append(@$el)
    @$el.html(@template()).show()

    @datastreamCollectionView.setElement(@$("#dataView ul"))
    @$el.append(@loggerView.render().$el)
    @$el.append(@metadataView.render().$el)
    this

  render: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
    @datastreamCollectionView.render()
    this
