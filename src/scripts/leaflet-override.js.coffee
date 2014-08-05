# Custom paths for Leaflet images.
# Will be switched to digest URLs when processed with connect-assets.

leafletPaths =
  "marker-icon": '"$$ asset_path("leaflet/dist/images/marker-icon.png") $$"'
  "marker-icon-2x": '"$$ asset_path("leaflet/dist/images/marker-icon-2x.png") $$"'
  "layers": '"$$ asset_path("leaflet/dist/images/layers.png") $$"'
  "layers-2x": '"$$ asset_path("leaflet/dist/images/layers-2x.png") $$"'
  "marker-shadow": '"$$ asset_path("leaflet/dist/images/marker-shadow.png") $$"'

# Override Leaflet's default icon path helper function.

L.Icon.Default.prototype._getIconUrl = (name) ->
  key = name + 'Url'

  if (this.options[key])
    return this.options[key]

  if (L.Browser.retina && name is 'icon')
    name += '-2x'

  leafletPaths["marker-#{name}"]
