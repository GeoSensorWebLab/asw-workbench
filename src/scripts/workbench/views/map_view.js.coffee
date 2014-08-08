class Workbench.Views.MapView extends Backbone.Marionette.ItemView
  template: false
  id: "stationsMapLeaflet"

  initialize: ->
    @map = new Workbench.Views.MapManager()

  onDestroy: ->
    @map.remove() if @map

  onShow: ->
    if @el.id is ""
      console.warn "No Map Element"
    else
      @map.setElement(@$el).render()

  onRender: ->
    @updateMapSize()
    $(window).on("resize", @updateMapSize)

  updateMapSize: =>
    windowHeight = $(window).height()
    existingHeight = $("#content").height() - @$el.height()
    @$el.height(windowHeight - existingHeight)
