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
      code: 'EPSG:3857'
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    },

    mapquest_open: {
      code: 'EPSG:3857'
      url: 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png'
      attribution: 'Data, imagery and map information provided by MapQuest, <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> and contributors, <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">ODbL</a>'
    },

    stamen_toner: {
      code: 'EPSG:3857'
      url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    },

    awm_3573: {
      code: 'EPSG:3573'
      proj4def: '+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
      url: 'http://tiles.arcticconnect.org/osm_3573/{z}/{x}/{y}.png'
      attribution: 'Map tiles by <a href="http://arcticconnect.org">ArcticConnect</a>. Data by <a href="http://osm.org/copyright">OpenStreetMap</a> contributors.'
      zoomRange:
        min: 1
        max: 18
      transformation: new L.Transformation(1, 20036842.762, -1, 20036842.762)
      scale: (zoom) ->
        1 / ((((20036842.762) - (-20036842.762)) / 256) / Math.pow(2, zoom))
      center: [0.0, 0.0]
    }
  }

  provider = providers["awm_3573"]

  if provider.code is 'EPSG:3857'
    provider.CRS = L.CRS.EPSG3857
  else
    CRS = new L.Proj.CRS(provider.code, provider.proj4def, {
      transformation: provider.transformation
    })
    CRS.scale = provider.scale
    provider.CRS = CRS

  Workbench.provider = provider

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
