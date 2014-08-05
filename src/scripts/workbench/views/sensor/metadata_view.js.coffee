class Workbench.Views.SensorMetadataView extends Backbone.View
  template: JST["workbench/templates/metadata"]

  initialize: ->
    @mapView = new Workbench.Views.SensorMapView(
      model: @model
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
    super()

  # Render without sensor information
  renderBasic: (container) ->
    container.append(@$el)
    @$el.html(@template(
      api_key: appRouter.apiKey
      indexURL: "#{Backbone.history.root}sensors/?api_key=#{appRouter.apiKey}"
    )).show()

    @mapView.setElement(@$("#map"))
    this

  render: ->
    @swapContent(@$(".sensor-description"), @model.get("description"))
    @swapContent(@$(".sensor-owner"), @model.get("contact_name"))
    @swapContent(@$(".sensor-contact"), @model.get("contact_email"))

    @updateDatastreamCount()

    @mapView.render()
    this

  updateDatastreamCount: ->
    @swapContent(@$(".sensor-datastream-count"), @model.get("datastreams").length)
    this
