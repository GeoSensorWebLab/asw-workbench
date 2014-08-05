class Workbench.Views.DatastreamChartView extends Backbone.Marionette.ItemView
  template: false

  onBeforeDestroy: ->
    @geocensChart.chart.destroy() if @chart

  onRender: ->
    @$el.animate(height: 400).promise().done(=>
      @geocensChart = @$el.GeocensChart
        datastream: @model.object

        chart:
          rangeSelector:
            selected: 1
            buttons: [{
              type: 'minute'
              count: 120
              text: "2h"
            },
            {
              type: 'day'
              count: 1
              text: "1d"
            },
            {
              type: 'week'
              count: 1
              text: "1w"
            },
            {
              type: 'ytd'
              text: "YTD"
            },
            {
              type: 'all'
              text: "All"
            }]
    )

    this
