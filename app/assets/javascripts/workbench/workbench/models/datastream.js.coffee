class Workbench.Models.Datastream extends Backbone.Model
  idAttribute: "uid"

  initialize: ->
    @getTimeSeries()

  getTimeSeries: ->
    datastream = new Geocens.Datastream(@attributes)
    datastream.service = Workbench.source

    datastream.getTimeSeries
      start: new Date("2013-10-01 00:00:00Z")
      end: new Date("2013-10-16 00:00:00Z")
      done: (seriesData) =>
        # Data is returned in newest-first order, so reverse it
        @set("seriesData", seriesData.reverse())

  seriesData: ->
    @get("seriesData")

  # name is alias for id
  name: ->
    @get("id")

  # units is alias for unit
  units: ->
    @get("unit")

class Workbench.Collections.DatastreamsCollection extends Backbone.Collection
  model: Workbench.Models.Datastream

  # Retrieve a list of datastreams from the GeoCENS JS API
  fetch: (options) ->
    options.sensor.getDatastreams
      raw: (data) =>
        _.each data, (datastream) =>
          datastream.sensor_id = options.sensor.sensor_id
        @set data
    this
