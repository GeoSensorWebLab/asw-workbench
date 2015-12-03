Workbench.Controllers.SensorsController = Backbone.Marionette.Controller.extend({
  initialize: function(options) {
    this.getApiKey();
    Workbench.source = new Geocens.DataService({ api_key: this.apiKey });
  },

  // Check params for API Key.
  getApiKey: function() {
    if (location.search.length > 0) {
      var params = deparam(location.search.split('?')[1]);
      this.apiKey = params.api_key;
    }
  },

  //
  // Actions
  //

  index: function() {
    this.getApiKey();
    var source = new Geocens.DataService({ api_key: this.apiKey });
    this.sensors = new Workbench.Collections.SensorsCollection({
      source: source
    });

    var mainView = new Workbench.Views.SensorIndexView({
      collection: this.sensors
    });
    window.rm.get('main').show(mainView);
    this.sensors.fetch();
  },

  show: function(id) {
    this.getApiKey();
    var source = new Geocens.DataService({ api_key: this.apiKey });
    this.sensor = new Workbench.Models.Sensor({
      source: source,
      uid: id
    });
    this.sensor.fetch();

    var mainView = new Workbench.Views.SensorShowView({
      model: this.sensor
    });
    window.rm.get('main').show(mainView);
  }
});
