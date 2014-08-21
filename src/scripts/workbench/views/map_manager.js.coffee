class Workbench.Views.MapManager extends Backbone.View
  template: false

  initialize: (options = {}) ->
    @zoom = 3
    @location = options.location || [70, -100]

  remove: ->
    @map.remove() if @map
    super()

  render: ->
    if @el.id is ""
      console.warn "No Map Element"
    else
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
