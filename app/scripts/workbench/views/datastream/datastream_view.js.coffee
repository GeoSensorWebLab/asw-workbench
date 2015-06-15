class Workbench.Views.DatastreamView extends Backbone.Marionette.LayoutView
  template: 'workbench/templates/datastream'

  tagName: "li"
  className: "datastream"

  initialize: ->
    @renderDeferred = $.Deferred()

    @chartView = new Workbench.Views.DatastreamChartView
      model: @model

    @latestView = new Workbench.Views.DatastreamLatestView
      model: @model

    @listenTo @model, "change:seriesData", =>
      # Defer until after main element is rendered
      @renderDeferred.done(=>
        # Render the chart
        _.delay(=>
          @chartView.setElement(@$(".chart")).render()
        , 0)

        # Render the latest view
        @latestView.setElement(@$("#latest_#{@model.id}")).render()
      )

  onBeforeDestroy: ->
    @chartView.remove()
    @latestView.remove()

  onRender: ->
    @renderDeferred.resolve()

class Workbench.Views.DatastreamCollectionView extends Backbone.Marionette.CollectionView
  childView: Workbench.Views.DatastreamView

  tagName: "ul"
  className: "list-unstyled"
