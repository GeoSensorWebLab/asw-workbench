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
      L.tileLayer(Workbench.tile_url, {
        attribution: Workbench.tile_attribution
      }).addTo(@map)

      L.marker(@location).addTo(@map)
