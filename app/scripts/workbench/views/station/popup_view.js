Workbench.Views.StationPopupView = Backbone.View.extend({
  popupTemplate: "workbench/templates/popup",

  className: "stationPopup",

  initialize: function(options) {
    this.markerView = options.markerView;

    // Pass this view as a _source for the popup.
    this.popup = L.popup({
      offset: L.point(L.Icon.Default.prototype.options.popupAnchor)
    }, this);

    this.stationSensorsView = new Workbench.Views.StationSensorsView({
      collection: this.model.sensors
    });
  },

  // Hook into Leaflet's _source.fire functions to catch popupclose and remove
  // the view.
  fire: function(eventName) {
    if (eventName === "popupclose") {
      this.remove();
    }
  },

  render: function() {
    this.$el.html(JST[this.popupTemplate](this.model.toJSON()));
    this.$(".stationSensors").html(this.stationSensorsView.render().$el);
    return this;
  },

  show: function() {
    this.popup.setContent(this.render().el)
      .setLatLng(this.model.latlng())
      .openOn(this.markerView.mapManager.map);
  }
});
