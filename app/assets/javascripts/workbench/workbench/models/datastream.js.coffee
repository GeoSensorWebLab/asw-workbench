class Workbench.Models.Datastream extends Backbone.Model
  initialize: ->

  # Convert data into format for charts
  seriesData: ->
    _.collect @get("data"), (datapoint) ->
      [datapoint.timestamp, datapoint.value]

class Workbench.Collections.DatastreamsCollection extends Backbone.Collection
  model: Workbench.Models.Datastream
