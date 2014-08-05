class Workbench.Views.SensorMapView extends Backbone.Marionette.ItemView
  template: false

  initialize: ->
    @zoom = 13

  onDestroy: ->
    @map.remove() if @map

  onShow: ->
    if @el.id is ""
      console.warn "No Map Element"
    else
      @location = [@model.get("latitude"), @model.get("longitude")]
      @map = L.map(@el.id).setView(@location, @zoom)
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(@map)

      L.marker(@location).addTo(@map)
