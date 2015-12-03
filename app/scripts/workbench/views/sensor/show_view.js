Workbench.Views.SensorShowView = Backbone.Marionette.LayoutView.extend({
  template: "workbench/templates/sensor_show",
  id: "sensorView",
  className: "page-header",

  modelEvents: {
    "sensorLoaded": "loadAttributes"
  },

  regions: {
    datastreams: ".datastreamCollectionView",
    metadata: ".metadataView"
  },

  // Animate out, update content, animate back in
  swapContent: function($element, content) {
    $element.transition({ rotateX: '90deg' }).promise().done(function() {
      this.text(content).transition({ rotateX: '0deg' });
    });
  },

  onShow: function() {
    this.metadata.show(new Workbench.Views.SensorMetadataView({
      model: this.model
    }));
    this.datastreams.show(new Workbench.Views.DatastreamCollectionView({
      collection: this.model.get("datastreams")
    }));
  },

  loadAttributes: function() {
    this.swapContent(this.$(".sensor-name"), this.model.get("title"));
  }
});
