"use strict";

var r = require("react-wrapper");
var pdfViewer = r.wrap(require("lazy-pdf-viewer"));

module.exports = {
  render: function () {
    return (
      pdfViewer({
          author: "Turner",
          year: 2004,
          title: "Total functional programming",
          url: "https://cdn.jsdelivr.net/gh/mietek/total-functional-programming@master/doc/pdf/turner-2004.pdf"
        }));
  }
};

r.makeComponent("App", module);
