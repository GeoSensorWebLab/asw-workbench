class Workbench.Views.SensorIndexView extends Backbone.Marionette.LayoutView
  template: "workbench/templates/sensor_index"
  id: "listView"

  regions:
    sensors: "#sensorList"

  ui:
    api_link: "a.api-key"

  onRender: ->
    key = @collection.source.api_key
    @ui.api_link.prop('href', "sensors?api_key=#{key}")
    @ui.api_link.text(key)

    @sensors.show(new Workbench.Views.SensorCollectionView(
      collection: @collection
    ))
