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
    },
    {
      id: "80db7c4d1d7b4622bee67865124fa7e9",
      name: "KLRS Weather Station",
      _links: {
        self: {
          href: "/sensors/80db7c4d1d7b4622bee67865124fa7e9?api_key=798192d6c2c55da138e1a1619caeeff4"
        }
      }
    },
    {
      id: "09f0a7798387c90b547e57d3037d1724056fafe26e02f7d079dcb2557c8beb32",
      name: "KLRS Energy Data",
      _links: {
        self: {
          href: "/sensors/09f0a7798387c90b547e57d3037d1724056fafe26e02f7d079dcb2557c8beb32?api_key=798192d6c2c55da138e1a1619caeeff4"
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
  "id": "2",
  "name": "Finse Alpine Research Centre",
  "shortName": "FINSE",
  "_links": {
    "site_info": {
      "description": "Finse Alpine Research Centre",
      "href": "http://www.finse.uio.no/"
    },
    "interact_info": {
      "description": "INTER-ACT: FINSE",
      "href": "http://www.eu-interact.org/field-sites/norway-2/finse/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.5,
        60.6,
        1215
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "3",
  "name": "Sverdrup International Arctic Environmental Research and Monitoring Facility",
  "shortName": "SVERDRUP",
  "_links": {
    "site_info": {
      "description": "Sverdrup Station",
      "href": "http://sverdrup.npolar.no/"
    },
    "interact_info": {
      "description": "INTER-ACT: SVERDRUP",
      "href": "http://www.eu-interact.org/field-sites/norway-2/svanhovd/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        30.054722222222225,
        69.45277777777778,
        5
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "4",
  "name": "Tarfala Research Station",
  "shortName": "TARFALA",
  "_links": {
    "site_info": {
      "description": "Tarfala Research Station",
      "href": "http://www.ink.su.se/english/tarfala-research-station"
    },
    "interact_info": {
      "description": "INTER-ACT: TARFALA",
      "href": "http://www.eu-interact.org/field-sites/sweden-2/tarfala/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.583333333333332,
        67.91666666666667,
        1130
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "5",
  "name": "Abisko Scientific Research Station",
  "shortName": "ABISKO",
  "_links": {
    "site_info": {
      "description": "Abisko Scientific Research Station",
      "href": "http://www.polar.se/en/abisko"
    },
    "interact_info": {
      "description": "INTER-ACT: ABISKO",
      "href": "http://www.eu-interact.org/field-sites/sweden-2/abisko/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.816666666666666,
        68.35,
        385
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "6",
  "name": "Kilpisjärvi Biological Station",
  "shortName": "KILPISJÄRVI",
  "_links": {
    "site_info": {
      "description": "Kilpisjärvi Biological Station",
      "href": "http://www.helsinki.fi/kilpis"
    },
    "interact_info": {
      "description": "INTER-ACT: KILPISJÄRVI",
      "href": "http://www.eu-interact.org/field-sites/finland-4/kilpisjarvi/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        20.833333333333332,
        69.05,
        480
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "7",
  "name": "Kolari Research Unit",
  "shortName": "KOLARI",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: KOLARI",
      "href": "http://www.eu-interact.org/field-sites/finland-4/kolari/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        23.829444444444444,
        67.35444444444444,
        221
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "8",
  "name": "Kevo Subarctic Research Institute",
  "shortName": "KEVO",
  "_links": {
    "site_info": {
      "description": "Kevo Subarctic Research Institute",
      "href": "http://www.kevo.utu.fi/en"
    },
    "interact_info": {
      "description": "INTER-ACT: KEVO",
      "href": "http://www.eu-interact.org/field-sites/finland-4/kevo/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        27.016666666666666,
        69.75,
        80
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "9",
  "name": "Oulanka Research Station",
  "shortName": "OULANKA",
  "_links": {
    "site_info": {
      "description": "Oulanka Research Station",
      "href": "http://www.oulu.fi/oulanka"
    },
    "interact_info": {
      "description": "INTER-ACT: OULANKA",
      "href": "http://www.eu-interact.org/field-sites/finland-4/oulanka/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        29.316666666666666,
        66.36666666666666,
        165
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "10",
  "name": "Khibiny Educational and Scientific Station",
  "shortName": "KHIBINY",
  "_links": {
    "site_info": {
      "description": "Khibiny Educational and Scientific Station",
      "href": "http://www.eng.geogr.msu.ru/practics/stations/khibiny/"
    },
    "interact_info": {
      "description": "INTER-ACT: KHIBINY",
      "href": "http://www.eu-interact.org/field-sites/russia-6/khibiny/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        33.72527777777778,
        67.63722222222223,
        362
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "11",
  "name": "Mukhrino Field Station",
  "shortName": "MUKHRINO",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: MUKHRINO",
      "href": "http://www.eu-interact.org/field-sites/russia-6/mukhrino-field-station/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        68.7,
        60.9,
        60
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "12",
  "name": "Nymto Park Station",
  "shortName": "NUMTO",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: NUMTO",
      "href": "http://www.eu-interact.org/field-sites/russia-6/numto-park-station/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        70.9,
        63.7,
        ""
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "13",
  "name": "Samoylov",
  "shortName": "SAMOYLOV",
  "_links": {
    "site_info": {
      "description": "Samoylov",
      "href": "http://www.awi.de/en/infrastructure/stations/samoylov_station/"
    },
    "interact_info": {
      "description": "INTER-ACT: SAMOYLOV",
      "href": "http://www.eu-interact.org/field-sites/russia-6/samoylov/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        126.46666666666667,
        72.36666666666666,
        12
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "14",
  "name": "Spasskaya Pad",
  "shortName": "SPASSKAYA PAD",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: SPASSKAYA PAD",
      "href": "http://www.eu-interact.org/field-sites/russia-6/spasskaya-pad/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        129.61666666666667,
        62.233333333333334,
        220
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "15",
  "name": "Chokurdakh Scientific Tundra Station",
  "shortName": "COKURDAKH",
  "_links": {
    "site_info": {
      "description": "Chokurdakh Scientific Tundra Station",
      "href": "http://ibpc.ysn.ru/"
    },
    "interact_info": {
      "description": "INTER-ACT: COKURDAKH",
      "href": "http://www.eu-interact.org/field-sites/russia-6/chokurdakh/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        147.48333333333332,
        70.81666666666666,
        8
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "16",
  "name": "Barrow Environmental Observatory",
  "shortName": "BARROW",
  "_links": {
    "site_info": {
      "description": "Barrow Environmental Observatory",
      "href": "http://www.polarfield.com/barrow"
    },
    "interact_info": {
      "description": "INTER-ACT: BARROW",
      "href": "http://www.eu-interact.org/field-sites/alaska-2/barrow/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -156.58333333333334,
        71.3,
        5
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "17",
  "name": "Toolik Field Station",
  "shortName": "TOOLIK",
  "_links": {
    "site_info": {
      "description": "Toolik Field Station",
      "href": "http://www.uaf.edu/toolik"
    },
    "interact_info": {
      "description": "INTER-ACT: TOOLIK",
      "href": "http://www.eu-interact.org/field-sites/alaska-2/toolik/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -149.59472222222223,
        68.62777777777777,
        720
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "18",
  "name": "CEN Radisson Ecological Research Station",
  "shortName": "RADISSON",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: RADISSON",
      "href": "http://www.eu-interact.org/field-sites/canada-9/radisson/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.62694444444443,
        53.79138888888889,
        135
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "19",
  "name": "CEN Whapmagoostui-Kuujjuarapik Station",
  "shortName": "WHAPMAGOOSTUI-KUUJJUARAPIK",
  "_links": {
    "site_info": {
      "description": "CEN Whapmagoostui-Kuujjuarapik Station",
      "href": "http://www.cen.ulaval.ca/en/page.aspx?lien=stationkuujjuarapik"
    },
    "interact_info": {
      "description": "INTER-ACT: WHAPMAGOOSTUI-KUUJJUARAPIK",
      "href": "http://www.eu-interact.org/field-sites/canada-9/whapmagoostui-kuujjuarapik/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.75277777777778,
        55.28055555555555,
        50
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "20",
  "name": "CEN Clearwater Lake Research Station",
  "shortName": "CLEARWATER LAKE",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: CLEARWATER LAKE",
      "href": "http://www.eu-interact.org/field-sites/canada-9/clearwater-lake/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.45,
        56.333333333333336,
        224
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "21",
  "name": "Umiujaq",
  "shortName": "UMIUJAQ",
  "_links": {
    "site_info": {
      "description": "Umiujaq",
      "href": "http://www.cen.ulaval.ca/en/page.aspx?lien=stationumiujaq"
    },
    "interact_info": {
      "description": "INTER-ACT: UMIUJAQ",
      "href": "http://www.eu-interact.org/field-sites/canada-9/umiujaq/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.54916666666666,
        56.551944444444445,
        5
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "22",
  "name": "Boniface River Station",
  "shortName": "BONIFACE RIVER",
  "_links": {
    "site_info": {
      "description": "Boniface River Station",
      "href": "http://www.cen.ulaval.ca/en/page.aspx?lien=stationboniface"
    },
    "interact_info": {
      "description": "INTER-ACT: BONIFACE RIVER",
      "href": "http://www.eu-interact.org/field-sites/canada-9/boniface-river/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.16666666666667,
        57.75,
        100
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "23",
  "name": "Salluit Research Station",
  "shortName": "SALLUIT",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: SALLUIT",
      "href": "http://www.eu-interact.org/field-sites/canada-9/salluit/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.63333333333334,
        62.2,
        35
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "24",
  "name": "Bylot Island Field Station",
  "shortName": "BYLOT ISLAND",
  "_links": {
    "site_info": {
      "description": "Bylot Island Field Station",
      "href": "http://www.cen.ulaval.ca/bylot/"
    },
    "interact_info": {
      "description": "INTER-ACT: BYLOT ISLAND",
      "href": "http://www.eu-interact.org/field-sites/canada-9/bylot-island/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80,
        73.13333333333334,
        20
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "25",
  "name": "Ward Hunt Island",
  "shortName": "WARD HUNT ISLAND",
  "_links": {
    "site_info": {
      "description": "Ward Hunt Island",
      "href": "http://www.cen.ulaval.ca/warwickvincent/"
    },
    "interact_info": {
      "description": "INTER-ACT: WARD HUNT ISLAND",
      "href": "http://www.eu-interact.org/field-sites/canada-9/ward-hunt-island/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.16666666666667,
        83.1,
        5
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "26",
  "name": "Arctic Station",
  "shortName": "ARCTIC STATION",
  "_links": {
    "site_info": {
      "description": "Arctic Station",
      "href": "http://arktiskstation.ku.dk/english"
    },
    "interact_info": {
      "description": "INTER-ACT: ARCTIC STATION",
      "href": "http://www.eu-interact.org/field-sites/greenland-4/arctic-station/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -53.56666666666667,
        69.25,
        20
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "27",
  "name": "Greenland Institute of Natural Resources",
  "shortName": "GREENLAND INSTITUTE OF NATURAL RESOURCES",
  "_links": {
    "site_info": {
      "description": "Greenland Institute of Natural Resources",
      "href": "http://www.natur.gl/"
    },
    "interact_info": {
      "description": "INTER-ACT: GREENLAND INSTITUTE OF NATURAL RESOURCES",
      "href": "http://www.eu-interact.org/field-sites/greenland-4/greenland-institute-of-natural-resources/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -51.68333333333333,
        64.18333333333334,
        50
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "28",
  "name": "Sermilik Station",
  "shortName": "SERMILIK",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: SERMILIK",
      "href": "http://www.eu-interact.org/field-sites/greenland-4/sermilik/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -38.166666666666664,
        65.66666666666667,
        15
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "29",
  "name": "Zackenberg Research Station",
  "shortName": "ZACKENBERG RESEARCH STATION",
  "_links": {
    "site_info": {
      "description": "Zackenberg Research Station",
      "href": "http://www.zackenberg.dk/"
    },
    "interact_info": {
      "description": "INTER-ACT: ZACKENBERG RESEARCH STATION",
      "href": "http://www.eu-interact.org/field-sites/greenland-4/zackenberg-research-station/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -20.566666666666666,
        74.46861111111112,
        38
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "30",
  "name": "Litla-Skard",
  "shortName": "LITLA-SKARD",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: LITLA-SKARD",
      "href": "http://www.eu-interact.org/field-sites/iceland-1/litla-skard/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.63,
        64.72666666666667,
        115
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "31",
  "name": "The Faroe Islands Nature Investigations FINI",
  "shortName": "FINI",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: FINI",
      "href": "http://www.eu-interact.org/field-sites/faroe-islands-1/fini/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -6.966666666666667,
        62.06666666666667,
        725
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
},
{
  "id": "32",
  "name": "Cairngorm",
  "shortName": "CAIRNGORM",
  "_links": {
    "interact_info": {
      "description": "INTER-ACT: CAIRNGORM",
      "href": "http://www.eu-interact.org/field-sites/scotland-1/cairngorm/"
    }
  },
  "geo": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.8166666666666664,
        57.11666666666667,
        700
      ]
    },
    "crs": {
      "type": "link",
      "properties": {
        "href": "http://spatialreference.org/ref/epsg/4979/proj4/",
        "type": "proj4"
      }
    },
    "properties": {}
  }
}];
