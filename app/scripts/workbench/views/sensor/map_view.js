Workbench.Views.SensorMapView = Backbone.Marionette.ItemView.extend({
  template: false,

  initialize: function() {
    this.zoom = 13;
  },

  onDestroy: function() {
    if (this.map) {
      this.map.remove();
    }
  },

  onShow: function() {
    if (this.el.id === "") {
      console.warn("No Map Element");
    } else {
      this.location = [this.model.get("latitude"), this.model.get("longitude")];
      var pMap = polarMap(this.el.id, { permalink: false });
      this.map = pMap.map;
      this.map.setView(this.location, this.zoom);

      L.marker(this.location).addTo(this.map);
    }
  }
});
