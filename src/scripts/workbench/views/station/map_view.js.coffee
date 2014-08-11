class Workbench.Views.StationPopupView extends Backbone.View
  popupTemplate: "workbench/templates/popup"

  initialize: (options) ->
    @markerView = options.markerView

    # Pass this view as a _source for the popup.
    @popup = L.popup({
      offset: L.point(L.Icon.Default.prototype.options.popupAnchor)
    }, this)

  # Hook into Leaflet's _source.fire functions to catch popupclose and remove
  # the view.
  fire: (eventName) ->
    if (eventName is "popupclose")
      @remove()

  render: ->
    @$el.html(JST[@popupTemplate](@model.toJSON()))
    this

  show: ->
    @popup.setContent(@render().el)
      .setLatLng(@model.latlng())
      .openOn(@markerView.mapManager.map)

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
