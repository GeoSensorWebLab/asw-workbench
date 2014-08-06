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
  window.appController = new Workbench.Controllers.ApplicationController(
    el: options.el
  )

  window.appRouter = new Marionette.AppRouter(
    controller: appController
    appRoutes:
      'sensors': 'index'
      'sensors/': 'index'
      'sensors/:id': 'show'
  )

  Backbone.history.start(pushState: true, root: '/')
