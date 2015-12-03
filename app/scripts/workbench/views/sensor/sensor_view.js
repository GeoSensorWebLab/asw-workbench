Workbench.Views.SensorView = Backbone.Marionette.ItemView.extend({
  template: "workbench/templates/sensor",

  tagName: "li",
  className: "sensor",

  showModelPath: function() {
    return Backbone.history.root + "sensors/"+ this.model.get("uid") + "?api_key=" + Workbench.source.api_key;
  },

  onRender: function() {
    this.$("h2.title").html(this.model.get("title"));
    this.$(".description").html(this.model.get("description"));
    this.$("a").prop('href', this.showModelPath());
  }
});

Workbench.Views.SensorCollectionView = Backbone.Marionette.CollectionView.extend({
  childView: Workbench.Views.SensorView,

  tagName: "ul",
  className: "list-unstyled"
});
