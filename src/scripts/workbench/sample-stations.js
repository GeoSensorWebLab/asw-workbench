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
},
{
  id: "2",
  name: "Finse Alpine Research Centre",
  shortName: "FINSE",
  _links: {
    site_info: {
      description: "Finse Alpine Research Center",
      href: "http://www.finse.uio.no/"
    },
    interact_info: {
      description: "INTER-ACT: FINSE",
      href: "http://www.eu-interact.org/field-sites/norway-2/finse/"
    }
  },
  geo: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [7.5, 60.6, 1215]
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
},
{
  id: "3",
  name: "Litla-Skard",
  shortName: "LITLA-SKARD",
  _links: {
    interact_info: {
      description: "INTER-ACT: Litla-Skard",
      href: "http://www.eu-interact.org/field-sites/iceland-1/litla-skard/"
    }
  },
  geo: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-21.63, 64.726667, 115]
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
