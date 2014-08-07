class Workbench.Views.SensorMetadataView extends Backbone.Marionette.LayoutView
  template: "workbench/templates/metadata"

  modelEvents:
    "sensorLoaded": "loadAttributes"

  ui:
    description: '.sensor-description'
    owner: '.sensor-owner'
    contact: '.sensor-contact'
    otherSensors: '.other-sensors'
    datastreamCount: '.sensor-datastream-count'

  regions:
    map: "#map"

  initialize: ->
    @renderDeferred = $.Deferred()

    @listenTo @model.get("datastreams"), "add", =>
      @renderDeferred.done =>
        @updateDatastreamCount()

    # The element ID MUST be passed into Leaflet, so we use a custom attachment
    # function for the Marionette region.
    @map.attachHtml = (view) ->
      @$el.empty()
      view.setElement(@$el)

  # Animate out, update content, animate back in
  swapContent: ($element, content) ->
    $element.transition(rotateX: '90deg').promise().done(->
      @text(content).transition(rotateX: '0deg')
    )

  onRender: ->
    @renderDeferred.resolve()
    @ui.otherSensors.prop('href', "#{Backbone.history.root}sensors/?api_key=#{Workbench.source.api_key}")

  loadAttributes: ->
    @renderDeferred.done =>
      @swapContent(@ui.description, @model.get("description"))
      @swapContent(@ui.owner, @model.get("contact_name"))
      @swapContent(@ui.contact, @model.get("contact_email"))

      @updateDatastreamCount()

      @map.show(new Workbench.Views.SensorMapView(
        model: @model
      ))

  updateDatastreamCount: ->
    @swapContent(@ui.datastreamCount, @model.get("datastreams").length)
    this
