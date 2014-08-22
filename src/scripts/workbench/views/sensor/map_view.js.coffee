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
      @map = L.map(@el.id, {
        continuousWorld: true
        center: Workbench.provider.center
        minZoom: Workbench.provider.zoomRange.min
        maxZoom: Workbench.provider.zoomRange.max
        crs: Workbench.provider.CRS
      })

      L.tileLayer(Workbench.provider.url, {
          attribution: Workbench.provider.attribution
      }).addTo(@map)

      @map.setView(@location, @zoom)

      L.marker(@location).addTo(@map)
