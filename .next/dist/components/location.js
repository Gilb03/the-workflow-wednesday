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

var _jsxFileName = "/Users/fox/src/hillman-fridays/components/location.js";


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
  return _react2.default.createElement("div", { id: "location", style: { 'background-color': 'white', 'text-align': 'center' }, className: "section location", "data-jsx": 1104078269,
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
  }, _react2.default.createElement("a", { target: "_blank", style: { "color": "black" }, href: "https://goo.gl/maps/eWq3GswALPq", "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "50 E Freedom Way, Cincinnati, OH 45202"), _react2.default.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3096.387068239024!2d-84.513158!3d39.097657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b1455d29db43%3A0xc160cf231595518f!2sNational+Underground+Railroad+Freedom+Center!5e0!3m2!1sen!2sus!4v1501212682884", width: "600", height: "450", frameborder: "0", style: { border: 0 }, allowfullscreen: true, "data-jsx": 1104078269,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })))), _react2.default.createElement(_style2.default, {
    styleId: 1104078269,
    css: ".elevator[data-jsx=\"1104078269\"]{text-align:center}a[data-jsx=\"1104078269\"]{display:block;margin-bottom:10px;font-weight:bold}.location[data-jsx=\"1104078269\"]{color:black}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQixBQUcyQixBQUVKLEFBRUYsYUFBTyxFQUZ1QixJQUZqQixnQkFFMkMsa0JBQU8iLCJmaWxlIjoiY29tcG9uZW50cy9sb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZm94L3NyYy9oaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcbiAgPEdvb2dsZU1hcFxuICAgIHJlZj17cHJvcHMub25NYXBMb2FkfVxuICAgIGRlZmF1bHRab29tPXsxNX1cbiAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMzkuMDk3NjI4MSwgbG5nOiAtODQuNTEzNDMzIH19XG4gICAgb25DbGljaz17cHJvcHMub25NYXBDbGlja31cbiAgPlxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxuICAgICAgPE1hcmtlclxuICAgICAgICB7Li4ubWFya2VyfVxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9Hb29nbGVNYXA+XG4pKTtcblxuY29uc3QgTG9jYXRpb24gPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJsb2NhdGlvblwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3doaXRlJywgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Mb2NhdGlvbjwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TmF0aW9uYWwgVW5kZXJncm91bmQgUmFpbHJvYWQgRnJlZWRvbSBDZW50ZXI8L2gzPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9lV3EzR3N3QUxQcVwiPjUwIEUgRnJlZWRvbSBXYXksIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwiY29sb3JcIjogXCJibGFja1wiIH19IGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2VXcTNHc3dBTFBxXCI+NTAgRSBGcmVlZG9tIFdheSwgQ2luY2lubmF0aSwgT0ggNDUyMDI8L2E+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDMwOTYuMzg3MDY4MjM5MDI0ITJkLTg0LjUxMzE1OCEzZDM5LjA5NzY1NyEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODQxYjE0NTVkMjlkYjQzJTNBMHhjMTYwY2YyMzE1OTU1MThmITJzTmF0aW9uYWwrVW5kZXJncm91bmQrUmFpbHJvYWQrRnJlZWRvbStDZW50ZXIhNWUwITNtMiExc2VuITJzdXMhNHYxNTAxMjEyNjgyODg0XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzdHlsZT17eyBib3JkZXI6IDAgfX0gYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTQgaXMtb2Zmc2V0LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+RGlyZWN0aW9uczwvaDM+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKFNvdW5kYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxL0nigJA3NSBOb3J0aCB0byBTRUNPTkQgU1RSRUVUIERvd250b3duICh5b3Ugd2lsbCB3YW50IHRvIGJlIGluIHRoZSByaWdodCBoYW5kIGxhbmUgd2hlbiB5b3UgYXJlIGNyb3NzaW5nIHRoZSBicmlkZ2UpIG8gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkgbyBUdXJuIFJJR0hUIGludG8gdGhlIENFTlRSQUwgUklWRVIgRlJPTlQgUEFSS0lORyBHQVJBR0U8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoTm9ydGhib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzEgU291dGggdG8gdGhlIFRISVJEIFNUUkVFVCBleGl0ICh5b3Ugd2lsbCBuZWVkIHRvIGJlIGluIHRoZSBmYXIgbGVmdCBsYW5lKS4gR28gc3RyYWlnaHQgb24gVGhpcmQgU3RyZWV0LCB0dXJuIGxlZnQgYXQgdGhlIDR0aCB0cmFmZmljIGxpZ2h0IG9udG8gV0FMTlVULiBBdCB0aGUgZmlyc3QgbGlnaHQgdHVybiBsZWZ0IG9udG8gU0VDT05EIFNUUkVFVC4gQXQgdGhlIGZpcnN0IHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KTwvcD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTc1IE5vcnRoIChTb3V0aGJvdW5kKTwvaDQ+XG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3NSBTb3V0aCB0byBDaW5jaW5uYXRpLCBPaGlvIGFuZCBleGl0IGF0IFNFQ09ORCBTVFJFRVQgRG93bnRvd24uIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpLiBUdXJuIFJJR0hUIGludG8gdGhlIENFTlRSQUwgUklWRVIgRlJPTlQgUEFSS0lORyBHQVJBR0U8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoU291bmRib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+IFRha2UgSeKAkDcxL0nigJA3NSBOb3J0aCB0byBTRUNPTkQgU1RSRUVUIERvd250b3duICh5b3Ugd2lsbCB3YW50IHRvIGJlIGluIHRoZSByaWdodCBoYW5kIGxhbmUgd2hlbiB5b3UgYXJlIGNyb3NzaW5nIHRoZSBicmlkZ2UpLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uXG4iXX0= */\n/*@ sourceURL=components/location.js */"
  }));
};

exports.default = Location;