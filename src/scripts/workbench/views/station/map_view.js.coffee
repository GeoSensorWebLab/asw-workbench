class Workbench.Views.StationMarkerView extends Backbone.Marionette.ItemView
  template: false

  initialize: (options) ->
    @mapManager = options.mapManager
    @marker = L.marker()

  onShow: ->
    @marker.setLatLng(@model.latlng())
      .addTo(@mapManager.map)
      .on("click", (event) =>
        new Workbench.Views.StationPopupView(
          model: @model
          markerView: this
        ).show()
      )


class Workbench.Views.StationsMapView extends Backbone.Marionette.CollectionView
  template: false
  id: "stationsMapLeaflet"

  childView: Workbench.Views.StationMarkerView

  initialize: ->
    @mapManager = new Workbench.Views.MapManager()

  childViewOptions: (model, index) ->
    { mapManager: @mapManager }

  onDestroy: ->
    @mapManager.remove() if @mapManager

  onShow: ->
    @mapManager.setElement(@$el).render()

  onRender: ->
    @updateMapSize()
    $(window).on("resize", @updateMapSize)

  updateMapSize: =>
    windowHeight = $(window).height()
    existingHeight = $("#content").height() - @$el.height()
    @$el.height(windowHeight - existingHeight)
