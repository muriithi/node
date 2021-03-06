/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['connect.js']) {
  _$jscoverage['connect.js'] = [];
  _$jscoverage['connect.js'][13] = 0;
  _$jscoverage['connect.js'][22] = 0;
  _$jscoverage['connect.js'][26] = 0;
  _$jscoverage['connect.js'][32] = 0;
  _$jscoverage['connect.js'][38] = 0;
  _$jscoverage['connect.js'][44] = 0;
  _$jscoverage['connect.js'][50] = 0;
  _$jscoverage['connect.js'][56] = 0;
  _$jscoverage['connect.js'][65] = 0;
  _$jscoverage['connect.js'][66] = 0;
  _$jscoverage['connect.js'][67] = 0;
  _$jscoverage['connect.js'][68] = 0;
  _$jscoverage['connect.js'][69] = 0;
  _$jscoverage['connect.js'][70] = 0;
  _$jscoverage['connect.js'][71] = 0;
  _$jscoverage['connect.js'][72] = 0;
  _$jscoverage['connect.js'][74] = 0;
  _$jscoverage['connect.js'][75] = 0;
  _$jscoverage['connect.js'][81] = 0;
  _$jscoverage['connect.js'][87] = 0;
  _$jscoverage['connect.js'][88] = 0;
  _$jscoverage['connect.js'][89] = 0;
  _$jscoverage['connect.js'][90] = 0;
  _$jscoverage['connect.js'][91] = 0;
  _$jscoverage['connect.js'][92] = 0;
}
_$jscoverage['connect.js'][13]++;
var EventEmitter = require("events").EventEmitter, proto = require("./proto"), utils = require("./utils"), path = require("path"), basename = path.basename, fs = require("fs");
_$jscoverage['connect.js'][22]++;
require("./patch");
_$jscoverage['connect.js'][26]++;
exports = module.exports = createServer;
_$jscoverage['connect.js'][32]++;
exports.version = "2.6.1";
_$jscoverage['connect.js'][38]++;
exports.mime = require("./middleware/static").mime;
_$jscoverage['connect.js'][44]++;
exports.proto = proto;
_$jscoverage['connect.js'][50]++;
exports.middleware = {};
_$jscoverage['connect.js'][56]++;
exports.utils = utils;
_$jscoverage['connect.js'][65]++;
function createServer() {
  _$jscoverage['connect.js'][66]++;
  function app(req, res) {
    _$jscoverage['connect.js'][66]++;
    app.handle(req, res);
}
  _$jscoverage['connect.js'][67]++;
  utils.merge(app, proto);
  _$jscoverage['connect.js'][68]++;
  utils.merge(app, EventEmitter.prototype);
  _$jscoverage['connect.js'][69]++;
  app.route = "/";
  _$jscoverage['connect.js'][70]++;
  app.stack = [];
  _$jscoverage['connect.js'][71]++;
  for (var i = 0; i < arguments.length; ++i) {
    _$jscoverage['connect.js'][72]++;
    app.use(arguments[i]);
}
  _$jscoverage['connect.js'][74]++;
  return app;
}
_$jscoverage['connect.js'][75]++;
;
_$jscoverage['connect.js'][81]++;
createServer.createServer = createServer;
_$jscoverage['connect.js'][87]++;
fs.readdirSync(__dirname + "/middleware").forEach((function (filename) {
  _$jscoverage['connect.js'][88]++;
  if (! /\.js$/.test(filename)) {
    _$jscoverage['connect.js'][88]++;
    return;
  }
  _$jscoverage['connect.js'][89]++;
  var name = basename(filename, ".js");
  _$jscoverage['connect.js'][90]++;
  function load() {
    _$jscoverage['connect.js'][90]++;
    return require("./middleware/" + name);
}
  _$jscoverage['connect.js'][91]++;
  exports.middleware.__defineGetter__(name, load);
  _$jscoverage['connect.js'][92]++;
  exports.__defineGetter__(name, load);
}));
_$jscoverage['connect.js'].source = ["","/*!"," * Connect"," * Copyright(c) 2010 Sencha Inc."," * Copyright(c) 2011 TJ Holowaychuk"," * MIT Licensed"," */","","/**"," * Module dependencies."," */","","var EventEmitter = require('events').EventEmitter","  , proto = require('./proto')","  , utils = require('./utils')","  , path = require('path')","  , basename = path.basename","  , fs = require('fs');","","// node patches","","require('./patch');","","// expose createServer() as the module","","exports = module.exports = createServer;","","/**"," * Framework version."," */","","exports.version = '2.6.1';","","/**"," * Expose mime module."," */","","exports.mime = require('./middleware/static').mime;","","/**"," * Expose the prototype."," */","","exports.proto = proto;","","/**"," * Auto-load middleware getters."," */","","exports.middleware = {};","","/**"," * Expose utilities."," */","","exports.utils = utils;","","/**"," * Create a new connect server."," *"," * @return {Function}"," * @api public"," */","","function createServer() {","  function app(req, res){ app.handle(req, res); }","  utils.merge(app, proto);","  utils.merge(app, EventEmitter.prototype);","  app.route = '/';","  app.stack = [];","  for (var i = 0; i &lt; arguments.length; ++i) {","    app.use(arguments[i]);","  }","  return app;","};","","/**"," * Support old `.createServer()` method."," */","","createServer.createServer = createServer;","","/**"," * Auto-load bundled middleware with getters."," */","","fs.readdirSync(__dirname + '/middleware').forEach(function(filename){","  if (!/\\.js$/.test(filename)) return;","  var name = basename(filename, '.js');","  function load(){ return require('./middleware/' + name); }","  exports.middleware.__defineGetter__(name, load);","  exports.__defineGetter__(name, load);","});"];
