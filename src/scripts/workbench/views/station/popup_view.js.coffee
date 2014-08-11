class Workbench.Views.StationPopupView extends Backbone.View
  popupTemplate: "workbench/templates/popup"

  initialize: (options) ->
    @markerView = options.markerView

    # Pass this view as a _source for the popup.
    @popup = L.popup({
      offset: L.point(L.Icon.Default.prototype.options.popupAnchor)
    }, this)

    @stationSensorsView = new Workbench.Views.StationSensorsView(
      collection: @model.sensors
    )

  # Hook into Leaflet's _source.fire functions to catch popupclose and remove
  # the view.
  fire: (eventName) ->
    if (eventName is "popupclose")
      @remove()

  render: ->
    @$el.html(JST[@popupTemplate](@model.toJSON()))
    @$(".stationSensors").html(@stationSensorsView.render().$el)
    this

  show: ->
    @popup.setContent(@render().el)
      .setLatLng(@model.latlng())
      .openOn(@markerView.mapManager.map)
