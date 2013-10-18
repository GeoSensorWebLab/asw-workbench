class Workbench.Views.DatastreamShowView extends Backbone.View
  template: JST["workbench/workbench/templates/datastream"]

  tagName: "li"
  className: "datastream"

  initialize: ->
    @chartView = new Workbench.Views.DatastreamChartView
      data: @model.seriesData()
      name: @model.get("id")

    @latestView = new Workbench.Views.DatastreamLatestView
      data: @model.seriesData()
      unit: @model.get("unit")

  render: ->
    @$el.html(@template(@model.toJSON()))

    _.delay(=>
      @chartView.setElement(@$(".chart")).render()
    , 0)

    @latestView.setElement(@$(".latest")).render()
    this
