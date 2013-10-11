class Workbench.Models.Sensor extends Backbone.Model
  defaults:
    datastreams: []

  initialize: ->
    @set("endpoint", "http://www.example.com/sensors/#{@id}")

    @datastreams = new Workbench.Collections.DatastreamsCollection(@get("datastreams"))

class Workbench.Collections.SensorsCollection extends Backbone.Collection
  model: Workbench.Models.Sensor
