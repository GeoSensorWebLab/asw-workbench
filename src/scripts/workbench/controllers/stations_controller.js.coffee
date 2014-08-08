class Workbench.Controllers.StationsController extends Backbone.Marionette.Controller
  initialize: (options) ->
    @$el = options.el

  #
  # Actions
  #

  index: =>
    @stations = new Workbench.Collections.StationsCollection(window.sampleStations)

    mainView = new Workbench.Views.StationIndexView
      collection: @stations
      el: @$el
    mainView.render()
