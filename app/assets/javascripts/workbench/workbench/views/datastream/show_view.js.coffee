class Workbench.Views.DatastreamShowView extends Backbone.View
  template: JST["workbench/workbench/templates/datastream"]

  tagName: "li"
  className: "datastream"

  initialize: ->
    @renderDeferred = $.Deferred()

    @chartView = new Workbench.Views.DatastreamChartView
      model: @model

    @latestView = new Workbench.Views.DatastreamLatestView
      model: @model

    @listenTo @model, "change:seriesData", =>
      @renderDeferred.done(=>
        _.delay(=>
          @chartView.setElement(@$(".chart")).render()
        , 0)
      )

      @latestView.setElement(@$("#latest_#{@model.id}")).render()

  render: ->
    @$el.animate("min-height": 200).promise().done(=>
      @$el.html(@template(@model.toJSON()))
      @renderDeferred.resolve()
    )
    this
