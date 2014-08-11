window.sampleStations = [{
  id: "1",
  name: "Kluane Lake Research Station",
  shortName: "KLRS",
  _embedded: {
    sensors: [{
      id: "f0c7c1f25692b615614fb584c532fd16",
      name: "Burwash Airport Meteo",
      _links: {
        self: {
          href: "/sensors/f0c7c1f25692b615614fb584c532fd16?api_key=798192d6c2c55da138e1a1619caeeff4"
        }
      }
    }]
  },
  _links: {
    aina_info: {
      description: "AINA: KLRS",
      href: "http://arctic.ucalgary.ca/kluane-lake-research-station"
    },
    interact_info: {
      description: "INTER-ACT: KLRS",
      href: "http://www.eu-interact.org/field-sites/canada-9/kluane-lake/"
    }
  },
  geo: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-138.4108, 61.0275, 793]
    },
    crs: {
      type: "link",
      properties: {
        href: "http://spatialreference.org/ref/epsg/4979/proj4/",
        type: "proj4"
      }
    },
    properties: {}
  }
}];
