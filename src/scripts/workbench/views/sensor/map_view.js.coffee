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
      pMap = polarMap(@el.id, { permalink: false })
      @map = pMap.map
      @map.setView(@location, @zoom)

      L.marker(@location).addTo(@map)
