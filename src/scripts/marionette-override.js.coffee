# See https://github.com/marionettejs/backbone.marionette/wiki/Using-jst-templates-with-marionette
Backbone.Marionette.Renderer.render = (template, data) ->
  if (!JST[template])
    throw "Template '#{template}' not found!"
  JST[template](data)
