#= require_self
#= require_tree ./workbench

window.Workbench = new Backbone.Marionette.Application()

Workbench.Collections = {}
Workbench.Events = _.extend({}, Backbone.Events)
Workbench.Models = {}
Workbench.Routers = {}
Workbench.Views = {}

Workbench.addInitializer (options) ->
  window.appRouter = new Workbench.Routers.WorkbenchRouter
    element: $("#content")

  Backbone.history.start(pushState: true, root: '/')
