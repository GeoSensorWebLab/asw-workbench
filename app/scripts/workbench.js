window.Workbench = new Backbone.Marionette.Application();

Workbench.Collections = {};
Workbench.Controllers = {};
Workbench.Events = _.extend({}, Backbone.Events);
Workbench.Models = {};
Workbench.Routers = {};
Workbench.Views = {};

Workbench.addInitializer(function(options) {
  // Regions
  window.rm = new Backbone.Marionette.RegionManager({
    regions: {
      main: "#app"
    }
  });

  // Controllers and Routing
  var stationsController = new Workbench.Controllers.StationsController({
    el: options.el
  });

  var stationsRouter = new Marionette.AppRouter({
    controller: stationsController,
    appRoutes: {
      '': 'index'
    }
  });

  var sensorsController = new Workbench.Controllers.SensorsController({
    el: options.el
  });

  var sensorsRouter = new Marionette.AppRouter({
    controller: sensorsController,
    appRoutes: {
      'sensors': 'index',
      'sensors/': 'index',
      'sensors/:id': 'show'
    }
  });

  Backbone.history.start({ pushState: true, root: '/' });
});
