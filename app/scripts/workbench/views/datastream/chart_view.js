Workbench.Views.DatastreamChartView = Backbone.Marionette.ItemView.extend({
  template: false,

  onBeforeDestroy: function() {
    if (this.chart) {
      this.geocensChart.chart.destroy();
    }
  },

  onRender: function() {
    var self = this;
    this.$el.animate({ height: 400 }).promise().done(function() {
      self.geocensChart = self.$el.GeocensChart({
        datastream: self.model.object,

        chart: {
          rangeSelector: {
            selected: 1,
            buttons: [{
              type: 'minute',
              count: 120,
              text: t('chart.ranges.two_hour')
            },
            {
              type: 'day',
              count: 1,
              text: t('chart.ranges.one_day')
            },
            {
              type: 'week',
              count: 1,
              text: t('chart.ranges.one_week')
            },
            {
              type: 'ytd',
              text: t('chart.ranges.ytd')
            },
            {
              type: 'all',
              text: t('chart.ranges.all')
            }]
          }
        }
      });
    });

    return this;
  }
});
