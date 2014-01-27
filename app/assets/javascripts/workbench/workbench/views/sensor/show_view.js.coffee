class Workbench.Views.SensorShowView extends Backbone.View
  template: JST["workbench/workbench/templates/sensor_show"]
  id: "sensorView"

  initialize: ->
    @mapView = new Workbench.Views.SensorMapView(
      model: @model
    )

    @datastreamListView = new Workbench.Views.DatastreamListView(
      collection: @model.get("datastreams")
    )

    @listenTo @model, "sensorLoaded", =>
      @render()

    @listenTo @model.get("datastreams"), "add", (model, options) =>
      @updateDatastreamCount()

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  remove: ->
    @mapView.remove()
    @datastreamListView.remove()
    super()

  # Render without sensor information
  renderBasic: (container) ->
    container.append(@$el)
    @$el.html(@template(
      api_key: appRouter.apiKey
      indexURL: "#{Backbone.history.root}sensors/?api_key=#{appRouter.apiKey}"
    )).show()

    @mapView.setElement(@$("#map"))
    @datastreamListView.setElement(@$("#dataView ul"))
    this

  render: ->
    @swapContent(@$(".sensor-name"), @model.get("title"))
    @swapContent(@$(".sensor-endpoint"), @model.get("endpoint"))
    @swapContent(@$(".sensor-description"), @model.get("description"))
    @swapContent(@$(".sensor-owner"), @model.get("contact_name"))
    @swapContent(@$(".sensor-contact"), @model.get("contact_email"))

    @updateDatastreamCount()

    @datastreamListView.render()
    @mapView.render()
    this

  updateDatastreamCount: ->
    @swapContent(@$(".sensor-datastream-count"), @model.get("datastreams").length)
    this
