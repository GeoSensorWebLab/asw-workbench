class Workbench.Models.Sensor extends Backbone.Model
  idAttribute: "uid"

  defaults:
    datastreams: []

  initialize: ->
    @set("endpoint", "http://www.example.com/sensors/#{@id}")

    @datastreams = new Workbench.Collections.DatastreamsCollection(@get("datastreams"))

    @listenTo Workbench.Events, "addDatastream", (datastream) =>
      @datastreams.add [datastream]
      @trigger "change:datastreams"

    @on "change:loc", =>
      @set("latitude", @get("loc")[0])
      @set("longitude", @get("loc")[1])

  # Custom fetch function using GeoCENS JS API
  fetch: ->
    Geocens.DataService.getSensor
        api_key:   @get("api_key")
        sensor_id: @id
        done: (sensor) =>
            @set(sensor.metadata)
            @trigger("sensorLoaded")
    return this

class Workbench.Collections.SensorsCollection extends Backbone.Collection
  model: Workbench.Models.Sensor
