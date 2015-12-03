Workbench.Views.MapManager = Backbone.View.extend({
  template: false,

  initialize: function(options) {
    if (options === undefined) {
      options = {};
    }
    this.zoom = 3;
    this.location = options.location || [70, -100];
  },

  remove: function() {
    if (this.map) {
      this.map.remove();
    }
  },

  render: function() {
    if (this.el.id === "") {
      console.warn("No Map Element");
    } else {
      var pMap = polarMap(this.el.id, {
        permalink: false
      });
      this.map = pMap.map;
      this.markers = new L.MarkerClusterGroup({
        removeOutsideVisibleBounds: false
      });

      this.map.setView(this.location, this.zoom);
      var self = this;
      setTimeout(function() {
        self.map.addLayer(self.markers);
      }, 200);
      return this;
    }
  }
});
