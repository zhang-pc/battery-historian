/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Defines for the various metrics.
 */
goog.provide('historian.metrics');
goog.provide('historian.metrics.Csv');
goog.provide('historian.metrics.DataHasher');

goog.require('historian.constants');
goog.require('historian.historianV2Logs');


/** CPU Running entry that intersects with a wakelock entry. */
historian.metrics.KERNEL_UPTIME_WITH_USERSPACE = 2;


/** CPU Running entry that doesn't intersect with any wakelock entry. */
historian.metrics.KERNEL_UPTIME_NO_USERSPACE = 1;


/**
 * This metric is generated by analysing the CPU_RUNNING metric and
 * the userspace wakelock metric (WAKELOCK_IN or WAKE_LOCK_HELD).
 */
historian.metrics.KERNEL_UPTIME = 'Kernel only uptime';


/**
 * Signifies a metric is of error type.
 * @const {string}
 */
historian.metrics.ERROR_TYPE = 'error';


/**
 * Signifies when the metric is not available.
 * @const {string}
 */
historian.metrics.UNAVAILABLE_TYPE = 'unavailable';


/**
 * The string representing the metric in the historian V2 CSV input.
 *
 * @enum {string}
 */
historian.metrics.Csv = {
  // Int metrics
  TEMPERATURE: 'Temperature',
  VOLTAGE: 'Voltage',
  BATTERY_LEVEL: 'Level',
  BRIGHTNESS: 'Brightness',
  COULOMB_CHARGE: 'Coulomb charge',
  SIGNAL_STRENGTH: 'Mobile signal strength',

  // String metrics
  PHONE_STATE: 'Phone state',
  DATA_CONNECTION: 'Mobile network type',
  PLUG_TYPE: 'Plug',
  CHARGING_STATUS: 'Charging status',
  HEALTH: 'Health',
  WIFI_SUPPLICANT: 'Wifi supplicant',
  WIFI_SIGNAL_STRENGTH: 'Wifi signal strength',
  IDLE_MODE_ON: 'Doze',

  // Bool metrics
  CPU_RUNNING: 'CPU running',
  SENSOR_ON: 'Sensor',
  GPS_ON: 'GPS',
  WIFI_FULL_LOCK: 'Wifi full lock',
  WIFI_SCAN: 'Wifi scan',
  WIFI_MULTICAST_ON: 'Wifi multicast',
  MOBILE_RADIO_ON: 'Mobile radio active',
  WIFI_ON: 'Wifi on',
  WIFI_RADIO: 'Wifi radio',
  WIFI_RUNNING: 'Wifi running',
  PHONE_SCANNING: 'Phone scanning',
  BLE_SCANNING: 'BLE scanning',
  SCREEN_ON: 'Screen',
  PLUGGED: 'Plugged',
  PHONE_IN_CALL: 'Phone call',
  LOW_POWER_MODE: 'Battery Saver',
  AUDIO: 'Audio',
  CAMERA: 'Camera',
  VIDEO: 'Video',
  REBOOT: 'Reboot',
  FLASHLIGHT: 'Flashlight on',
  CHARGING_ON: 'Charging on',
  DEVICE_ACTIVE: 'Device active',
  SIGNIFICANT_MOTION: 'Significant motion',

  // Service metrics
  APPLICATION_PROCESSOR_WAKEUP: 'App Processor wakeup',
  WAKELOCK_IN: 'Wakelock_in',
  WAKE_LOCK_HELD: 'Partial wakelock',
  SYNC_APP: 'SyncManager',
  ACTIVE_PROCESS: 'Active process',
  LONG_WAKELOCK: 'Long Wakelocks',
  FOREGROUND_PROCESS: 'Foreground process',
  TOP_APPLICATION: 'Top app',
  CONNECTIVITY: 'Network connectivity',
  SCHEDULED_JOB: 'JobScheduler',
  PACKAGE_INSTALL: 'Package install',
  PACKAGE_UNINSTALL: 'Package uninstall',
  PACKAGE_ACTIVE: 'Package active',
  PACKAGE_INACTIVE: 'Package inactive',
  TMP_WHITE_LIST: 'Temp White List',

  KERNEL_WAKESOURCE: 'Kernel Wakesource',
  POWERMONITOR: 'Powermonitor',

  // Logcat metrics
  CRASHES: 'Crashes',
  NATIVE_CRASHES: 'Native crash',
  BLUETOOTH_SCAN: 'Bluetooth Scan',
  LOGCAT_MISC: 'Logcat misc',

  // Event log metrics.
  AM_PROC_START: 'AM Proc Start',
  AM_PROC_DIED: 'AM Proc Died',
  // Group name for AM_PROC_START and AM_PROC_DIED.
  AM_PROC: 'Activity Manager Proc',
  AM_LOW_MEMORY: 'AM Low Memory',
  AM_ANR: 'ANR',
  // Group name for AM_LOW_MEMORY and AM_ANR.
  AM_LOW_MEMORY_ANR: 'AM Low Memory / ANR',

  // Summary metrics
  APP_CPU_USAGE: 'Highest App CPU Usage',
  LOW_POWER_STATE: 'Low Power State',

  // Wearable metrics
  WEARABLE_RPC: 'Wearable RPC',
  WEARABLE_TRANSPORT: 'Wearable Transport'
};


/**
 * Default order of metrics in the Battery History timeline.
 * @const {!Array<string>}
 */
historian.metrics.BATTERY_HISTORY_ORDER = [
  historian.metrics.Csv.REBOOT,
  historian.metrics.Csv.CPU_RUNNING,
  historian.metrics.Csv.APPLICATION_PROCESSOR_WAKEUP,
  historian.metrics.KERNEL_UPTIME,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.WAKE_LOCK_HELD,
  historian.metrics.Csv.LONG_WAKELOCK,
  historian.metrics.Csv.KERNEL_WAKESOURCE,
  historian.metrics.Csv.SCREEN_ON,
  historian.metrics.Csv.TOP_APPLICATION,
  historian.metrics.Csv.AM_PROC,
  historian.metrics.Csv.AM_LOW_MEMORY_ANR,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BRIGHTNESS,

  // Battery saver and Doze
  historian.metrics.Csv.LOW_POWER_MODE,
  historian.metrics.Csv.IDLE_MODE_ON,
  historian.metrics.Csv.DEVICE_ACTIVE,
  historian.metrics.Csv.SIGNIFICANT_MOTION,

  historian.metrics.Csv.SCHEDULED_JOB,
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.TMP_WHITE_LIST,

  historian.metrics.Csv.PHONE_IN_CALL,
  historian.metrics.Csv.GPS_ON,
  historian.metrics.Csv.SENSOR_ON,
  historian.metrics.Csv.BLUETOOTH_SCAN,

  // Cellular related
  historian.metrics.Csv.BLE_SCANNING,
  historian.metrics.Csv.PHONE_SCANNING,
  historian.metrics.Csv.PHONE_STATE,
  historian.metrics.Csv.CONNECTIVITY,
  historian.metrics.Csv.DATA_CONNECTION,
  historian.metrics.Csv.MOBILE_RADIO_ON,
  historian.metrics.Csv.SIGNAL_STRENGTH,

  // WiFi related
  historian.metrics.Csv.WIFI_FULL_LOCK,
  historian.metrics.Csv.WIFI_SCAN,
  historian.metrics.Csv.WIFI_SUPPLICANT,
  historian.metrics.Csv.WIFI_RADIO,
  historian.metrics.Csv.WIFI_SIGNAL_STRENGTH,
  historian.metrics.Csv.WIFI_MULTICAST_ON,
  historian.metrics.Csv.WIFI_RUNNING,
  historian.metrics.Csv.WIFI_ON,

  historian.metrics.Csv.AUDIO,
  historian.metrics.Csv.FLASHLIGHT,
  historian.metrics.Csv.CAMERA,
  historian.metrics.Csv.VIDEO,

  historian.metrics.Csv.FOREGROUND_PROCESS,

  historian.metrics.Csv.PACKAGE_INSTALL,
  historian.metrics.Csv.PACKAGE_UNINSTALL,
  historian.metrics.Csv.PACKAGE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INACTIVE,

  historian.metrics.Csv.BATTERY_LEVEL,
  historian.metrics.Csv.COULOMB_CHARGE,
  historian.metrics.Csv.TEMPERATURE,
  historian.metrics.Csv.PLUGGED,
  historian.metrics.Csv.CHARGING_ON,

  historian.metrics.Csv.WEARABLE_RPC,
  historian.metrics.Csv.WEARABLE_TRANSPORT,

  historian.metrics.Csv.LOGCAT_MISC
];


/**
 * Default hidden metrics in the Battery History timeline.
 * @const {!Array<string>}
 */
historian.metrics.BATTERY_HISTORY_HIDDEN = [
  historian.metrics.Csv.BRIGHTNESS,
  historian.metrics.Csv.CHARGING_STATUS,
  historian.metrics.Csv.DEVICE_ACTIVE,
  historian.metrics.Csv.HEALTH,
  historian.metrics.Csv.MONSOON,
  historian.metrics.Csv.PLUG_TYPE,
  historian.metrics.Csv.TMP_WHITE_LIST,
  historian.metrics.Csv.VOLTAGE,
];


/**
 * Returns the key of a series CSV metric.
 * @param {string} name Name of a metric.
 * @return {string|undefined}
 */
historian.metrics.getSeriesKey = function(name) {
  for (var key in historian.metrics.Csv) {
    if (name == historian.metrics.Csv[key])
      return key;
  }
  return undefined;
};


/**
 * The string representing the metric in the level summary CSV input.
 *
 * @enum {string}
 */
historian.metrics.levelSummaryCsv = {
  PLUGGED: 'PluggedIn',
  SCREEN_ON: 'ScreenOn',
  MOBILE_RADIO_ON: 'MobileRadioOn',
  WIFI_ON: 'WifiOn',
  CPU_RUNNING: 'CPURunning',

  GPS_ON: 'GpsOn',
  SENSOR_ON: 'SensorOn',
  WIFI_SCAN: 'WifiScan',
  WIFI_FULL_LOCK: 'WifiFullLock',
  WIFI_RADIO: 'WifiRadio',
  WIFI_RUNNING: 'WifiRunning',
  WIFI_MULTICAST_ON: 'WifiMulticastOn',

  AUDIO: 'AudioOn',
  CAMERA: 'CameraOn',
  VIDEO: 'VideoOn',
  LOW_POWER_MODE: 'LowPowerModeOn',
  FLASHLIGHT: 'FlashlightOn',
  CHARGING_ON: 'ChargingOn',

  PHONE_IN_CALL: 'PhoneCall',
  PHONE_SCANNING: 'PhoneScan',
  BLE_SCANNING: 'BLEScan'
};


/**
 * Returns the key of a level summary CSV dimension, which corresponds
 * to the historian V2 CSV metric.
 * @param {string} name Name of a metric.
 * @return {string|undefined}
 */
historian.metrics.getLevelSummaryDimensionKey = function(name) {
  for (var key in historian.metrics.levelSummaryCsv) {
    if (name == historian.metrics.levelSummaryCsv[key])
      return key;
  }
  return undefined;
};


/**
 * Map for testing whether metric will be aggregated.
 * True for metrics to be aggregated.
 * @type {!Object<boolean>}
 */
historian.metrics.metricsToAggregate = {};


/**
 * Metrics which will be aggregated.
 * @private @const {!Array<string>}
 */
historian.metrics.METRICS_TO_AGGREGATE_ = [
  historian.metrics.Csv.ACTIVE_PROCESS,
  historian.metrics.Csv.CONNECTIVITY,
  historian.metrics.Csv.FOREGROUND_PROCESS,
  historian.metrics.Csv.KERNEL_WAKESOURCE,
  historian.metrics.Csv.LONG_WAKELOCK,
  historian.metrics.Csv.SCHEDULED_JOB,
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.WEARABLE_TRANSPORT
];


/**
 * Map for testing whether a metric can be filtered by UID.
 * True for metrics to be filtered.
 * @type {!Object<boolean>}
 */
historian.metrics.appSpecificMetrics = {};


/**
 * Metrics which will be filtered by UID.
 * @private @const {!Array<string>}
 */
historian.metrics.APP_SPECIFIC_METRICS_ = [
  historian.metrics.Csv.APPLICATION_PROCESSOR_WAKEUP,
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.FOREGROUND_PROCESS,
  historian.metrics.Csv.LONG_WAKELOCK,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.TOP_APPLICATION,
  historian.metrics.Csv.SCHEDULED_JOB,
  historian.metrics.Csv.TMP_WHITE_LIST,
  historian.metrics.Csv.PACKAGE_INSTALL,
  historian.metrics.Csv.PACKAGE_UNINSTALL,
  historian.metrics.Csv.PACKAGE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INACTIVE,
  historian.metrics.Csv.AM_PROC_START,
  historian.metrics.Csv.AM_PROC_DIED,
  historian.metrics.Csv.AM_ANR,
  historian.metrics.Csv.BLUETOOTH_SCAN,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.NATIVE_CRASHES
];


/**
 * Map for testing whether a metric is unreliable.
 * These metrics will be specially marked.
 * @type {!Object<boolean>}
 */
historian.metrics.unreliableMetrics = {};


/**
 * Metrics which are unreliable. The key is the report version in which the
 * metric reliability was fixed. The -1 key indicates that the metric is
 * still unreliable. The current structure assumes that metrics won't become
 * unreliable in the future.
 * @private @const {!Object<number, !Array<string>>}
 */
historian.metrics.UNRELIABLE_METRICS_ = {
  17: [historian.metrics.Csv.AUDIO] // Fixed in report version 17.
};


/**
 * Map for from metric name to bool, for testing whether a metric should be
 * rendered as a circle.
 * @type {!Object<boolean>}
 */
historian.metrics.renderAsCircles = {};


/**
 * Metrics that will be rendered as circles.
 * By default metrics are rendered as rectangles.
 * @private @const {!Array<string>}
 */
historian.metrics.RENDER_AS_CIRCLES_ = [
  historian.metrics.Csv.AM_PROC_START,
  historian.metrics.Csv.AM_PROC_DIED,
  historian.metrics.Csv.AM_LOW_MEMORY,
  historian.metrics.Csv.AM_ANR,
  historian.metrics.Csv.BLUETOOTH_SCAN,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.NATIVE_CRASHES
];


/**
 * Map from metric name to bool, for testing whether a metric is from logcat.
 * @type {!Object<boolean>}
 */
historian.metrics.logcatMetrics = {};


/**
 * Metrics that have been extracted from logcat.
 * @private @const {!Array<string>}
 */
historian.metrics.LOGCAT_METRICS_ = [
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BLUETOOTH_SCAN
];


/**
 * Map from metric name to bool, for testing whether a metric has only instant
 * events (duration 0 ms).
 * @type {!Object<boolean>}
 */
historian.metrics.instantMetrics = {};


/**
 * Metrics that only have instant events.
 * @private @const {!Array<string>}
 */
historian.metrics.INSTANT_METRICS_ = [
  historian.metrics.Csv.APPLICATION_PROCESSOR_WAKEUP,
  historian.metrics.Csv.BATTERY_LEVEL,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.NATIVE_CRASHES,
  historian.metrics.Csv.SIGNIFICANT_MOTION,
  historian.metrics.Csv.DEVICE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INSTALL,
  historian.metrics.Csv.PACKAGE_UNINSTALL,
  historian.metrics.Csv.PACKAGE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INACTIVE,
  historian.metrics.Csv.WEARABLE_RPC
];


/**
 * Map from group name to descriptor to display in help tooltips.
 * @type {!Object<string>}
 */
historian.metrics.descriptors = {};


/**
 * Sets up the maps for testing properties for the metrics.
 */
historian.metrics.initMetrics = function() {
  historian.metrics.METRICS_TO_AGGREGATE_.forEach(function(m) {
    historian.metrics.metricsToAggregate[m] = true;
  });
  historian.metrics.APP_SPECIFIC_METRICS_.forEach(function(m) {
    historian.metrics.appSpecificMetrics[m] = true;
  });
  for (var rv in historian.metrics.UNRELIABLE_METRICS_) {
    // Javascript implicitly converts keys to strings, so we need to convert it
    // back to a number.
    rv = Number(rv);
    if (historian.reportVersion >= rv) {
      // If the current report version is higher than the version the metrics
      // were fixed in, then we shouldn't mark them as unreliable.
      continue;
    }
    historian.metrics.UNRELIABLE_METRICS_[rv].forEach(function(m) {
      historian.metrics.unreliableMetrics[m] = true;
    });
  }
  historian.metrics.RENDER_AS_CIRCLES_.forEach(function(m) {
    historian.metrics.renderAsCircles[m] = true;
  });
  historian.metrics.LOGCAT_METRICS_.forEach(function(m) {
    historian.metrics.logcatMetrics[m] = true;
  });
  historian.metrics.INSTANT_METRICS_.forEach(function(m) {
    historian.metrics.instantMetrics[m] = true;
  });
  // Descriptors populated here will be shown in the corresponding help icon.
  historian.metrics.descriptors[historian.metrics.Csv.WAKE_LOCK_HELD] =
      'Userspace wakelocks prevent the CPU from sleeping. This may point ' +
      'out problems with applications or services holding wakelocks too ' +
      'frequently, or may be a result of errors encountered performing ' +
      'operations normally expected to complete quickly, such as network ' +
      'sync operations. Some wakelocks are intentionally held for ' +
      'relatively long times to prevent the system from sleeping during ' +
      'activities such as screen off audio playback.\n\n' +
      'Only the first app to acquire the wakelock is shown. Please see the ' +
      'system stats Userspace Wakelocks table for absolute numbers.\n\n' +
      'You can also enable full wakelock reporting:\n' +
      'adb shell dumpsys batterystats --enable full-wake-history';
  historian.metrics.descriptors[historian.metrics.Csv.LONG_WAKELOCK] =
      'Wakelocks are currently logged as being held for a long time after ' +
      'being held for a minute, so the time shown here is the amount of time ' +
      'the wakelock was held after the initial minute.';
  historian.metrics.descriptors[historian.metrics.KERNEL_UPTIME] =
      'Time when the CPU is running but there is no userspace wakelock held ' +
      'is attributed to kernel only uptime. This metric is generated by ' +
      'comparing CPU running and Userspace wakelock events and is not ' +
      'present in the battery history log.';
};


/**
 * Returns whether the metric is aggregated.
 * @param {string} name The metric name.
 * @return {boolean} True if the metric is aggregated, false otherwise.
 */
historian.metrics.isAggregatedMetric = function(name) {
  return (name in historian.metrics.metricsToAggregate);
};


/**
 * Returns the metric name modified for the given type.
 * @param {string} type The type of the metric.
 * @param {string} name The original metric name.
 * @return {string}
 */
historian.metrics.typedMetricName = function(type, name) {
  switch (type) {
    case historian.metrics.ERROR_TYPE:
      return name + ' [Error]';
    case historian.metrics.UNAVAILABLE_TYPE:
      return name + ': no data';
    default:
      return name;
  }
};


/**
 * Gets the base metric name without the error or unavailable identifier.
 * @param {string} type The type of the metric.
 * @param {string} name The name for the error or unavailable metric.
 * @return {string} The original metric name.
 */
historian.metrics.baseMetric = function(type, name) {
  var lastIndex = historian.constants.NOT_FOUND;
  switch (type) {
    case historian.metrics.ERROR_TYPE:
      lastIndex = name.lastIndexOf(' ');
      break;
    case historian.metrics.UNAVAILABLE_TYPE:
      lastIndex = name.lastIndexOf(':');
      break;
  }
  return lastIndex == historian.constants.NOT_FOUND ? name :
      name.substring(0, lastIndex);
};


/**
 * Returns whether duration should be shown for entries in the given series.
 * @param {string} seriesName
 * @return {boolean} True if duration should be shown.
 */
historian.metrics.hasDuration = function(seriesName) {
  // Don't show durations for userspace partial wakelocks or screen on
  // reasons since they will confuse people.
  // Instant metrics only have events with no duration.
  return (seriesName != historian.metrics.Csv.WAKE_LOCK_HELD) &&
      (seriesName != historian.metrics.Csv.SCREEN_ON) &&
      !(seriesName in historian.metrics.instantMetrics);
};


/**
 * Returns the hash of the log source and series name. Currently assumes each
 * log source has unique series names.
 * @param {!historian.historianV2Logs.Sources} logSource
 * @param {string} seriesName
 * @return {string}
 */
historian.metrics.hash = function(logSource, seriesName) {
  return logSource + seriesName;
};



/**
 * DataHasher stores series data, hashing based on the log source and series
 * name.
 * @constructor
 * @struct
 */
historian.metrics.DataHasher = function() {
  /**
   * Map from the series hash to the corresponding series data.
   * @private {!Object<!historian.SeriesData>}
   */
  this.series_ = {};
};


/**
 * Adds the given series data to the map if it doesn't exist, otherwise nothing
 * is done.
 * @param {!historian.SeriesData} seriesData
 */
historian.metrics.DataHasher.prototype.add = function(seriesData) {
  var hash = historian.metrics.hash(seriesData.source, seriesData.name);
  if (!(hash in this.series_)) {
    this.series_[hash] = seriesData;
  }
};


/**
 * Returns the series data corresponding to the log source and series name.
 * @param {!historian.historianV2Logs.Sources} logSource
 * @param {string} seriesName
 * @return {?historian.SeriesData}
 */
historian.metrics.DataHasher.prototype.get = function(logSource, seriesName) {
  var hash = historian.metrics.hash(logSource, seriesName);
  return hash in this.series_ ?
      this.series_[historian.metrics.hash(logSource, seriesName)] : null;
};


/**
 * Returns all the stored series data.
 * @return {!Array<!historian.SeriesData>}
 */
historian.metrics.DataHasher.prototype.getAll = function() {
  var series = [];
  for (var hash in this.series_) {
    series.push(this.series_[hash]);
  }
  return series;
};


/**
 * Returns the series data for series from the BATTERY_HISTORY log.
 * @param {string} seriesName Name of the series to get data for.
 * @return {?historian.SeriesData}
 */
historian.metrics.DataHasher.prototype.getBatteryHistorySeries =
    function(seriesName) {
  return this.get(
      historian.historianV2Logs.Sources.BATTERY_HISTORY, seriesName);
};
