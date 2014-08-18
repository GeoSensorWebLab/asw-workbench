class Workbench.Views.StationLinkView extends Backbone.Marionette.ItemView
  template: "workbench/templates/station_link"

class Workbench.Views.StationLinksView extends Backbone.Marionette.CollectionView
  childView: Workbench.Views.StationLinkView
