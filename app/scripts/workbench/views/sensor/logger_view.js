Workbench.Views.SensorLoggerView = Backbone.Marionette.ItemView.extend({
  template: "workbench/templates/logger",

  modelEvents: {
    "sensorLoaded": "loadAttributes"
  },

  ui: {
    log: "#logger",
    endpoint: ".sensor-endpoint"
  },

  initialize: function() {
    this.renderDeferred = $.Deferred();
  },

  onRender: function() {
    this.renderDeferred.resolve();
  },

  loadAttributes: function() {
    var self = this;
    this.renderDeferred.done(function() {
      self.swapContent(self.ui.endpoint, self.model.get("endpoint"));
    });
  },

  // Animate out, update content, animate back in
  swapContent: function($element, content) {
    var self = this;
    $element.transition({ rotateX: '90deg' }).promise().done(function() {
      self.text(content).transition({ rotateX: '0deg' });
    });
  }
});
