# Workbench

The RPI Workbench is a JavaScript Single-Page Application frontend to the GeoCENS Data Service.

## Development Environment

The app is a Rails Engine, and is meant to be mounted inside another Rails application as a sub-app. To run a development engine to host the Workbench, you can use the embedded one for testing.

	$ cd test/dummy
	$ rails s

This will start a Webrick server on port 3000, and mount the Workbench at the following URL:

	http://localhost:3000/workbench/

From there, local changes will automatically be reflected in the dummy app.

### generate.html

This page will generate a JSON array of dummy record objects, with random data for values. The array can then be uploaded into the Data Service using `bin/push` or `bin/ppush`.

### "push" and "ppush"

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

Copyright GeoSensor Web Lab, James Badger, 2013. All rights reserved.
