"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require("react-google-maps");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/taronfoxworth/src/hillman-fridays/components/location.js";


var GettingStartedGoogleMap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
    ref: props.onMapLoad,
    defaultZoom: 15,
    defaultCenter: { lat: 39.0976281, lng: -84.513433 },
    onClick: props.onMapClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.markers.map(function (marker) {
    return _react2.default.createElement(_reactGoogleMaps.Marker, (0, _extends3.default)({}, marker, {
      onRightClick: function onRightClick() {
        return props.onMarkerRightClick(marker);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }));
  }));
});

var Location = function Location() {
  return _react2.default.createElement("div", { id: "location", style: { 'backgroundColor': 'white', 'textAlign': 'center' }, className: "section location", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("h2", { className: "title is-2", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Location"), _react2.default.createElement("div", { className: "columns", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement("div", { className: "column", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement("div", { className: "block", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement("h3", {
    "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Union Hall"), _react2.default.createElement("a", { target: "_blank", style: { "color": "black" }, href: "https://goo.gl/maps/eWq3GswALPq", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "1311 Vine St, Cincinnati, OH 45202"), _react2.default.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71014.21228393703!2d-84.53633066674713!3d39.16517939131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd94c8f02b%3A0x3caee5bfc65866b3!2sUnion+Hall!5e0!3m2!1sen!2sus!4v1521638612498", width: "600", height: "450", frameBorder: "0", style: { border: 0 }, allowFullScreen: true, "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })))), _react2.default.createElement(_style2.default, {
    styleId: 1104078269,
    css: ".elevator[data-jsx=\"1104078269\"]{text-align:center}a[data-jsx=\"1104078269\"]{display:block;margin-bottom:10px;font-weight:bold}.location[data-jsx=\"1104078269\"]{color:black}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURnQixBQUcyQixBQUVKLEFBRUYsYUFBTyxFQUZ1QixJQUZqQixnQkFFMkMsa0JBQU8iLCJmaWxlIjoiY29tcG9uZW50cy9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGFyb25mb3h3b3J0aC9zcmMvaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEdldHRpbmdTdGFydGVkR29vZ2xlTWFwID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXG4gIDxHb29nbGVNYXBcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cbiAgICBkZWZhdWx0Wm9vbT17MTV9XG4gICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDM5LjA5NzYyODEsIGxuZzogLTg0LjUxMzQzMyB9fVxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWFwQ2xpY2t9XG4gID5cbiAgICB7cHJvcHMubWFya2Vycy5tYXAobWFya2VyID0+IChcbiAgICAgIDxNYXJrZXJcbiAgICAgICAgey4uLm1hcmtlcn1cbiAgICAgICAgb25SaWdodENsaWNrPXsoKSA9PiBwcm9wcy5vbk1hcmtlclJpZ2h0Q2xpY2sobWFya2VyKX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvR29vZ2xlTWFwPlxuKSk7XG5cbmNvbnN0IExvY2F0aW9uID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwibG9jYXRpb25cIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInNlY3Rpb24gbG9jYXRpb25cIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkxvY2F0aW9uPC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZnJlZWRvbS1jZW50ZXIuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2VXcTNHc3dBTFBxXCI+NTAgRSBGcmVlZG9tIFdheSwgQ2luY2lubmF0aSwgT0ggNDUyMDI8L2E+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgPGgzPlVuaW9uIEhhbGw8L2gzPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwiY29sb3JcIjogXCJibGFja1wiIH19IGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2VXcTNHc3dBTFBxXCI+MTMxMSBWaW5lIFN0LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cbiAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDcxMDE0LjIxMjI4MzkzNzAzITJkLTg0LjUzNjMzMDY2Njc0NzEzITNkMzkuMTY1MTc5MzkxMzE1ODghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4NDFiM2ZkOTRjOGYwMmIlM0EweDNjYWVlNWJmYzY1ODY2YjMhMnNVbmlvbitIYWxsITVlMCEzbTIhMXNlbiEyc3VzITR2MTUyMTYzODYxMjQ5OFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVCb3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy00IGlzLW9mZnNldC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkRpcmVjdGlvbnM8L2gzPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChTb3VuZGJvdW5kKTwvaDQ+XG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKSBvIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpIG8gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKE5vcnRoYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxIFNvdXRoIHRvIHRoZSBUSElSRCBTVFJFRVQgZXhpdCAoeW91IHdpbGwgbmVlZCB0byBiZSBpbiB0aGUgZmFyIGxlZnQgbGFuZSkuIEdvIHN0cmFpZ2h0IG9uIFRoaXJkIFN0cmVldCwgdHVybiBsZWZ0IGF0IHRoZSA0dGggdHJhZmZpYyBsaWdodCBvbnRvIFdBTE5VVC4gQXQgdGhlIGZpcnN0IGxpZ2h0IHR1cm4gbGVmdCBvbnRvIFNFQ09ORCBTVFJFRVQuIEF0IHRoZSBmaXJzdCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCk8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03NSBOb3J0aCAoU291dGhib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzUgU291dGggdG8gQ2luY2lubmF0aSwgT2hpbyBhbmQgZXhpdCBhdCBTRUNPTkQgU1RSRUVUIERvd250b3duLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKFNvdW5kYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPiBUYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKS4gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkuIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblxuIl19 */\n/*@ sourceURL=components/location.js */"
  }));
};

exports.default = Location;