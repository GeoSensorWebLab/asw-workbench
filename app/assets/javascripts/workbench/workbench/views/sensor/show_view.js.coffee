class Workbench.Views.SensorShowView extends Backbone.View
  initialize: ->
    @mapView = new Workbench.Views.SensorMapView(
      el: @$("#map")
      model: @model
    )

  render: ->
    @$(".sensor-name").text(@model.get("name"))
    @$(".sensor-endpoint").text(@model.get("endpoint"))
    @$(".sensor-description").text(@model.get("description"))
    @$(".sensor-owner").text(@model.get("owner"))
    @$(".sensor-contact").text(@model.get("contact"))
    @$(".sensor-datastream-count").text(@model.get("datastreams").length)

    @mapView.render()
    this
