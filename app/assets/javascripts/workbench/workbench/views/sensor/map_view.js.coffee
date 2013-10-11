class Workbench.Views.SensorMapView extends Backbone.View
  initialize: ->
    @location = [@model.get("latitude"), @model.get("longitude")]
    @zoom = 13

  render: ->
    @map = L.map(@el.id).setView(@location, @zoom)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(@map)

    L.marker(@location).addTo(@map)
    this
