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
              text: t('chart.ranges.two_hour')
            },
            {
              type: 'day'
              count: 1
              text: t('chart.ranges.one_day')
            },
            {
              type: 'week'
              count: 1
              text: t('chart.ranges.one_week')
            },
            {
              type: 'ytd'
              text: t('chart.ranges.ytd')
            },
            {
              type: 'all'
              text: t('chart.ranges.all')
            }]
    )

    this
