Workbench.Controllers.StationsController = Backbone.Marionette.Controller.extend({
  //
  // Actions
  //

  index: function() {
    this.stations = new Workbench.Collections.StationsCollection(window.sampleStations);

    var mainView = new Workbench.Views.StationIndexView({
      collection: this.stations
    });
    window.rm.get('main').show(mainView);
  }
});
