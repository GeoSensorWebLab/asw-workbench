class Workbench.Views.SensorView extends Backbone.Marionette.ItemView
  template: "workbench/templates/sensor"

  tagName: "li"
  className: "sensor"

  showModelPath: ->
    "#{Backbone.history.root}sensors/#{@model.get("uid")}?api_key=#{appController.apiKey}"

  onRender: ->
    @$("h2.title").html(@model.get("title"))
    @$(".description").html(@model.get("description"))
    @$("a").prop('href', @showModelPath())

class Workbench.Views.SensorCollectionView extends Backbone.Marionette.CollectionView
  childView: Workbench.Views.SensorView

  tagName: "ul"
  className: "list-unstyled"
