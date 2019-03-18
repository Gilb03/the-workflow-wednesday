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
  }, "Second Shift Co-Working"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    style: {
      "marginRight": "spacing + 'em'",
      "color": "black"
    },
    href: "https://goo.gl/maps/i8fhL65pXC22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      lineNumber: 33
    },
    className: "jsx-4212282735"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4212282735",
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLWNoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dCLEFBRzJCLEFBR0osQUFLRixZQUNLLEVBTEUsSUFIckIsV0FTQSxJQUxtQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50c1xcbG9jYXRpb24tY2hpLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcclxuICA8R29vZ2xlTWFwXHJcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cclxuICAgIGRlZmF1bHRab29tPXsxNX1cclxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiA0MS45MzIwNTgzLCBsbmc6IC04Ny43MTU4IH19XHJcbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxyXG4gID5cclxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAgey4uLm1hcmtlcn1cclxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Hb29nbGVNYXA+XHJcbikpO1xyXG5cclxuY29uc3QgTG9jYXRpb25DaGkgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPjwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5TZWNvbmQgU2hpZnQgQ28tV29ya2luZzwvaDM+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBcIm1hcmdpblJpZ2h0XCI6XCJzcGFjaW5nICsgJ2VtJ1wiLFwiY29sb3JcIjogXCJibGFja1wiIH19IGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2k4ZmhMNjVwWEMyMlwiPjM0MzIgVyBEaXZlcnNleSBBdmUuLCBDaGljYWdvLCBJTCA2MDY0NzwvYT5cclxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6Q2hJSjdlUXFjM1RORDRnUkFPSDRrRVNJZVlzJmtleT1BSXphU3lBd3p1OVVIRlhEX1RHM2s2dThWWlV4eUVFYXRnLUF2QndcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIGZyYW1lQm9yZGVyPVwiMFwiIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25DaGkiXX0= */\n/*@ sourceURL=components\\location-chi.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationChi);

/***/ })

})
//# sourceMappingURL=4.4924da2180fcc4588ca3.hot-update.js.map