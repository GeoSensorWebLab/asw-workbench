class Workbench.Views.DatastreamShowView extends Backbone.View
  template: JST["workbench/workbench/templates/datastream"]

  tagName: "li"
  className: "datastream"

  initialize: ->
    @chartView = new Workbench.Views.DatastreamChartView
      model: @model

    @latestView = new Workbench.Views.DatastreamLatestView
      data: @model.simpleData()
      unit: @model.get("unit")

  render: ->
    @$el.html(@template(@model.toJSON()))

    _.delay(=>
      @chartView.setElement(@$(".chart")).render()
    , 0)

    @latestView.setElement(@$(".latest")).render()
    this
