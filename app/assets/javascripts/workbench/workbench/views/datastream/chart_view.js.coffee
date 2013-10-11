class Workbench.Views.DatastreamChartView extends Backbone.View
  initialize: ->
    @data = @options.data

  render: ->
    @chart = @$el.highcharts('StockChart',
      rangeSelector:
        selected: 1

      title:
        text: 'Chart Title'

      series: [{
        name: 'Series Name'
        data: @data
        tooltip:
          valueDecimals: 2
      }]
    )

    this
