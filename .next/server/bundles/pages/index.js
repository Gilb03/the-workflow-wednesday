module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/description.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\description.js";



var Description = function Description() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      'backgroundColor': '#282828'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2932254444" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2932254444" + " " + "elevator columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2932254444" + " " + "column is-6 is-offset-3"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2932254444" + " " + "title is-4"
  }, "CREATION. COMMUNITY. COLLABORATION."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2932254444",
    css: ".elevator.jsx-2932254444{text-align:center;color:white;}.title.jsx-2932254444{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGRlc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUcyQixBQUlOLFlBQ0ssTUFKTCxXQUtkLENBSkEiLCJmaWxlIjoiY29tcG9uZW50c1xcZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx0aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMyODI4MjgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy02IGlzLW9mZnNldC0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5DUkVBVElPTi4gQ09NTVVOSVRZLiBDT0xMQUJPUkFUSU9OLjwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxyXG4iXX0= */\n/*@ sourceURL=components\\description.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Description);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\footer.js";



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-648890430" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-648890430" + " " + "title is-2"
  }, "Made with \u2764\uFE0F in Cincinnati."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-648890430"
  }, "Copyright 2017 \xA9 All Rights Reserved by ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "http://hill7.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-648890430"
  }, "Hillman Accelerator")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "648890430",
    css: "#footer.jsx-648890430{background-color:#282828;text-align:center;color:white;}.title.jsx-648890430{color:white;}a.jsx-648890430{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHa0MsQUFLYixBQUdELFlBRmIsQUFHQSxhQVJtQixrQkFDTCxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHRoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TWFkZSB3aXRoIOKdpO+4jyBpbiBDaW5jaW5uYXRpLjwvaDI+XHJcbiAgICA8cD5Db3B5cmlnaHQgMjAxNyAmY29weTsgQWxsIFJpZ2h0cyBSZXNlcnZlZCBieSA8YSBocmVmPVwiaHR0cDovL2hpbGw3Lm9yZ1wiPkhpbGxtYW4gQWNjZWxlcmF0b3I8L2E+PC9wPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjZm9vdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIl19 */\n/*@ sourceURL=components\\footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\form.js";



var SubmitForm = function SubmitForm() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "signup",
    style: {
      'backgroundColor': '#ffc7a8'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-3981005454" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-3981005454" + " " + "columns is-mobile"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3981005454" + " " + "column is-half is-offset-one-quarter"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3981005454" + " " + "title is-3 label"
  }, "Stay Connected"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
    style: {
      'padding': '3px',
      'textAlign': 'center'
    },
    action: "https://tinyletter.com/hillman-friday",
    method: "post",
    target: "popupwindow",
    onsubmit: "window.open('https://tinyletter.com/hillman-friday', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3981005454"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3981005454" + " " + "field is-grouped"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3981005454" + " " + "control is-expanded"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "tlemail",
    placeholder: "Your email here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3981005454" + " " + "input"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    type: "hidden",
    value: "1",
    name: "embed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3981005454"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3981005454" + " " + "control"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3981005454" + " " + "button is-white"
  }, "Submit")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3981005454",
    css: ".title.jsx-3981005454{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdxQixZQUNNLGtCQUNELGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxmb3JtLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN1Ym1pdEZvcm0gPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cInNpZ251cFwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnI2ZmYzdhOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGlzLW9mZnNldC1vbmUtcXVhcnRlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIGxhYmVsXCI+U3RheSBDb25uZWN0ZWQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7ICdwYWRkaW5nJzogJzNweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBhY3Rpb249XCJodHRwczovL3RpbnlsZXR0ZXIuY29tL2hpbGxtYW4tZnJpZGF5XCIgbWV0aG9kPVwicG9zdFwiIHRhcmdldD1cInBvcHVwd2luZG93XCIgb25zdWJtaXQ9XCJ3aW5kb3cub3BlbignaHR0cHM6Ly90aW55bGV0dGVyLmNvbS9oaWxsbWFuLWZyaWRheScsICdwb3B1cHdpbmRvdycsICdzY3JvbGxiYXJzPXllcyx3aWR0aD04MDAsaGVpZ2h0PTYwMCcpO3JldHVybiB0cnVlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJ0bGVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgbmFtZT1cImVtYmVkXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdoaXRlXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPHA+PGxhYmVsIGZvcj1cInRsZW1haWxcIj5CZSBOb3RpZmllZDwvbGFiZWw+PC9wPlxyXG4gICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3sgJ3dpZHRoJzogJzE0MHB4JyB9fSBuYW1lPVwiZW1haWxcIiBpZD1cInRsZW1haWxcIiAvPjwvcD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgbmFtZT1cImVtYmVkXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJzY3JpYmVcIiAvPiAqL31cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=components\\form.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SubmitForm);

/***/ }),

/***/ "./components/group-banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\group-banner.js";


var GroupBanner = function GroupBanner() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: {
      'display': 'block'
    },
    src: "/static/group.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (GroupBanner);

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-4049844003"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4049844003" + " " + "header section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/workflowfinal.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-4049844003" + " " + "logo"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4049844003",
    css: ".logo.jsx-4049844003{margin-bottom:15px;}.title.jsx-4049844003{font-weight:bold;color:#282828;}.header.jsx-4049844003{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRCLEFBR0YsQUFJQyxpQkFISixDQUlTLENBUHpCLFlBSUEsVUFJYyxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHRoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgc2VjdGlvblwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL3dvcmtmbG93ZmluYWwuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgey8qIDxwIHN0eWxlPXt7ICdmb250V2VpZ2h0JzogJ2JvbGQnLCAndGV4dC1hbGlnbic6ICdjZW50ZXInIH19PiBFdmVyeSAybmQgYW5kIDR0aCBXZWRuZXNkYXksIGF0IDc6MDBwbSwgd29yayB3aXRoIHVzLjwvcD4gKi99XHJcbiAgICAgIHsvKiA8cCBzdHlsZT17eyAnZm9udFdlaWdodCc6ICdib2xkJywgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9fT4gQ2luY2luYXRpLCBPaGlvPC9wPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGYgaXMtb2Zmc2V0LW9uZS1xdWFydGVyXCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17eyd0ZXh0LWFsaWdodCc6ICdjZW50ZXInLCBtYXJnaW46ICdhdXRvJywgZGlzcGxheTogJ2Jsb2NrJywgd2lkdGg6ICcyMDAnfX0gY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMyODI4Mjg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdfQ== */\n/*@ sourceURL=components\\header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_typekit__ = __webpack_require__("react-typekit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_typekit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_typekit__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\layout.js";





var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2869033619"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2869033619"
  }, 'Workflow Wednesdays'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2869033619"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2869033619"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.4/react-bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2869033619"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2869033619"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGUG88YViM2h_rMqA2YWDhitp7GooXQ7g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2869033619"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typekit___default.a, {
    kitId: "gzc7xiy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2869033619"
  })), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2869033619",
    css: "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRzJDLGtDQUNwQyIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx0aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgVHlwZWtpdCBmcm9tICdyZWFjdC10eXBla2l0JztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+eydXb3JrZmxvdyBXZWRuZXNkYXlzJ308L3RpdGxlPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjQuMy9jc3MvYnVsbWEuY3NzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1ib290c3RyYXAvMC4zMi40L3JlYWN0LWJvb3RzdHJhcC5taW4uanNcIi8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUNHVUc4OFlWaU0yaF9yTXFBMllXRGhpdHA3R29vWFE3Z1wiPjwvc2NyaXB0PlxyXG4gICAgICA8VHlwZWtpdCBraXRJZD1cImd6Yzd4aXlcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZnJhbmtsaW4tZ290aGljLXVyd1wiO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=components\\layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/location-chi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\location-chi.js";



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
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-4212282735"
  }, "The Second Shift"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    "class": "btn btn-primary",
    href: "https://bit.ly/2OdB3ji",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, "Chicago Registration")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
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
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLWNoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBRzJCLEFBR0osQUFLRixZQUNLLEVBTEUsSUFIckIsV0FTQSxJQUxtQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50c1xcbG9jYXRpb24tY2hpLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhHb29nbGVNYXAsIEdvb2dsZU1hcCwgTWFya2VyIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBHZXR0aW5nU3RhcnRlZEdvb2dsZU1hcCA9IHdpdGhHb29nbGVNYXAocHJvcHMgPT4gKFxyXG4gIDxHb29nbGVNYXBcclxuICAgIHJlZj17cHJvcHMub25NYXBMb2FkfVxyXG4gICAgZGVmYXVsdFpvb209ezE1fVxyXG4gICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDQxLjkzMjA1ODMsIGxuZzogLTg3LjcxNTggfX1cclxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWFwQ2xpY2t9XHJcbiAgPlxyXG4gICAge3Byb3BzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoXHJcbiAgICAgIDxNYXJrZXJcclxuICAgICAgICB7Li4ubWFya2VyfVxyXG4gICAgICAgIG9uUmlnaHRDbGljaz17KCkgPT4gcHJvcHMub25NYXJrZXJSaWdodENsaWNrKG1hcmtlcil9XHJcbiAgICAgIC8+XHJcbiAgICApKX1cclxuICA8L0dvb2dsZU1hcD5cclxuKSk7XHJcblxyXG5jb25zdCBMb2NhdGlvbkNoaSA9ICgpID0+IChcclxuICA8ZGl2IGlkPVwibG9jYXRpb25cIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInNlY3Rpb24gbG9jYXRpb25cIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+PC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZnJlZWRvbS1jZW50ZXIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk5hdGlvbmFsIFVuZGVyZ3JvdW5kIFJhaWxyb2FkIEZyZWVkb20gQ2VudGVyPC9oMz5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9lV3EzR3N3QUxQcVwiPjUwIEUgRnJlZWRvbSBXYXksIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgPGg0PlRoZSBTZWNvbmQgU2hpZnQ8L2g0PlxyXG4gICAgICAgICAgPGg0PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vYml0Lmx5LzJPZEIzamlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaGljYWdvIFJlZ2lzdHJhdGlvbjwvYT48L2g0PlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgXCJtYXJnaW5SaWdodFwiOlwic3BhY2luZyArICdlbSdcIixcImNvbG9yXCI6IFwiYmxhY2tcIiB9fSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9pOGZoTDY1cFhDMjJcIj4zNDMyIFcgRGl2ZXJzZXkgQXZlLiwgQ2hpY2FnbywgSUwgNjA2NDc8L2E+XHJcbiAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZC92MS9wbGFjZT9xPXBsYWNlX2lkOkNoSUo3ZVFxYzNUTkQ0Z1JBT0g0a0VTSWVZcyZrZXk9QUl6YVN5QXd6dTlVSEZYRF9URzNrNnU4VlpVeHlFRWF0Zy1BdkJ3XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZUJvcmRlcj1cIjBcIiBzdHlsZT17eyBib3JkZXI6IDAgfX0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uQ2hpIl19 */\n/*@ sourceURL=components\\location-chi.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationChi);

/***/ }),

/***/ "./components/location.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\location.js";



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
  }, "Union Hall"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    "class": "btn btn-primary",
    href: "https://bit.ly/2OdB3ji",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, "Cincinnati Registration")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    style: {
      "color": "black"
    },
    href: "https://goo.gl/maps/eWq3GswALPq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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
      lineNumber: 34
    },
    className: "jsx-4212282735"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4212282735",
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEZ0IsQUFHMkIsQUFHSixBQUtGLFlBQ0ssRUFMRSxJQUhyQixXQVNBLElBTG1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxsb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHRoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcclxuICA8R29vZ2xlTWFwXHJcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cclxuICAgIGRlZmF1bHRab29tPXsxNX1cclxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiAzOS4wOTc2MjgxLCBsbmc6IC04NC41MTM0MzMgfX1cclxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWFwQ2xpY2t9XHJcbiAgPlxyXG4gICAge3Byb3BzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoXHJcbiAgICAgIDxNYXJrZXJcclxuICAgICAgICB7Li4ubWFya2VyfVxyXG4gICAgICAgIG9uUmlnaHRDbGljaz17KCkgPT4gcHJvcHMub25NYXJrZXJSaWdodENsaWNrKG1hcmtlcil9XHJcbiAgICAgIC8+XHJcbiAgICApKX1cclxuICA8L0dvb2dsZU1hcD5cclxuKSk7XHJcblxyXG5jb25zdCBMb2NhdGlvbiA9ICgpID0+IChcclxuICA8ZGl2IGlkPVwibG9jYXRpb25cIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInNlY3Rpb24gbG9jYXRpb25cIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TG9jYXRpb25zPC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZnJlZWRvbS1jZW50ZXIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk5hdGlvbmFsIFVuZGVyZ3JvdW5kIFJhaWxyb2FkIEZyZWVkb20gQ2VudGVyPC9oMz5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9lV3EzR3N3QUxQcVwiPjUwIEUgRnJlZWRvbSBXYXksIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgPGgzPlVuaW9uIEhhbGw8L2gzPlxyXG4gICAgICAgICAgPGg0PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vYml0Lmx5LzJPZEIzamlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaW5jaW5uYXRpIFJlZ2lzdHJhdGlvbjwvYT48L2g0PlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj4xMzExIFZpbmUgU3QsIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3MTAxNC4yMTIyODM5MzcwMyEyZC04NC41MzYzMzA2NjY3NDcxMyEzZDM5LjE2NTE3OTM5MTMxNTg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODQxYjNmZDk0YzhmMDJiJTNBMHgzY2FlZTViZmM2NTg2NmIzITJzVW5pb24rSGFsbCE1ZTAhM20yITFzZW4hMnN1cyE0djE1MjE2Mzg2MTI0OThcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIGZyYW1lQm9yZGVyPVwiMFwiIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJlbGV2YXRvciBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy00IGlzLW9mZnNldC00XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+RGlyZWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoU291bmRib3VuZCk8L2g0PlxyXG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKSBvIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpIG8gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChOb3J0aGJvdW5kKTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxIFNvdXRoIHRvIHRoZSBUSElSRCBTVFJFRVQgZXhpdCAoeW91IHdpbGwgbmVlZCB0byBiZSBpbiB0aGUgZmFyIGxlZnQgbGFuZSkuIEdvIHN0cmFpZ2h0IG9uIFRoaXJkIFN0cmVldCwgdHVybiBsZWZ0IGF0IHRoZSA0dGggdHJhZmZpYyBsaWdodCBvbnRvIFdBTE5VVC4gQXQgdGhlIGZpcnN0IGxpZ2h0IHR1cm4gbGVmdCBvbnRvIFNFQ09ORCBTVFJFRVQuIEF0IHRoZSBmaXJzdCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCk8L3A+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzUgTm9ydGggKFNvdXRoYm91bmQpPC9oND5cclxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzUgU291dGggdG8gQ2luY2lubmF0aSwgT2hpbyBhbmQgZXhpdCBhdCBTRUNPTkQgU1RSRUVUIERvd250b3duLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChTb3VuZGJvdW5kKTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPiBUYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKS4gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkuIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmVsZXZhdG9yIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblxyXG4iXX0= */\n/*@ sourceURL=components\\location.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Location);

/***/ }),

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\navbar.js";


var Navbar = function Navbar(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "#what-to-expect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "What To Expect"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "#location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Locations"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "#organizers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Organizers")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "https://www.instagram.com/hill7org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Instagram"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "https://www.facebook.com/hill7org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Facebook"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-item",
    href: "https://twitter.com/jgthms",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Twitter")
  /* grouped */
  ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "field is-separated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button is-white",
    href: "#signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Sign Up"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "field is-grouped",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    id: "twitter",
    className: "button is-white",
    "data-social-network": "Twitter",
    "data-social-action": "tweet",
    "data-social-target": "https://fridays.hill7.org",
    target: "_blank",
    href: "https://twitter.com/intent/tweet?text=#HillmanFridays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Tweet")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    jsx: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "\n        {\n            .elevator {\n              text-align: center;\n            }\n            #twitter {\n                color: #55acee;\n                border-color: #55acee;\n            }\n            #twitter:hover {\n                background: #55acee;\n                border-color: #55acee;\n                color: white;\n            }\n            .navbar {\n              { background-color: #f36d21; }\n            }\n            .navbar-item {\n              { color: white;\n              font-weight: bold;\n            }\n            img {\n              height: 250px;\n              border-radius: 50%;\n            }\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/organizers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\organizers.js";



var Organizers = function Organizers() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "organizers",
    style: {
      'backgroundColor': 'white',
      'textAlign': 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-2813563257" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2813563257" + " " + "title is-2"
  }, "Organizers"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2813563257" + " " + "columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2813563257" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://twitter.com/typical_nana",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2813563257"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/Nana.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2813563257"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2813563257" + " " + "title is-5"
  }, "Nana Abeeku")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-2813563257" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://twitter.com/_gilbproducing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2813563257"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/gil.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2813563257"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-2813563257" + " " + "title is-5"
  }, "Gilbert King"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2813563257",
    css: ".elevator.jsx-2813563257{text-align:center;}.title.jsx-2813563257{font-weight:bold;}img.jsx-2813563257{height:250px;width:250px;margin-bottom:10px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG9yZ2FuaXplcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUcyQixBQUdELEFBR0osYUFDQSxJQUhmLENBSEEsT0FPb0IsbUJBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHNcXG9yZ2FuaXplcnMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx0aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiIGNvbnN0IE9yZ2FuaXplcnMgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJvcmdhbml6ZXJzXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Pcmdhbml6ZXJzPC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYW50d29pbmUuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+QW50d29pbmUgRmxvd2VyczwvcD5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3R5cGljYWxfbmFuYVwiPjxpbWcgc3JjPVwiL3N0YXRpYy9OYW5hLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5OYW5hIEFiZWVrdTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vX2dpbGJwcm9kdWNpbmdcIj48aW1nIHNyYz1cIi9zdGF0aWMvZ2lsLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5HaWxiZXJ0IEtpbmc8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAgMjUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXplcnNcclxuIl19 */\n/*@ sourceURL=components\\organizers.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Organizers);

/***/ }),

/***/ "./components/tagline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\tagline.js";



var TagLine = function TagLine() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      'backgroundColor': '#282828'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-1855462676" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-1855462676" + " " + "elevator columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1855462676" + " " + "column is-6 is-offset-3"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1855462676" + " " + "title is-4"
  }, "Every 2nd and 4th Wednesday, at 7pm, work with us."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1855462676",
    css: ".elevator.jsx-1855462676{text-align:center;color:white;}.title.jsx-1855462676{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHRhZ2xpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzJCLEFBSVIsWUFDSyxNQUpILFdBS2QsQ0FKQSIsImZpbGUiOiJjb21wb25lbnRzXFx0YWdsaW5lLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhZ0xpbmUgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMyODI4MjgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy02IGlzLW9mZnNldC0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5FdmVyeSAybmQgYW5kIDR0aCBXZWRuZXNkYXksIGF0IDdwbSwgd29yayB3aXRoIHVzLjwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ0xpbmVcclxuIl19 */\n/*@ sourceURL=components\\tagline.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (TagLine);

/***/ }),

/***/ "./components/tweet-embed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\tweet-embed.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement('script');
    s.setAttribute('src', src);

    s.onload = function () {
      return callbacks.forEach(function (cb) {
        return cb();
      });
    };

    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

var TweetEmbed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TweetEmbed, _React$Component);

  function TweetEmbed() {
    _classCallCheck(this, TweetEmbed);

    return _possibleConstructorReturn(this, (TweetEmbed.__proto__ || Object.getPrototypeOf(TweetEmbed)).apply(this, arguments));
  }

  _createClass(TweetEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var renderTweet = function renderTweet() {
        window.twttr.ready().then(function (_ref) {
          var widgets = _ref.widgets;
          var _this$props = _this.props,
              options = _this$props.options,
              onTweetLoadSuccess = _this$props.onTweetLoadSuccess,
              onTweetLoadError = _this$props.onTweetLoadError;
          widgets.createTweetEmbed(_this.props.id, _this._div, options).then(onTweetLoadSuccess).catch(onTweetLoadError);
        });
      };

      if (!window.twttr) {
        var isLocal = window.location.protocol.indexOf('file') >= 0;
        var protocol = isLocal ? this.props.protocol : '';
        addScript("".concat(protocol, "//platform.twitter.com/widgets.js"), renderTweet);
      } else {
        renderTweet();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.className,
        ref: function ref(c) {
          _this2._div = c;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }]);

  return TweetEmbed;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

TweetEmbed.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  protocol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onTweetLoadSuccess: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onTweetLoadError: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TweetEmbed.defaultProps = {
  protocol: 'https:',
  options: {},
  className: null
};
/* harmony default export */ __webpack_exports__["a"] = (TweetEmbed);

/***/ }),

/***/ "./components/twitter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweet_embed__ = __webpack_require__("./components/tweet-embed.js");
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\twitter.js";




var Twitter = function Twitter() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      'backgroundColor': 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3852583590" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3852583590" + " " + "columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3852583590" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__tweet_embed__["a" /* default */], {
    id: "890734688138141697",
    options: {
      cards: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3852583590" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__tweet_embed__["a" /* default */], {
    id: "883507696279969792",
    options: {
      cards: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3852583590" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__tweet_embed__["a" /* default */], {
    id: "890733750744698880",
    options: {
      cards: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3852583590",
    css: ".elevator.jsx-3852583590{text-align:center;color:white;}.title.jsx-3852583590{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHR3aXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUcyQixBQUtyQixZQUFDLE1BSmMsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzXFx0d2l0dGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldEVtYmVkIGZyb20gJy4vdHdlZXQtZW1iZWQnO1xyXG5cclxuY29uc3QgVHdpdHRlciA9ICgpID0+IChcclxuICA8ZGl2IHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnd2hpdGUnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxUd2VldEVtYmVkIGlkPXtcIjg5MDczNDY4ODEzODE0MTY5N1wifSBvcHRpb25zPXt7IGNhcmRzOiAnaGlkZGVuJyB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8VHdlZXRFbWJlZCBpZD17XCI4ODM1MDc2OTYyNzk5Njk3OTJcIn0gb3B0aW9ucz17eyBjYXJkczogJ2hpZGRlbicgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODkwNzMzNzUwNzQ0Njk4ODgwXCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8VHdlZXRFbWJlZCBpZD17XCI4OTA3NDU4NTY2MDA4MDk0NzdcIn0gb3B0aW9ucz17eyBjYXJkczogJ2hpZGRlbicgfX0gLz5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXJcclxuIl19 */\n/*@ sourceURL=components\\twitter.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Twitter);

/***/ }),

/***/ "./components/what-to-expect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\components\\what-to-expect.js";



var WhatToExpect = function WhatToExpect() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-4235853645"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "what-to-expect",
    style: {
      'textAlign': 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-4235853645" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-4235853645" + " " + "title is-2"
  }, "What To Expect")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-4235853645" + " " + "columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-4235853645" + " " + "column "
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-4235853645" + " " + "title is-3"
  }, "Collaborate"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4235853645"
  }, "Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-4235853645" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-4235853645" + " " + "title is-3"
  }, "Create"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-4235853645"
  }, "It\u2019s hard to make time for your projects and even yourself. Get the chance to attend free live classes for various topics, discuss dreams, or even toss around ideas"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-4235853645" + " " + "columns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-4235853645" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-4235853645" + " " + "title is-3"
  }, "Pizza And Beer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4235853645"
  }, "Hey, It\u2019s Hump Day, we\u2019re here to relax, vibe, and even get work done. What\u2019s a mid-week meet-up without a cold brew and not having to worry about dinner plans. Plain and simple! ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-4235853645" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-4235853645" + " " + "title is-3"
  }, "On Your Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-4235853645"
  }, "There is no commitment necessary, Hump Days should flow, and that\u2019s just how it goes. We are located in Over The Rhine and Logan Square, in close proximity to many popular local bars and night clubs. Both cities provide great restaurants, nightlife, and scenery. Plus there's a short drive from wherever you may be traveling.  "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4235853645",
    css: "#what-to-expect.jsx-4235853645{text-align:center;background-color:white;}.elevator.jsx-4235853645{text-align:center;}.title.jsx-4235853645{font-weight:bold;text-align:center;}.img.jsx-4235853645{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHdoYXQtdG8tZXhwZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHMkIsQUFJQSxBQUdELEFBSUosYUFDSyxJQUpBLENBUEssQUFJekIsYUFRQSxJQUpBLE1BUEEiLCJmaWxlIjoiY29tcG9uZW50c1xcd2hhdC10by1leHBlY3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx0aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV2hhdFRvRXhwZWN0ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgPGRpdiBpZD1cIndoYXQtdG8tZXhwZWN0XCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPldoYXQgVG8gRXhwZWN0PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+Q29sbGFib3JhdGU8L2gzPlxyXG4gICAgICAgIDxwPkNvbm5lY3Qgd2l0aCBvdGhlciBhbWJpdGlvdXMgaW5kaXZpZHVhbHMgaW4gYSB2YXJpZXR5IG9mIGRpZmZlcmVudCBmaWVsZHMuIEdhaW4gYWNjZXNzIHRvIG90aGVyIHBlcnNwZWN0aXZlcyBhbmQgYnJhaW5zdG9ybSBmb3IgeW91ciBwYXNzaW9uIHByb2plY3RzLiA5LzEwIHRoZXJlIGlzIHNvbWVvbmUgYXZhaWxhYmxlIHdobyBoYXMgaGFkIHNvbWUgc2tpbiBpbiB0aGUgZmllbGQsIG5vIGNvc3QgdG8geW91LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5DcmVhdGU8L2gzPlxyXG4gICAgICAgIDxwPkl04oCZcyBoYXJkIHRvIG1ha2UgdGltZSBmb3IgeW91ciBwcm9qZWN0cyBhbmQgZXZlbiB5b3Vyc2VsZi4gR2V0IHRoZSBjaGFuY2UgdG8gYXR0ZW5kIGZyZWUgbGl2ZSBjbGFzc2VzIGZvciB2YXJpb3VzIHRvcGljcywgZGlzY3VzcyBkcmVhbXMsIG9yIGV2ZW4gdG9zcyBhcm91bmQgaWRlYXNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UGl6emEgQW5kIEJlZXI8L2gzPlxyXG4gICAgICAgIDxwPkhleSwgSXTigJlzIEh1bXAgRGF5LCB3ZeKAmXJlIGhlcmUgdG8gcmVsYXgsIHZpYmUsIGFuZCBldmVuIGdldCB3b3JrIGRvbmUuIFdoYXTigJlzIGEgbWlkLXdlZWsgbWVldC11cCB3aXRob3V0IGEgY29sZCBicmV3IGFuZCBub3QgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IGRpbm5lciBwbGFucy4gUGxhaW4gYW5kIHNpbXBsZSEgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk9uIFlvdXIgVGltZTwvaDM+XHJcbiAgICAgICAgPHA+VGhlcmUgaXMgbm8gY29tbWl0bWVudCBuZWNlc3NhcnksIEh1bXAgRGF5cyBzaG91bGQgZmxvdywgYW5kIHRoYXTigJlzIGp1c3QgaG93IGl0IGdvZXMuIFdlIGFyZSBsb2NhdGVkIGluIE92ZXIgVGhlIFJoaW5lIGFuZCBMb2dhbiBTcXVhcmUsIGluIGNsb3NlIHByb3hpbWl0eSB0byBtYW55IHBvcHVsYXIgbG9jYWwgYmFycyBhbmQgbmlnaHQgY2x1YnMuIEJvdGggY2l0aWVzIHByb3ZpZGUgZ3JlYXQgcmVzdGF1cmFudHMsIG5pZ2h0bGlmZSwgYW5kIHNjZW5lcnkuIFBsdXMgdGhlcmUncyBhIHNob3J0IGRyaXZlIGZyb20gd2hlcmV2ZXIgeW91IG1heSBiZSB0cmF2ZWxpbmcuICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICN3aGF0LXRvLWV4cGVjdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbjwvZGl2PiAgICBcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hhdFRvRXhwZWN0XHJcbiJdfQ== */\n/*@ sourceURL=components\\what-to-expect.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (WhatToExpect);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form__ = __webpack_require__("./components/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_organizers__ = __webpack_require__("./components/organizers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_location__ = __webpack_require__("./components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_location_chi__ = __webpack_require__("./components/location-chi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_what_to_expect__ = __webpack_require__("./components/what-to-expect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_description__ = __webpack_require__("./components/description.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_group_banner__ = __webpack_require__("./components/group-banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tagline__ = __webpack_require__("./components/tagline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_twitter__ = __webpack_require__("./components/twitter.js");
var _jsxFileName = "C:\\Users\\Gil B\\src\\the-workflow-wednesday\\pages\\index.js";








{
  /* import Agenda from '../components/agenda'*/
}






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_tagline__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_group_banner__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_description__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_twitter__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_form__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_what_to_expect__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_location__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_location_chi__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_organizers__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-typekit":
/***/ (function(module, exports) {

module.exports = require("react-typekit");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map