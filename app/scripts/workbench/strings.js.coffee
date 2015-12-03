strings =
  loading: "Loading…"
  noData: "No data"

  logger:
    title: "Workbench Logger"
    "api-endpoint": "API Endpoint"

  metadata:
    title: "Sensor Metadata"
    name: "Sensor Name"
    description: "Sensor Description"
    datastreams: "Datastreams"
    owner: "Owner"
    contact: "Owner Contact"
    other: "Other Sensors for this Station"

  sensor:
    view: "View Sensor"
    api_key: "API Key"

  chart:
    ranges:
      two_hour: "2h"
      one_day: "1d"
      one_week: "1w"
      ytd: "YTD"
      all: "All"

  map:
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

# Use the global t() function to extract a string from the strings object. Use
# periods to denote hierarchy, e.g. "errors.timeout.header". Returns the string
# or object at that level, if it exists.
window.t = (key) ->
  keys = key.split('.')
  try
    value = _.reduce(keys, (memo, item) ->
      memo[item]
    , strings)
    console.warn "Undefined string key:", key if value is undefined
  catch TypeError
    console.warn "Undefined string key:", key

  value
