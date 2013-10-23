class Workbench.Views.DatastreamShowView extends Backbone.View
  template: JST["workbench/workbench/templates/datastream"]

  tagName: "li"
  className: "datastream"

  initialize: ->
    @chartView = new Workbench.Views.DatastreamChartView
      model: @model

    @latestView = new Workbench.Views.DatastreamLatestView
      model: @model

    @listenTo @model, "change:seriesData", =>
      _.delay(=>
        @chartView.setElement(@$(".chart")).render()
      , 0)

      @latestView.setElement(@$(".latest")).render()

  render: ->
    @$el.html(@template(@model.toJSON()))
    this


