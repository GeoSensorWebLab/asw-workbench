class Workbench.Models.Feature extends Backbone.Model
  initialize: (attributes, options) ->
    console.log "creating new geo feature", attributes

class Workbench.Models.Station extends Backbone.Model
  initialize: (attributes, options) ->
    console.log "new station", attributes, options
    @geometry = new Workbench.Models.Feature(attributes.geo)
    @unset("geo")

class Workbench.Collections.StationsCollection extends Backbone.Collection
  model: Workbench.Models.Station
