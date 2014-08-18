# Arctic Sensor Web Workbench

The ASW Workbench is a JavaScript Single-Page Application frontend to the GeoCENS Data Service. It is a customized version of the RPI Workbench and will have a more focused feature set. This means it will be designed to display Arctic Sensor Web data instead of generic sensor data.

## Development Environment

The app is JavaScript/CoffeeScript and runs under Node.js. To start, install the base Node packages:

    $ npm install

Then the assets can be installed with Bower:

    $ bower install

Now you can start the local development server with Gulp:

    $ gulp

That's all. The server is now running at [http://localhost:1337/](http://localhost:1337/).

### What's the different between Node packages and Bower?

Bower is for packages that are sent to the client; Node packages are used for the server only. Each system also has different dependency resolution systems, where Bower is optimized for the web browser.

### generate.js

This script will generate a JSON array of dummy record objects, with random data for values. The array can then be uploaded into the Data Service using `bin/push` or `bin/ppush`. Usage:

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

### convert.js

Converts output from weather-json.js to a format ready for push.js.

    Usage: $0 <JSON file> <datastream name>

Datastream name is usually the field you want to create datastream for, e.g. "tempC" or "relHum".

### "push" and "ppush"

**NOTE**: These files require Ruby and some Ruby gems to be installed.

These two scripts in the `bin` directory can take a JSON file containing an array from the `generate.html` page and upload each record individually into the Data Service. `ppush` is the parallelized version of `push`, and runs about three times faster on my development machine. If `ppush` uploads too fast for some reason, try `push` instead.

1. Create JSON array of records using `generate.html`
2. Save JSON string to file in root directory, say `f.json`
3. From the command line, run `ppush` on the file with a known endpoint URL (MUST point to the records resource for a datastream):

	`$ bin/ppush --file=f.json --url="http://dataservice.geocens.ca/users/<user_id>/sensors/<sensor_id>/datastreams/<datastream_id>/records"`

4. Watch as the POST requests are completed, "200 OK" means the Data Service received the request
5. Verify the records uploaded by doing a GET request to "http://dataservice.geocens.ca/users/<user_id>/sensors/<sensor_id>/datastreams/<datastream_id>/records"
6. Delete `f.json`

## Testing

TODO

## Deploying

TODO

## License

Copyright GeoSensor Web Lab, James Badger, 2013-2014. All rights reserved.
