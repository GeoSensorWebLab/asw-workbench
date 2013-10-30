class Workbench.Views.SensorIndexView extends Backbone.View
  template: JST["workbench/workbench/templates/sensor_index"]
  id: "listView"

  initialize: ->
    @listView = new Workbench.Views.SensorListView
      collection: @collection

  remove: ->
    @listView.remove()
    super()

  render: (container) ->
    container.append(@$el)

    @$el.html(@template({
      api_key: @collection.source.api_key
    })).show()

    @listView.setElement(@$("ul"))
    this
