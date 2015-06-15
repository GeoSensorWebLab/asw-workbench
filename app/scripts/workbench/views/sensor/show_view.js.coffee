class Workbench.Views.SensorShowView extends Backbone.Marionette.LayoutView
  template: "workbench/templates/sensor_show"
  id: "sensorView"
  className: "page-header"

  modelEvents:
    "sensorLoaded": "loadAttributes"

  regions:
    datastreams: ".datastreamCollectionView"
    metadata: ".metadataView"

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  onShow: ->
    @metadata.show(new Workbench.Views.SensorMetadataView(
      model: @model
    ))
    @datastreams.show(new Workbench.Views.DatastreamCollectionView(
      collection: @model.get("datastreams")
    ))

  loadAttributes: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
