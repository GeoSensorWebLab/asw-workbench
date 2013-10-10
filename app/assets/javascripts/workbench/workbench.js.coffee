#= require_self
#= require_tree ./workbench

window.Workbench =
  Collections: {}
  Events: _.extend({}, Backbone.Events)
  Models: {}
  Routers: {}
  Views: {}

$ ->
  Backbone.history.start(root: "/workbench/sensors")
