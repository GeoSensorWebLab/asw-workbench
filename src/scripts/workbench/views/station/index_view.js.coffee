class Workbench.Views.StationIndexView extends Backbone.Marionette.LayoutView
  template: "workbench/templates/station_index"

  regions:
    map: "#stationsMap"

  onRender: ->
    @map.show(new Workbench.Views.StationsMapView(
      collection: @collection
    ))
