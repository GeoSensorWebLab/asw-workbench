Workbench.Views.DatastreamLatestView = Backbone.Marionette.ItemView.extend({
  template: "workbench/templates/latest",

  // Animate out, update content, animate back in
  swapHtml: function($element, content) {
    $element.transition({ rotateX: '90deg' }).promise().done(function() {
      this.html(content).transition({ rotateX: '0deg' });
    });
  },

  onRender: function() {
    var latest = _.last(this.model.get("seriesData"));

    if (latest) {
      this.update(new Date(latest.timestamp), latest.value);
    } else {
      this.update(t('noData'), t('noData'));
    }
  },


  update: function(date, value) {
    this.swapHtml(this.$("date"), date);
    this.swapHtml(this.$(".value"), value);
    this.swapHtml(this.$(".unit"), this.model.get("unit"));
  }
});
