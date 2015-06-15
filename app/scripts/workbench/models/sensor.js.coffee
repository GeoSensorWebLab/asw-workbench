class Workbench.Models.Sensor extends Backbone.Model
  idAttribute: "uid"

  initialize: ->
    @set("endpoint", "http://dataservice.geocens.ca/api/sensors/#{@id}")
    @set("datastreams", new Workbench.Collections.DatastreamsCollection())
    @set("selfLink", "/sensors/#{@id}?api_key=#{@get("api_key")}")

    if (location.search.length > 0)
        params = deparam(location.search.split('?')[1])
        @set("api_key", params.api_key)

    @set("source", new Geocens.DataService({ api_key: @get("api_key") }))

    @on "change:loc", =>
      @set("latitude", @get("loc")[0])
      @set("longitude", @get("loc")[1])

  # Custom fetch function using GeoCENS JS API
  fetch: ->
    @get("source").getSensor
      sensor_id: @id
      done: (sensor) =>
        @set(sensor.metadata)
        @object = sensor
        @trigger("sensorLoaded")
        @get("datastreams").fetch(sensor: @object)
    return this

class Workbench.Collections.SensorsCollection extends Backbone.Collection
  model: Workbench.Models.Sensor

  initialize: (options) ->
    @source = options.source

  # Retrieve a list of sensors from the GeoCENS JS API
  fetch: (options) ->
    xhr = @source.getSensors
      done: (sensors) =>
        @reset()
        _.each sensors, (sensor) =>
          newSensor = new Workbench.Models.Sensor(sensor.metadata)
          newSensor.object = sensor
          @push(newSensor)

    @trigger "request", this, xhr
    this
