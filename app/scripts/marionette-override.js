// See https://github.com/marionettejs/backbone.marionette/wiki/Using-jst-templates-with-marionette
Backbone.Marionette.Renderer.render = function(template, data) {
  if (!JST[template]) {
    throw "Template '"+ template + "' not found!";
  }
  return JST[template](data);
};
