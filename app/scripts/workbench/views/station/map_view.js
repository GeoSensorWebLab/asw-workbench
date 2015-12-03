Workbench.Views.StationMarkerView = Backbone.Marionette.ItemView.extend({
  template: false,

  initialize: function(options) {
    this.mapManager = options.mapManager;
    this.marker = L.marker();
  },

  onShow: function() {
    var self = this;
    this.marker.setLatLng(this.model.latlng())
      .on("click", function(event) {
        new Workbench.Views.StationPopupView({
          model: self.model,
          markerView: self
        }).show();
      });
    this.mapManager.markers.addLayer(this.marker);
  }
});

Workbench.Views.StationsMapView = Backbone.Marionette.CollectionView.extend({
  template: false,
  id: "stationsMapLeaflet",

  childView: Workbench.Views.StationMarkerView,

  initialize: function() {
    this.mapManager = new Workbench.Views.MapManager();
  },

  childViewOptions: function(model, index) {
    return { mapManager: this.mapManager };
  },

  onDestroy: function() {
    if (this.mapManager) {
      this.mapManager.remove();
    }
  },

  onShow: function() {
    return this.mapManager.setElement(this.$el).render();
  },

  onRender: function() {
    this.updateMapSize();
    $(window).on("resize", this.updateMapSize, this);
  },

  updateMapSize: function() {
    var windowHeight = $(window).height();
    var existingHeight = $("#content").height() - this.$el.height();
    this.$el.height(windowHeight - existingHeight);
  }
});
