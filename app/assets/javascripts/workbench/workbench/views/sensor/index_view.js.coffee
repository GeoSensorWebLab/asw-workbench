class Workbench.Views.SensorIndexView extends Backbone.View
  initialize: ->
    @listView = new Workbench.Views.SensorListView
      collection: @collection
      el: $("#apiView ul")

  renderBasic: ->
    @$el.show()
    this

  render: ->
    this
