class Workbench.Models.Datastream extends Backbone.Model
  initialize: ->

  # name is alias for id
  name: ->
    @get("id")

  # seriesData is alias for data
  seriesData: ->
    @get("data")

  # Raw chart data format
  simpleData: ->
    _.collect @get("data"), (datapoint) ->
      [datapoint.timestamp, datapoint.value]

  # units is alias for unit
  units: ->
    @get("unit")

class Workbench.Collections.DatastreamsCollection extends Backbone.Collection
  model: Workbench.Models.Datastream

  # Retrieve a list of datastreams from the GeoCENS JS API
  fetch: (options) ->
    options.sensor.getDatastreams
      raw: (data) =>
        @set data
    this
