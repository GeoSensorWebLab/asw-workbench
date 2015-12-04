# Arctic Sensor Web Workbench

The ASW Workbench is a JavaScript Single-Page Application frontend to the GeoCENS Data Service. It is a customized version of the RPI Workbench and will have a more focused feature set. This means it will be designed to display Arctic Sensor Web data instead of generic sensor data.

Arctic Sensor Web is part of [the ArcticConnect project](http://arcticconnect.org/).

## Development Environment

The app is JavaScript and builds using [Node.js](https://nodejs.org/). To start, install the base Node packages:

    $ npm install

Now you can start the local development server:

    $ node preview.js

That's all. The server is now running at [http://localhost:4200/](http://localhost:4200/).

## Included Tools

### convert.js

Converts output from weather-json.js to a format ready for push.js.

    Usage: $0 <JSON file> <datastream name>

Datastream name is usually the field you want to create datastream for, e.g. "tempC" or "relHum".

### download-sensors.js

Downloads sensors from Data Service into a directory with individual JSON files for each sensor.

    Usage: $0 <RPI Base URL> <User UID> -o <directory>
    Example: node bin/download-sensors.js http://example.com 2abe488f883b6e9bbd087017d503bc2d -o stations

Used to build the map overview page for ASW.

### generate.js

This script will generate a JSON array of dummy record objects, with random data for values. The array can then be uploaded into the Data Service using `bin/push.js`. Usage:

  $ node generate.js 2014-07-01T00:00:00Z 2014-07-31T23:59:59Z uniform > output.json

Start and end dates must be ISO format. Last parameter can be `uniform` or `normal`, and determines which random function is used for the values.

### weather.js

Script to download historical weather data from Environment Canada. Data disclaimers apply.

    Usage: $0 -t <timeframe> -s <station ID> -Y <year> -m <month> -d <day>

    -t: timeframe to retrieve. '1' corresponds to hourly.
    -s: station ID.
    -Y: Year. e.g. 2014
    -m: Month. e.g. 8 (no leading zero)
    -d: Day. e.g. 11 (no leading zero)

Output is CSV stream.

### weather-json.js

Converts CSV output from weather.js to a JSON file. This can then be parsed and uploaded to the GeoCENS Data Service.

    Usage: $0 <CSV file> -z <station time zone>

    -z: Time zone identifier of the station.

Yes, the time zone must be specified manually. This is because Environment Canada returns times in Local Standard Time, which is unknown. So the user (you) must tell the parser where the date is located to properly adjust it to UTC.

Output is a JSON stream.

### "push" and "ppush"

**NOTE**: These files require Ruby and some Ruby gems to be installed.

These two scripts in the `contrib/ruby` directory can take a JSON file containing an array from the `generate.html` page and upload each record individually into the Data Service. `ppush` is the parallelized version of `push`, and runs about three times faster on my development machine. If `ppush` uploads too fast for some reason, try `push` instead.

1. Create JSON array of records using `generate.html`
2. Save JSON string to file in root directory, say `f.json`
3. From the command line, run `ppush` on the file with a known endpoint URL (MUST point to the records resource for a datastream):

	`$ bin/ppush --file=f.json --url="http://dataservice.geocens.ca/users/<user_id>/sensors/<sensor_id>/datastreams/<datastream_id>/records"`

4. Watch as the POST requests are completed, "200 OK" means the Data Service received the request
5. Verify the records uploaded by doing a GET request to "http://dataservice.geocens.ca/users/<user_id>/sensors/<sensor_id>/datastreams/<datastream_id>/records"
6. Delete `f.json`

## Deploying

This app is configured to run on Heroku-like platforms. This makes deployment as simple as a `git push`. In this instance, we are using [Dokku](https://github.com/progrium/dokku).

Start by setting up a Dokku instance on a server. Once it is online, you should be able to add it as a remote repository, and tell Dokku the app's name is `asw-workbench`:

    $ git remote add dokku dokku@sarcee:asw-workbench

Next, push master to that remote host. Note that Dokku only supports receiving from master at this time.

    $ git push dokku master

Dokku will then build and deploy a server, automatically restarting the existing instance if necessary. Any time you need to push a new version, just push to the dokku remote on git.

There are also some configuration options that may be useful with Dokku. For example, defining the default host:

    $ ssh dokku@sarcee domains:set asw-workbench sensorweb.arcticconnect.org

This tells the nginx instance running on the Dokku host to redirect requests to http://sensorweb.arcticconnect.org to the Docker container that is running `asw-workbench`.

## License

See LICENSE.

## Authors

James Badger <jpbadger@ucalgary.ca>
