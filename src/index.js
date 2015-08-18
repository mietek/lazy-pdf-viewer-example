"use strict";

/* global PDFJS */

PDFJS.cMapUrl = document.location.origin + "/lib/cmaps/";
PDFJS.cMapPacked = true;

window.React = require("react/addons");

var r = require("react-wrapper");
var app = r.wrap(require("./app"));

require("./index.css");

r.render(app(), document.getElementById("root"));
