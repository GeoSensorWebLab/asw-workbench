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
      @map = L.map(@el.id).setView(@location, @zoom)
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: t('map.attribution')
      }).addTo(@map)
