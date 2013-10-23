class Workbench.Views.DatastreamListView extends Backbone.View
  initialize: ->
    @views = []
    console.log "init", this

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
