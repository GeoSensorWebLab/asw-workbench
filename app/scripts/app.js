import './marionette-override';
import Workbench from './workbench';
import './workbench/controllers/sensors_controller';
import './workbench/controllers/stations_controller';
import './workbench/models/datastream';
import './workbench/models/sensor';
import './workbench/models/station';
import './workbench/views/empty_view';
import './workbench/views/map_manager';
import './workbench/views/datastream/chart_view';
import './workbench/views/datastream/datastream_view';
import './workbench/views/datastream/latest_view';
import './workbench/views/sensor/index_view';
import './workbench/views/sensor/logger_view';
import './workbench/views/sensor/map_view';
import './workbench/views/sensor/metadata_view';
import './workbench/views/sensor/sensor_view';
import './workbench/views/sensor/show_view';
import './workbench/views/station/index_view';
import './workbench/views/station/map_view';
import './workbench/views/station/popup_view';
import './workbench/views/station/station_sensors_view';
import './workbench/sample-stations';
import './workbench/strings';

$(document).on("click", "a:not([data-bypass])", function(evt) {
  var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
  var root = location.protocol + "//" + location.host + Backbone.history.options.root;

  if (href.prop && href.prop.slice(0, root.length) === root) {
    var route = href.prop.slice(root.length, href.prop.length);
    evt.preventDefault();
    Backbone.history.navigate(route, { trigger: true });
  }
});
