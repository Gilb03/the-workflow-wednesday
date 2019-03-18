webpackHotUpdate(4,{

/***/ "./components/location-chi.js":
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\location-chi.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var GettingStartedGoogleMap = Object(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], {
    ref: props.onMapLoad,
    defaultZoom: 15,
    defaultCenter: {
      lat: 41.9320583,
      lng: -87.7158
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

var LocationChi = function LocationChi() {
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
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
  }, "Second Shift Co-Working"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "link to eventbrite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }), "Register here"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    style: {
      "marginRight": "spacing + 'em'",
      "color": "black"
    },
    href: "https://goo.gl/maps/i8fhL65pXC22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-4212282735"
  }, "3432 W Diversey Ave., Chicago, IL 60647"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7eQqc3TND4gRAOH4kESIeYs&key=AIzaSyAwzu9UHFXD_TG3k6u8VZUxyEEatg-AvBw",
    width: "600",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-4212282735"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4212282735",
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLWNoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBRzJCLEFBR0osQUFLRixZQUNLLEVBTEUsSUFIckIsV0FTQSxJQUxtQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50c1xcbG9jYXRpb24tY2hpLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcclxuICA8R29vZ2xlTWFwXHJcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cclxuICAgIGRlZmF1bHRab29tPXsxNX1cclxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiA0MS45MzIwNTgzLCBsbmc6IC04Ny43MTU4IH19XHJcbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxyXG4gID5cclxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAgey4uLm1hcmtlcn1cclxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Hb29nbGVNYXA+XHJcbikpO1xyXG5cclxuY29uc3QgTG9jYXRpb25DaGkgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPjwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5TZWNvbmQgU2hpZnQgQ28tV29ya2luZzwvaDM+XHJcbiAgICAgICAgICA8aDQ+PGEgaHJlZj1cImxpbmsgdG8gZXZlbnRicml0ZVwiPjwvYT5SZWdpc3RlciBoZXJlPC9oND5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwibWFyZ2luUmlnaHRcIjpcInNwYWNpbmcgKyAnZW0nXCIsXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvaThmaEw2NXBYQzIyXCI+MzQzMiBXIERpdmVyc2V5IEF2ZS4sIENoaWNhZ28sIElMIDYwNjQ3PC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQvdjEvcGxhY2U/cT1wbGFjZV9pZDpDaElKN2VRcWMzVE5ENGdSQU9INGtFU0llWXMma2V5PUFJemFTeUF3enU5VUhGWERfVEczazZ1OFZaVXh5RUVhdGctQXZCd1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVCb3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmVsZXZhdG9yIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNoaSJdfQ== */\n/*@ sourceURL=components\\location-chi.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationChi);

/***/ })

})
//# sourceMappingURL=4.31c3ed113c5196d2419a.hot-update.js.map