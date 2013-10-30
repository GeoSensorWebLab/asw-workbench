class Workbench.Views.DatastreamChartView extends Backbone.View
  initialize: ->

  remove: ->
    @chart.remove()
    @$el.remove()
    @stopListening()
    this

  render: ->
    @$el.animate(height: 400).promise().done(=>
      @chart = @$el.GeocensChart
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
