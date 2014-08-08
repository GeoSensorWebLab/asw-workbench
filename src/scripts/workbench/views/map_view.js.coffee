class Workbench.Views.MapView extends Backbone.Marionette.ItemView
  template: false
  id: "stationsMapLeaflet"

  initialize: ->
    @zoom = 3

  onDestroy: ->
    @map.remove() if @map

  onShow: ->
    if @el.id is ""
      console.warn "No Map Element"
    else
      @location = [70, -100]
      @map = L.map(@el.id).setView(@location, @zoom)
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: t('map.attribution')
      }).addTo(@map)

  onRender: ->
    @updateMapSize()
    $(window).on("resize", @updateMapSize)

  updateMapSize: =>
    windowHeight = $(window).height()
    existingHeight = $("#content").height() - @$el.height()
    @$el.height(windowHeight - existingHeight)
