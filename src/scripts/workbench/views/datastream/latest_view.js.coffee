class Workbench.Views.DatastreamLatestView extends Backbone.Marionette.ItemView
  template: "workbench/templates/latest"

  # Animate out, update content, animate back in
  swapHtml: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @html(content).transition(rotateX: '0deg')
    )

  onRender: ->
    latest = _.last(@model.get("seriesData"))

    if latest?
      @update(new Date(latest.timestamp), latest.value)
    else
      @update("No data", "No data")


  update: (date, value) ->
    @swapHtml(@$("date"), date)
    @swapHtml(@$(".value"), value)
    @swapHtml(@$(".unit"), @model.get("unit"))
