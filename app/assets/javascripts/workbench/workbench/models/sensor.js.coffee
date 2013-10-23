class Workbench.Models.Sensor extends Backbone.Model
  idAttribute: "uid"

  initialize: ->
    @set("endpoint", "http://www.example.com/sensors/#{@id}")
    @set("datastreams", new Workbench.Collections.DatastreamsCollection())

    @on "change:loc", =>
      @set("latitude", @get("loc")[0])
      @set("longitude", @get("loc")[1])

  # Custom fetch function using GeoCENS JS API
  fetch: ->
    @get("source").getSensor
        sensor_id: @id
        done: (sensor) =>
            @set(sensor.metadata)
            @trigger("sensorLoaded")
            @get("datastreams").fetch(sensor: sensor)
    return this

class Workbench.Collections.SensorsCollection extends Backbone.Collection
  model: Workbench.Models.Sensor
