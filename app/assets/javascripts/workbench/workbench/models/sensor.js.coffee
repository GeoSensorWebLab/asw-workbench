class Workbench.Models.Sensor extends Backbone.Model
  initialize: ->

class Workbench.Collections.SensorsCollection extends Backbone.Collection
  model: Workbench.Models.Sensor
