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

  # Fade out element, switch content, then fade back in
  fadeSwitch: ($element, content) ->
    $element.fadeOut().promise().done(->
      @text(content).fadeIn()
    )

  # Render without sensor information
  renderBasic: ->
    this

  render: ->
    @fadeSwitch(@$(".sensor-name"), @model.get("title"))
    @fadeSwitch(@$(".sensor-endpoint"), @model.get("endpoint"))
    @fadeSwitch(@$(".sensor-description"), @model.get("description"))
    @fadeSwitch(@$(".sensor-owner"), @model.get("contact_name"))
    @fadeSwitch(@$(".sensor-contact"), @model.get("contact_email"))

    @updateDatastreamCount()

    @datastreamListView.render()
    @mapView.render()
    this

  updateDatastreamCount: ->
    @fadeSwitch(@$(".sensor-datastream-count"), @model.get("datastreams").length)
    this
