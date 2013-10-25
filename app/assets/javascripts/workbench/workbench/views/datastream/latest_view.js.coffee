class Workbench.Views.DatastreamLatestView extends Backbone.View
  template: JST["workbench/workbench/templates/latest"]

  initialize: ->

  # Animate out, update content, animate back in
  swapHtml: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @html(content).transition(rotateX: '0deg')
    )

  render: ->
    latest = _.last(@model.get("seriesData"))

    if latest?
      @swapHtml(@$el, @template({
        latest: latest.value
        date:   new Date(latest.timestamp)
        unit:   @model.get("unit")
      }))
    else
      @swapHtml(@$el, @template({
        latest: "No data"
        date:   "No data"
        unit:   ""
      }))
    this

  update: (date, value) ->
    @swapHtml(@$("date"), date)
    @swapHtml(@$(".value"), value)
    @swapHtml(@$(".unit"), @model.get("unit"))
    this
