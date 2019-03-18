webpackHotUpdate(4,{

/***/ "./components/location.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\location.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var GettingStartedGoogleMap = Object(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], {
    ref: props.onMapLoad,
    defaultZoom: 15,
    defaultCenter: {
      lat: 39.0976281,
      lng: -84.513433
    },
    onClick: props.onMapClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.markers.map(function (marker) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], _extends({}, marker, {
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
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "location",
    style: {
      'backgroundColor': 'white',
      'textAlign': 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4212282735" + " " + "section location"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-4212282735" + " " + "title is-2"
  }, "Locations"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-4212282735" + " " + "columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-4212282735" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-4212282735" + " " + "block"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-4212282735"
  }, "Union Hall"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    style: {
      "color": "black"
    },
    href: "https://goo.gl/maps/eWq3GswALPq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, "1311 Vine St, Cincinnati, OH 45202"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71014.21228393703!2d-84.53633066674713!3d39.16517939131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd94c8f02b%3A0x3caee5bfc65866b3!2sUnion+Hall!5e0!3m2!1sen!2sus!4v1521638612498",
    width: "600",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-4212282735"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4212282735",
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEZ0IsQUFHMkIsQUFHSixBQUtGLFlBQ0ssRUFMRSxJQUhyQixXQVNBLElBTG1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxsb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHdvcmtmbG93LXdlZG5lc2RheVxcaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IEdldHRpbmdTdGFydGVkR29vZ2xlTWFwID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXHJcbiAgPEdvb2dsZU1hcFxyXG4gICAgcmVmPXtwcm9wcy5vbk1hcExvYWR9XHJcbiAgICBkZWZhdWx0Wm9vbT17MTV9XHJcbiAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMzkuMDk3NjI4MSwgbG5nOiAtODQuNTEzNDMzIH19XHJcbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxyXG4gID5cclxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAgey4uLm1hcmtlcn1cclxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Hb29nbGVNYXA+XHJcbikpO1xyXG5cclxuY29uc3QgTG9jYXRpb24gPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkxvY2F0aW9uczwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5VbmlvbiBIYWxsPC9oMz5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwiY29sb3JcIjogXCJibGFja1wiIH19IGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2VXcTNHc3dBTFBxXCI+MTMxMSBWaW5lIFN0LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNzEwMTQuMjEyMjgzOTM3MDMhMmQtODQuNTM2MzMwNjY2NzQ3MTMhM2QzOS4xNjUxNzkzOTEzMTU4OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODg0MWIzZmQ5NGM4ZjAyYiUzQTB4M2NhZWU1YmZjNjU4NjZiMyEyc1VuaW9uK0hhbGwhNWUwITNtMiExc2VuITJzdXMhNHYxNTIxNjM4NjEyNDk4XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZUJvcmRlcj1cIjBcIiBzdHlsZT17eyBib3JkZXI6IDAgfX0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNCBpcy1vZmZzZXQtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkRpcmVjdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKFNvdW5kYm91bmQpPC9oND5cclxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzEvSeKAkDc1IE5vcnRoIHRvIFNFQ09ORCBTVFJFRVQgRG93bnRvd24gKHlvdSB3aWxsIHdhbnQgdG8gYmUgaW4gdGhlIHJpZ2h0IGhhbmQgbGFuZSB3aGVuIHlvdSBhcmUgY3Jvc3NpbmcgdGhlIGJyaWRnZSkgbyBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KSBvIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoTm9ydGhib3VuZCk8L2g0PlxyXG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3MSBTb3V0aCB0byB0aGUgVEhJUkQgU1RSRUVUIGV4aXQgKHlvdSB3aWxsIG5lZWQgdG8gYmUgaW4gdGhlIGZhciBsZWZ0IGxhbmUpLiBHbyBzdHJhaWdodCBvbiBUaGlyZCBTdHJlZXQsIHR1cm4gbGVmdCBhdCB0aGUgNHRoIHRyYWZmaWMgbGlnaHQgb250byBXQUxOVVQuIEF0IHRoZSBmaXJzdCBsaWdodCB0dXJuIGxlZnQgb250byBTRUNPTkQgU1RSRUVULiBBdCB0aGUgZmlyc3QgdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTc1IE5vcnRoIChTb3V0aGJvdW5kKTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDc1IFNvdXRoIHRvIENpbmNpbm5hdGksIE9oaW8gYW5kIGV4aXQgYXQgU0VDT05EIFNUUkVFVCBEb3dudG93bi4gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkuIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoU291bmRib3VuZCk8L2g0PlxyXG4gICAgICAgICAgICA8cD4gVGFrZSBJ4oCQNzEvSeKAkDc1IE5vcnRoIHRvIFNFQ09ORCBTVFJFRVQgRG93bnRvd24gKHlvdSB3aWxsIHdhbnQgdG8gYmUgaW4gdGhlIHJpZ2h0IGhhbmQgbGFuZSB3aGVuIHlvdSBhcmUgY3Jvc3NpbmcgdGhlIGJyaWRnZSkuIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpLiBUdXJuIFJJR0hUIGludG8gdGhlIENFTlRSQUwgUklWRVIgRlJPTlQgUEFSS0lORyBHQVJBR0U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25cclxuIl19 */\n/*@ sourceURL=components\\location.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Location);

/***/ })

})
//# sourceMappingURL=4.98db2ed108058a7a9c1a.hot-update.js.map