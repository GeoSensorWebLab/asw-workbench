#= require_self
#= require_tree ./workbench

window.Workbench = new Backbone.Marionette.Application()

Workbench.Collections = {}
Workbench.Controllers = {}
Workbench.Events = _.extend({}, Backbone.Events)
Workbench.Models = {}
Workbench.Routers = {}
Workbench.Views = {}

Workbench.addInitializer (options) ->
  # Tile Provider
  providers = {
    osm: {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    },

    mapquest_open: {
      url: 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png'
      attribution: 'Data, imagery and map information provided by MapQuest, <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> and contributors, <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">ODbL</a>'
    },

    stamen_toner: {
      url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }
  }

  provider = options.provider || "stamen_toner"

  Workbench.tile_url = providers[provider].url
  Workbench.tile_attribution = providers[provider].attribution

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
