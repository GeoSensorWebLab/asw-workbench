#= require jquery/dist/jquery.min
#= require jquery.transit/jquery.transit
#= require json2/json2
#= require jquery-deparam/jquery-deparam
#= require proj4/dist/proj4
#= require proj4leaflet/src/proj4leaflet
#= require leaflet.markercluster/dist/leaflet.markercluster
#= require polarmap/dist/polarmap

#= require slow-ajax
#= require bootstrap/dist/js/bootstrap
#= require highstock-release/highstock
#= require highstock-release/modules/exporting
#= require underscore/underscore
#= require backbone/backbone
#= require backbone.hal/backbone.hal.js
#= require marionette/lib/backbone.marionette
#= require ./marionette-override
#= require geocens-js-api/geocens
#= require geocens-js-api/geocens-chart
#
#= require workbench

$(document).on "click", "a:not([data-bypass])", (evt) ->
  href = { prop: $(this).prop("href"), attr: $(this).attr("href") }
  root = location.protocol + "//" + location.host + Backbone.history.options.root

  if (href.prop && href.prop.slice(0, root.length) is root)
    route = href.prop.slice(root.length, href.prop.length)
    evt.preventDefault()
    Backbone.history.navigate(route, { trigger: true })
