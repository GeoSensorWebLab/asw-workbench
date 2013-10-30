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
      # Defer until after main element is rendered
      @renderDeferred.done(=>
        # Render the chart
        _.delay(=>
          @chartView.setElement(@$(".chart")).render()
        , 0)

        # Render the latest view
        @latestView.setElement(@$("#latest_#{@model.id}")).render()
      )

  remove: ->
    @chartView.remove()
    @latestView.remove()
    super()

  render: ->
    @$el.animate("min-height": 200).promise().done(=>
      @$el.html(@template(@model.toJSON()))
      @renderDeferred.resolve()
    )
    this
