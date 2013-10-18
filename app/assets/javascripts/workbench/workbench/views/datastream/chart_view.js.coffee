class Workbench.Views.DatastreamChartView extends Backbone.View
  initialize: ->

  render: ->
      @chart = @$el.GeocensChart
        datastream: @model

        chart:
          rangeSelector:
            selected: 4
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

    this
