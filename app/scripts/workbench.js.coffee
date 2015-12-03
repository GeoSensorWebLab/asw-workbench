window.Workbench = new Backbone.Marionette.Application()

Workbench.Collections = {}
Workbench.Controllers = {}
Workbench.Events = _.extend({}, Backbone.Events)
Workbench.Models = {}
Workbench.Routers = {}
Workbench.Views = {}

Workbench.addInitializer (options) ->
  # Regions
  window.rm = new Backbone.Marionette.RegionManager({
    regions: {
      main: "#app"
    }
  })

  # Controllers and Routing
  stationsController = new Workbench.Controllers.StationsController(
    el: options.el
  )

  stationsRouter = new Marionette.AppRouter(
    controller: stationsController
    appRoutes:
      '': 'index'
  )

  sensorsController = new Workbench.Controllers.SensorsController(
    el: options.el
  )

  sensorsRouter = new Marionette.AppRouter(
    controller: sensorsController
    appRoutes:
      'sensors': 'index'
      'sensors/': 'index'
      'sensors/:id': 'show'
  )

  Backbone.history.start(pushState: true, root: '/')
