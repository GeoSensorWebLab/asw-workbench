class Workbench.Models.Geometry extends Backbone.Model
  initialize: (attributes, options) ->
    console.log "creating new geometry", attributes


class Workbench.Models.Station extends Backbone.Model
  initialize: (attributes, options) ->
    console.log "new station", attributes, options
    @geometry = new Workbench.Models.Geometry()

class Workbench.Collections.StationsCollection extends Backbone.Collection
  model: Workbench.Models.Station
