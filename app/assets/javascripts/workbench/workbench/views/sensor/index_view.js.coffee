class Workbench.Views.SensorIndexView extends Backbone.View
  initialize: ->
    @listView = new Workbench.Views.SensorListView
      collection: @collection
      el: $("#apiView ul")

  render: ->
    api_key = @collection.source.api_key
    @$(".api-key").attr("href", "sensors?api_key=#{api_key}").text(api_key)
    @$el.show()
    this
