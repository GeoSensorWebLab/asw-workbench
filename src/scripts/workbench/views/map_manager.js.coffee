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
      pMap = polarMap(@el.id,
        permalink: false
      )
      @map = pMap.map
      @map.setView(@location, @zoom)
