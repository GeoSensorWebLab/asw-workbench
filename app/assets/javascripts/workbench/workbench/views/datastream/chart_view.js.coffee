class Workbench.Views.DatastreamChartView extends Backbone.View
  initialize: ->

  render: ->
      @chart = @$el.GeocensChart
        datastream: @model

    this
