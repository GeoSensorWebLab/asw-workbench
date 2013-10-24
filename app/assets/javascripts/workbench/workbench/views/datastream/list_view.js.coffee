class Workbench.Views.DatastreamListView extends Backbone.View
  loadingTemplate: JST["workbench/workbench/templates/loading"]

  initialize: ->
    @views = []

    @listenTo @collection, "request", =>
      @$el.append(@loadingTemplate())

    @listenTo @collection, "reset", =>
      @$el.empty()

    @listenTo @collection, "add", (datastream) =>
      @addOne datastream

  addAll: (datastreams) =>
    datastreams.each @addOne

  addOne: (datastream) =>
    datastreamView = new Workbench.Views.DatastreamShowView
      model: datastream

    @append(datastreamView)

  append: (datastreamView) ->
    @views.push(datastreamView)
    @$el.append datastreamView.render().el

  render: ->
    @addAll(@collection)
    this
