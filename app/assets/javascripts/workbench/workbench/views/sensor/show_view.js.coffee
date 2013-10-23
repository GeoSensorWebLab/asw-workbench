class Workbench.Views.SensorShowView extends Backbone.View
  initialize: ->
    @mapView = new Workbench.Views.SensorMapView(
      el: @$("#map")
      model: @model
    )

    @datastreamListView = new Workbench.Views.DatastreamListView(
      el: @$("#dataView ul")
      collection: @model.datastreams
    )

    @listenTo @model, "sensorLoaded", =>
      @render()

    @listenTo @model, "change:datastreams", =>
      @updateDatastreamCount()

  # Render without sensor information
  renderBasic: ->
    this

  render: ->
    console.log @model
    @$(".sensor-name").text(@model.get("title"))
    @$(".sensor-endpoint").text(@model.get("endpoint"))
    @$(".sensor-description").text(@model.get("description"))
    @$(".sensor-owner").text(@model.get("contact_name"))
    @$(".sensor-contact").text(@model.get("contact_email"))
    @updateDatastreamCount()

    @datastreamListView.render()
    @mapView.render()
    this

  updateDatastreamCount: ->
    @$(".sensor-datastream-count").text(@model.datastreams.length)
    this
