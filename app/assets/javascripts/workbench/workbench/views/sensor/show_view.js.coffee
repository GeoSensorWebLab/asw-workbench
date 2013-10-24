class Workbench.Views.SensorShowView extends Backbone.View
  initialize: ->
    @mapView = new Workbench.Views.SensorMapView(
      el: @$("#map")
      model: @model
    )

    @datastreamListView = new Workbench.Views.DatastreamListView(
      el: @$("#dataView ul")
      collection: @model.get("datastreams")
    )

    @listenTo @model, "sensorLoaded", =>
      @render()

    @listenTo @model.get("datastreams"), "add", (model, options) =>
      @updateDatastreamCount()

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  # Render without sensor information
  renderBasic: ->
    this

  render: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
    @swapContent(@$(".sensor-endpoint"), @model.get("endpoint"))
    @swapContent(@$(".sensor-description"), @model.get("description"))
    @swapContent(@$(".sensor-owner"), @model.get("contact_name"))
    @swapContent(@$(".sensor-contact"), @model.get("contact_email"))

    @updateDatastreamCount()

    @datastreamListView.render()
    @mapView.render()
    this

  updateDatastreamCount: ->
    @swapContent(@$(".sensor-datastream-count"), @model.get("datastreams").length)
    this
