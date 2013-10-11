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

  render: ->
    @$(".sensor-name").text(@model.get("name"))
    @$(".sensor-endpoint").text(@model.get("endpoint"))
    @$(".sensor-description").text(@model.get("description"))
    @$(".sensor-owner").text(@model.get("owner"))
    @$(".sensor-contact").text(@model.get("contact"))
    @$(".sensor-datastream-count").text(@model.datastreams.length)

    @datastreamListView.render()
    @mapView.render()
    this
