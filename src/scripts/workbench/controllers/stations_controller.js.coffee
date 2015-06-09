class Workbench.Controllers.StationsController extends Backbone.Marionette.Controller
  #
  # Actions
  #

  index: =>
    @stations = new Workbench.Collections.StationsCollection(window.sampleStations)

    mainView = new Workbench.Views.StationIndexView
      collection: @stations
    window.rm.get('main').show(mainView)
