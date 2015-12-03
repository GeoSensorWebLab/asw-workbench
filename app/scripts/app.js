//= require marionette-override
//= require workbench
//= require_tree ./workbench

$(document).on("click", "a:not([data-bypass])", function(evt) {
  var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
  var root = location.protocol + "//" + location.host + Backbone.history.options.root;

  if (href.prop && href.prop.slice(0, root.length) === root) {
    var route = href.prop.slice(root.length, href.prop.length);
    evt.preventDefault();
    Backbone.history.navigate(route, { trigger: true });
  }
});
