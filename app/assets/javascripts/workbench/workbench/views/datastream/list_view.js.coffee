class Workbench.Views.DatastreamListView extends Backbone.View
  template: JST["workbench/workbench/templates/datastream_list"]

  initialize: ->
    @views = []

  addAll: (datastreams) ->
    datastreams.each @addOne

  addOne: (datastream) ->
    datastreamView = new Workbench.Views.DatastreamShowView
      model: datastream

    @append(datastreamView)

  append: (datastreamView) ->
    @views.push(datastreamView)
    @$el.append datastreamView.render().el

  render: ->
    @$el.html(@template())
    @addAll(@collection)
    this
