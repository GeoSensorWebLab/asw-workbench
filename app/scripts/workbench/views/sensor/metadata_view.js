Workbench.Views.SensorMetadataView = Backbone.Marionette.LayoutView.extend({
  template: "metadata",

  modelEvents: {
    "sensorLoaded": "loadAttributes"
  },

  ui: {
    description: '.sensor-description',
    owner: '.sensor-owner',
    contact: '.sensor-contact',
    otherSensors: '.other-sensors',
    datastreamCount: '.sensor-datastream-count'
  },

  regions: {
    map: "#map"
  },

  initialize: function() {
    this.renderDeferred = $.Deferred();

    var self = this;
    this.listenTo(this.model.get("datastreams"), "add", function() {
      self.renderDeferred.done(function() {
        self.updateDatastreamCount();
      });
    });

    // The element ID MUST be passed into Leaflet, so we use a custom attachment
    // function for the Marionette region.
    this.map.attachHtml = function(view) {
      this.$el.empty();
      view.setElement(this.$el);
    };
  },

  // Animate out, update content, animate back in
  swapContent: function($element, content) {
    $element.transition({ rotateX: '90deg' }).promise().done(function() {
      this.text(content).transition({ rotateX: '0deg' });
    });
  },

  onRender: function() {
    this.renderDeferred.resolve();
    this.ui.otherSensors.prop('href', Backbone.history.root + "sensors?api_key=" + this.model.get('api_key'));
  },

  loadAttributes: function() {
    var self = this;
    this.renderDeferred.done(function() {
      self.swapContent(self.ui.description, self.model.get("description"));
      self.swapContent(self.ui.owner, self.model.get("contact_name"));
      self.swapContent(self.ui.contact, self.model.get("contact_email"));

      self.updateDatastreamCount();

      self.map.show(new Workbench.Views.SensorMapView({
        model: self.model
      }));
    });
  },

  updateDatastreamCount: function() {
    this.swapContent(this.ui.datastreamCount, this.model.get("datastreams").length);
    return this;
  }
});
