# Uploading Data

This guide will explain how to upload data to the RPI Data Service.

The first step is to get the unsecured URL for the data service that will allow you to directly access the REST-like interface. This URL is used to POST data into the Data Service. For this guide, the URL will be assumed as [http://data.example.com/](http://data.example.com/).

Note that the response format from the Data Service is not always uniform, and may return "1" or "0" or "true" or "false" for some values. It is recommended you manually test that POST and DELETE requests succeeded by issuing another GET request to verify the resource was created/deleted.

Note that records can only be created individually: one request, one record. So no batch record creation is available, you will have to iterate over your array and create a request for each record.

## Users

The first model in the Data Service you will need is a user. "User" is a loose term here, and more corresponds to an account or container for sensors. You can get a list of users with a GET request:

    GET http://data.example.com/v01/users?detail=true

    [
        {
            "id": "abc@aa.ca",
            "uid": "137371bf5e98e385ec1372512d118cc2",
            "lastName": "ab",
            "admin": false,
            "nameForDN": "abccc",
            "firstName": "as",
            "password": "81dc9bdb52d04dc20036dbd8313ed055"
        },
        ...
    ]

The users in this table are either created manually with a POST request, or created through a portal that wraps that POST request. At the moment I only know of two portals that have placed data in this table: The IOT demo portal, and the Data Service Authentication Proxy. Accounts created through the DSAP will have the `"dsap_enabled": true` field. The password field is MD5 hashed.

If you want to create a user, then the following fields are required:

* uid
* id

Note that the Data Service may not validate new records, and it is possible to create records with no `id` or `uid`. This means you cannot access or delete the record!

To create a user, make a POST request with a request body that is a JSON representation of the new user. You can add any additional fields you want here, and they will be added as fields in the new record.

    POST http://data.example.com/v01/users

    {
        "id": "test@example.com",
        "uid": "05b57a33ded81eec75ed0af82a5487d3"
    }

It is up to you to generate a unique `uid` with your own library, the Data Service will not do that for you.

Deleting a user can be done with a request as well. Be careful.

    DELETE http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3

Retrieving details for a single user is similar.

    GET http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3?detail=true

## Sensors

Once a user record is selected, you can manage the sensors for the user.

    GET http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors?detail=true

    []

This will provide you with a list of a user's sensors if they have any. If not you can create one.

    POST http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors

    {
        "id": "your own choice of name for the sensor",
        "uid": "9b8c94bd21dc54db93b1ef73243a3fcc",
        "title": "Sensor Name",
        "contact_email": "you@example.com",
        "description": "Sensor information",
        "contact_name": "your name",
        "loc": [
            51,
            -114
        ]
    }

Only the `id` and `uid` fields are mandatory. The other fields listed here are used by the RPI Workbench and Arctic Sensor Web Workbench to display the sensor metadata on a map with details. You can add additional fields here if you want more information.

Once the POST request is sent, you can use the UID you generated to retrieve the new record.
    
    GET http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc?detail=true

    {
        "id": "your own choice of name for the sensor",
        "uid": "9b8c94bd21dc54db93b1ef73243a3fcc",
        "title": "Sensor Name",
        "contact_email": "you@example.com",
        "description": "Sensor information",
        "contact_name": "your name",
        "loc": [
            51,
            -114
        ]
    }

Deleting the sensor would work the same.
    
    DELETE http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc

Updating records with a PUT request requires you to provide a complete copy of the resource with the fields you are changing.

    PUT http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc

    {
        "id": "sensor-id-300",
        "uid": "9b8c94bd21dc54db93b1ef73243a3fcc",
        "title": "Sensor Name",
        "contact_email": "you@example.com",
        "description": "Sensor information",
        "contact_name": "your name",
        "loc": [
            51,
            -114
        ]
    }

## Datastreams

Below sensors are datastreams. These can be seen as a distinct set of data corresponding to a single observed property. The datastreams for a sensor can be retrieved with a GET request.

    GET http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc/datastreams?detail=true

    []

Creation is similar to sensors:

    POST http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc/datastreams

    {
        "uid": "2517f1bd2e68216b8598c30333377c95",
        "id": "Relative Humidity",
        "sensor": "sensor-id-300",
        "unit": "percent",
        "phenName": "airhumidity"
    }

The `uid`, `id`, and `phenName` fields are required. `id` is used as the datastream title in the Workbenches.

Updating and deleting datastreams works identically to sensors.

## Datastream Records

With a datastream, the individual time series records can be retrieved:

    GET http://data.example.com/v01/users/05b57a33ded81eec75ed0af82a5487d3/sensors/9b8c94bd21dc54db93b1ef73243a3fcc/datastreams/2517f1bd2e68216b8598c30333377c95/records?detail=true

    []

Or at:

    GET http://data.example.com/v01/datastreams/2517f1bd2e68216b8598c30333377c95/records?detail=true

    []

These both correspond to the same set of records. Record creation:

    POST http://data.example.com/v01/datastreams/2517f1bd2e68216b8598c30333377c95/records

    {
        "uid": "bbe5473217b7a9c5c5662885600eca56",
        "id": "2014-11-06T10:35:30",
        "reading": "20",
        "dateTime": "Thu Nov 6 10:35:30 +00:00 2014"
    }

All the fields above are required. `id` must be ISO8601 format, assumed as UTC. `reading` is a string value; clients must parse it to numbers on their own.

Updating and deleting datastream records works identically to sensors.
