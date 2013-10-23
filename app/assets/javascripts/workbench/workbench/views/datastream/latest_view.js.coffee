class Workbench.Views.DatastreamLatestView extends Backbone.View
  template: JST["workbench/workbench/templates/latest"]

  initialize: ->

  render: ->
    latest = _.last(@model.get("seriesData"))
    @$el.html(@template({
      latest: latest.value
      date:   new Date(latest.timestamp)
      unit:   @model.get("unit")
    }))
    this
