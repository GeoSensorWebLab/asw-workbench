class Workbench.Views.SensorShowView extends Backbone.Marionette.ItemView
  template: "workbench/templates/sensor_show"
  id: "sensorView"
  className: "page-header"

  modelEvents:
    "sensorLoaded": "loadAttributes"

  initialize: ->
    @views = new Backbone.ChildViewContainer()

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  onRender: ->
    @views.add(new Workbench.Views.SensorMetadataView(
      model: @model
    ))
    @views.add(new Workbench.Views.DatastreamCollectionView(
      collection: @model.get("datastreams")
    ))

    @views.each (view) =>
      @$el.append(view.render().$el)

    this

  loadAttributes: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
