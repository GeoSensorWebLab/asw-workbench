class Workbench.Views.SensorShowView extends Backbone.View
  template: JST["workbench/templates/sensor_show"]
  id: "sensorView"
  className: "page-header"

  initialize: ->
    @views = new Backbone.ChildViewContainer()

    @listenTo @model, "sensorLoaded", =>
      @loadAttributes()

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

    @views.add(new Workbench.Views.DatastreamCollectionView(
      collection: @model.get("datastreams")
    ))
    @views.add(new Workbench.Views.SensorLoggerView(
      model: @model
    ))
    @views.add(new Workbench.Views.SensorMetadataView(
      model: @model
    ))

    @views.map (view) =>
      @$el.append(view.render().$el)

    this

  loadAttributes: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
