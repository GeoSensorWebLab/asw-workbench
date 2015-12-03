Workbench.Views.DatastreamView = Backbone.Marionette.LayoutView.extend({
  template: 'workbench/templates/datastream',

  tagName: "li",
  className: "datastream",

  initialize: function() {
    this.renderDeferred = $.Deferred();

    this.chartView = new Workbench.Views.DatastreamChartView({
      model: this.model
    });

    this.latestView = new Workbench.Views.DatastreamLatestView({
      model: this.model
    });

    var self = this;
    this.listenTo(this.model, "change:seriesData", function() {
      // Defer until after main element is rendered
      self.renderDeferred.done(function() {
        // Render the chart
        _.delay(function() {
          self.chartView.setElement(self.$(".chart")).render();
        }, 0);

        // Render the latest view
        self.latestView.setElement(self.$("#latest_" + self.model.id)).render();
      });
    });
  },

  onBeforeDestroy: function() {
    this.chartView.remove();
    this.latestView.remove();
  },

  onRender: function() {
    this.renderDeferred.resolve();
  }
});

Workbench.Views.DatastreamCollectionView = Backbone.Marionette.CollectionView.extend({
  childView: Workbench.Views.DatastreamView,

  tagName: "ul",
  className: "list-unstyled"
});
