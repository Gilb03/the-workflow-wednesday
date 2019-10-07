module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/description.js":
/*!***********************************!*\
  !*** ./components/description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Description = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    'backgroundColor': '#282828'
  },
  className: "jsx-2932254444" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2932254444" + " " + "elevator columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2932254444" + " " + "column is-6 is-offset-3"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-2932254444" + " " + "title is-4"
}, "CREATOR | TECH CONSULTANT | MARKETER  "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2932254444"
}, ".elevator.jsx-2932254444{text-align:center;color:white;}.title.jsx-2932254444{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9kZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHMkIsQUFJTixZQUNLLE1BSkwsV0FLZCxDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9kZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnIzI4MjgyOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPkNSRUFUT1IgfCBURUNIIENPTlNVTFRBTlQgfCBNQVJLRVRFUiAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/description.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "footer",
  className: "jsx-648890430" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-648890430" + " " + "title is-2"
}, "Made with \u2764\uFE0F in the Windy City."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-648890430"
}, "Copyright 2017 \xA9 All Rights Reserved by King Consulting LLC."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "648890430"
}, "#footer.jsx-648890430{background-color:#282828;text-align:center;color:white;}.title.jsx-648890430{color:white;}a.jsx-648890430{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWdCLEFBR2tDLEFBS2IsQUFHRCxZQUZiLEFBR0EsYUFSbUIsa0JBQ0wsWUFDZCIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL2dpbGJlcnRraW5nLmNvbS9wZXJzb25hbC13ZWJzaXRlL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TWFkZSB3aXRoIOKdpO+4jyBpbiB0aGUgV2luZHkgQ2l0eS48L2gyPlxuICAgIDxwPkNvcHlyaWdodCAyMDE3ICZjb3B5OyBBbGwgUmlnaHRzIFJlc2VydmVkIGJ5IEtpbmcgQ29uc3VsdGluZyBMTEMuPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNmb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const SubmitForm = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "signup",
  style: {
    'backgroundColor': '#ffc7a8'
  },
  className: "jsx-3981005454" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3981005454" + " " + "columns is-mobile"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3981005454" + " " + "column is-half is-offset-one-quarter"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-3981005454" + " " + "title is-3 label"
}, "Let's Stay Connected"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
  style: {
    'padding': '3px',
    'textAlign': 'center'
  },
  action: "https://mailchi.mp/250f76ca9d10/signupthe-wrkflw",
  method: "post",
  target: "popupwindow",
  onsubmit: "window.open('https://mailchi.mp/250f76ca9d10/signupthe-wrkflw', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true",
  className: "jsx-3981005454"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3981005454" + " " + "field is-grouped"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3981005454" + " " + "control is-expanded"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
  type: "email",
  name: "email",
  id: "tlemail",
  placeholder: "Your email here",
  className: "jsx-3981005454" + " " + "input"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
  type: "hidden",
  value: "1",
  name: "embed",
  className: "jsx-3981005454"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3981005454" + " " + "control"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
  className: "jsx-3981005454" + " " + "button is-white"
}, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3981005454"
}, ".title.jsx-3981005454{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9mb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHcUIsWUFDTSxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9naWxiZXJ0a2luZy5jb20vcGVyc29uYWwtd2Vic2l0ZS9jb21wb25lbnRzL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdWJtaXRGb3JtID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwic2lnbnVwXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZjN2E4JyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbGFiZWxcIj5MZXQncyBTdGF5IENvbm5lY3RlZDwvaDM+XG4gICAgICAgIDxmb3JtIHN0eWxlPXt7ICdwYWRkaW5nJzogJzNweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBhY3Rpb249XCJodHRwczovL21haWxjaGkubXAvMjUwZjc2Y2E5ZDEwL3NpZ251cHRoZS13cmtmbHdcIiBtZXRob2Q9XCJwb3N0XCIgdGFyZ2V0PVwicG9wdXB3aW5kb3dcIiBvbnN1Ym1pdD1cIndpbmRvdy5vcGVuKCdodHRwczovL21haWxjaGkubXAvMjUwZjc2Y2E5ZDEwL3NpZ251cHRoZS13cmtmbHcnLCAncG9wdXB3aW5kb3cnLCAnc2Nyb2xsYmFycz15ZXMsd2lkdGg9ODAwLGhlaWdodD02MDAnKTtyZXR1cm4gdHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwidGxlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIjFcIiBuYW1lPVwiZW1iZWRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdoaXRlXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEZvcm1cbiJdfQ== */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/form.js */"));

/* harmony default export */ __webpack_exports__["default"] = (SubmitForm);

/***/ }),

/***/ "./components/group-banner.js":
/*!************************************!*\
  !*** ./components/group-banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const GroupBanner = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  style: {
    'display': 'block'
  },
  src: "/static/AnnouncementWRKFLW.mp3",
  class: "thumbnail",
  width: "122",
  height: "190",
  alt: ""
}));

/* harmony default export */ __webpack_exports__["default"] = (GroupBanner);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const linkStyle = {
  marginRight: 15
};

const Header = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2824637286"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2824637286" + " " + "header section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/gil.jpg",
  class: "circular-image",
  width: "422",
  height: "490",
  className: "jsx-2824637286" + " " + "logo"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2824637286"
}, ".logo.jsx-2824637286{margin-bottom:15px;}.title.jsx-2824637286{font-weight:bold;color:#282828;}.header.jsx-2824637286{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBRzRCLEFBR0YsQUFJQyxpQkFISixDQUlTLENBUHpCLFlBSUEsVUFJYyxZQUVkIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBzZWN0aW9uXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2dpbC5qcGdcIiBjbGFzcz1cImNpcmN1bGFyLWltYWdlXCIgd2lkdGg9XCI0MjJcIiBoZWlnaHQ9XCI0OTBcIi8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMjgyODI4O1xuICAgICAgfVxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcblxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typekit */ "react-typekit");
/* harmony import */ var react_typekit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typekit__WEBPACK_IMPORTED_MODULE_3__);





const Layout = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2869033619"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
  className: "jsx-2869033619"
}, 'Workflow Wednesdays'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
  charSet: "utf-8",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.4/react-bootstrap.min.js",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
  src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGUG88YViM2h_rMqA2YWDhitp7GooXQ7g",
  className: "jsx-2869033619"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_typekit__WEBPACK_IMPORTED_MODULE_3___default.a, {
  kitId: "gzc7xiy"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-2869033619"
})), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2869033619"
}, "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUcyQyxrQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9naWxiZXJ0a2luZy5jb20vcGVyc29uYWwtd2Vic2l0ZS9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBUeXBla2l0IGZyb20gJ3JlYWN0LXR5cGVraXQnO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsnV29ya2Zsb3cgV2VkbmVzZGF5cyd9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjQuMy9jc3MvYnVsbWEuY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtYm9vdHN0cmFwLzAuMzIuNC9yZWFjdC1ib290c3RyYXAubWluLmpzXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUNHVUc4OFlWaU0yaF9yTXFBMllXRGhpdHA3R29vWFE3Z1wiPjwvc2NyaXB0PlxuICAgICAgPFR5cGVraXQga2l0SWQ9XCJnemM3eGl5XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cbiAgICB7IGNoaWxkcmVuIH1cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZyYW5rbGluLWdvdGhpYy11cndcIjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Navbar = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  className: "navbar-menu"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-start"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "#portfolio"
}, "Current Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "#socials"
}, "Stay Connected")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-end"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-item"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "field is-separated"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "control"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button is-white",
  href: "#signup"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Sign Up"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-item"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "field is-grouped"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "control"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: "true"
}, `
        {
            .elevator {
              text-align: center;
            }
            #twitter {
                color: #55acee;
                border-color: #55acee;
            }
            #twitter:hover {
                background: #55acee;
                border-color: #55acee;
                color: white;
            }
            .navbar {
              { background-color: #f36d21; }
            }
            .navbar-item {
              { color: white;
              font-weight: bold;
            }
            img {
              height: 250px;
              border-radius: 50%;
            }
        }
      `));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/podcasts.js":
/*!********************************!*\
  !*** ./components/podcasts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Podcasts = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "portfolio",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-3515925609" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-3515925609" + " " + "title is-2"
}, "I Love Podcasts ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609" + " " + "column "
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-3515925609" + " " + "title is-3"
}, "Art picture 1 ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-3515925609" + " " + "title is-3"
}, "Art picture 2 "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3515925609" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-3515925609" + " " + "title is-3"
}, "Art picture 3 "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3515925609"
}, "#portfolio.jsx-3515925609{text-align:center;background-color:white;}.elevator.jsx-3515925609{text-align:center;}.title.jsx-3515925609{font-weight:bold;text-align:center;}.img.jsx-3515925609{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9wb2RjYXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnNCLEFBR2lDLEFBSUEsQUFHRCxBQUlKLGFBQ0ssSUFKQSxDQVBLLEFBSXpCLGFBUUEsSUFKQSxNQVBBIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9wb2RjYXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBvZGNhc3RzID0gKCkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5JIExvdmUgUG9kY2FzdHMgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkFydCBwaWN0dXJlIDEgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5BcnQgcGljdHVyZSAyIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5BcnQgcGljdHVyZSAzIDwvaDM+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNwb3J0Zm9saW8ge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgIFxuICAgICAgKVxuICAgICAgZXhwb3J0IGRlZmF1bHQgUG9kY2FzdHMiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/podcasts.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Podcasts);

/***/ }),

/***/ "./components/portfolio.js":
/*!*********************************!*\
  !*** ./components/portfolio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Portfolio = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "portfolio",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-1176882995" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-1176882995" + " " + "title is-2"
}, " Here's what I'm up to ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "column "
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1176882995" + " " + "title is-3"
}, "Taron Foxworth Consulting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1176882995"
}, "Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1176882995" + " " + "title is-3"
}, "Shoot Your Shot Podcast"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1176882995"
}, "A podcast designed to delve deeper into dating, relationship & gender issues for the millennial in the 21st century. Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1176882995" + " " + "title is-3"
}, "Flowers Consulting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1176882995"
}, "Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1176882995" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1176882995" + " " + "title is-3"
}, "THE WRKFLW"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1176882995"
}, "Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1176882995"
}, "#portfolio.jsx-1176882995{text-align:center;background-color:white;}.elevator.jsx-1176882995{text-align:center;}.title.jsx-1176882995{font-weight:bold;text-align:center;}.img.jsx-1176882995{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQixBQUcyQixBQUlBLEFBR0QsQUFJSixhQUNLLElBSkEsQ0FQSyxBQUl6QixhQVFBLElBSkEsTUFQQSIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL2dpbGJlcnRraW5nLmNvbS9wZXJzb25hbC13ZWJzaXRlL2NvbXBvbmVudHMvcG9ydGZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUG9ydGZvbGlvID0gKCkgPT4gKFxuICA8ZGl2PlxuICA8ZGl2IGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj4gSGVyZSdzIHdoYXQgSSdtIHVwIHRvIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5UYXJvbiBGb3h3b3J0aCBDb25zdWx0aW5nPC9oMz5cbiAgICAgICAgPHA+Q29ubmVjdCB3aXRoIG90aGVyIGFtYml0aW91cyBpbmRpdmlkdWFscyBpbiBhIHZhcmlldHkgb2YgZGlmZmVyZW50IGZpZWxkcy4gXG4gICAgICAgICAgR2FpbiBhY2Nlc3MgdG8gb3RoZXIgcGVyc3BlY3RpdmVzIGFuZCBicmFpbnN0b3JtIGZvciB5b3VyIHBhc3Npb24gcHJvamVjdHMuIFxuICAgICAgICAgIDkvMTAgdGhlcmUgaXMgc29tZW9uZSBhdmFpbGFibGUgd2hvIGhhcyBoYWQgc29tZSBza2luIGluIHRoZSBmaWVsZCwgbm8gY29zdCB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TaG9vdCBZb3VyIFNob3QgUG9kY2FzdDwvaDM+XG4gICAgICAgIDxwPkEgcG9kY2FzdCBkZXNpZ25lZCB0byBkZWx2ZSBkZWVwZXIgaW50byBkYXRpbmcsIHJlbGF0aW9uc2hpcCAmIGdlbmRlciBpc3N1ZXMgZm9yIHRoZSBtaWxsZW5uaWFsIGluIHRoZSAyMXN0IGNlbnR1cnkuXG4gICAgICAgIENvbm5lY3Qgd2l0aCBvdGhlciBhbWJpdGlvdXMgaW5kaXZpZHVhbHMgaW4gYSB2YXJpZXR5IG9mIGRpZmZlcmVudCBmaWVsZHMuIFxuICAgICAgICAgIEdhaW4gYWNjZXNzIHRvIG90aGVyIHBlcnNwZWN0aXZlcyBhbmQgYnJhaW5zdG9ybSBmb3IgeW91ciBwYXNzaW9uIHByb2plY3RzLiBcbiAgICAgICAgICA5LzEwIHRoZXJlIGlzIHNvbWVvbmUgYXZhaWxhYmxlIHdobyBoYXMgaGFkIHNvbWUgc2tpbiBpbiB0aGUgZmllbGQsIG5vIGNvc3QgdG8geW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkZsb3dlcnMgQ29uc3VsdGluZzwvaDM+XG4gICAgICAgIDxwPkNvbm5lY3Qgd2l0aCBvdGhlciBhbWJpdGlvdXMgaW5kaXZpZHVhbHMgaW4gYSB2YXJpZXR5IG9mIGRpZmZlcmVudCBmaWVsZHMuIFxuICAgICAgICAgIEdhaW4gYWNjZXNzIHRvIG90aGVyIHBlcnNwZWN0aXZlcyBhbmQgYnJhaW5zdG9ybSBmb3IgeW91ciBwYXNzaW9uIHByb2plY3RzLiBcbiAgICAgICAgICA5LzEwIHRoZXJlIGlzIHNvbWVvbmUgYXZhaWxhYmxlIHdobyBoYXMgaGFkIHNvbWUgc2tpbiBpbiB0aGUgZmllbGQsIG5vIGNvc3QgdG8geW91LjwvcD5cbiAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlRIRSBXUktGTFc8L2gzPlxuICAgICAgICA8cD5Db25uZWN0IHdpdGggb3RoZXIgYW1iaXRpb3VzIGluZGl2aWR1YWxzIGluIGEgdmFyaWV0eSBvZiBkaWZmZXJlbnQgZmllbGRzLiBcbiAgICAgICAgICBHYWluIGFjY2VzcyB0byBvdGhlciBwZXJzcGVjdGl2ZXMgYW5kIGJyYWluc3Rvcm0gZm9yIHlvdXIgcGFzc2lvbiBwcm9qZWN0cy4gXG4gICAgICAgICAgOS8xMCB0aGVyZSBpcyBzb21lb25lIGF2YWlsYWJsZSB3aG8gaGFzIGhhZCBzb21lIHNraW4gaW4gdGhlIGZpZWxkLCBubyBjb3N0IHRvIHlvdS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjcG9ydGZvbGlvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbjwvZGl2PiAgICBcbilcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/portfolio.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/socials.js":
/*!*******************************!*\
  !*** ./components/socials.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Socials = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "socials",
  style: {
    'backgroundColor': 'white',
    'textAlign': 'center'
  },
  className: "jsx-2115819636" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-2115819636" + " " + "title is-2"
}, "You Should Follow Me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
  className: "jsx-2115819636"
}, "Let's keep in touch, either of these channels work best for me."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2115819636" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2115819636" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://twitter.com/_gilbproducing",
  target: "_blank",
  className: "jsx-2115819636"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/twitter.png",
  alt: "",
  className: "jsx-2115819636"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2115819636" + " " + "title is-5"
}, "twitter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2115819636" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://soundcloud.com/inthesecondshift",
  target: "_blank",
  className: "jsx-2115819636"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/soundcloud.png",
  alt: "",
  className: "jsx-2115819636"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2115819636" + " " + "title is-5"
}, "soundcloud")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2115819636" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.linkedin.com/in/gilbertking/",
  target: "_blank",
  className: "jsx-2115819636"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/linkedin.png",
  alt: "",
  className: "jsx-2115819636"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2115819636" + " " + "title is-5"
}, "linkedin"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2115819636"
}, ".elevator.jsx-2115819636{text-align:center;}.title.jsx-2115819636{font-weight:bold;}img.jsx-2115819636{height:150px;width:150px;margin-bottom:10px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy9zb2NpYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHMkIsQUFHRCxBQUdKLGFBQ0EsSUFIZixDQUhBLE9BT29CLG1CQUNBLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL2dpbGJlcnRraW5nLmNvbS9wZXJzb25hbC13ZWJzaXRlL2NvbXBvbmVudHMvc29jaWFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBTb2NpYWxzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIiBpZD1cInNvY2lhbHNcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Zb3UgU2hvdWxkIEZvbGxvdyBNZTwvaDI+XG4gICAgPGg1PkxldCdzIGtlZXAgaW4gdG91Y2gsIGVpdGhlciBvZiB0aGVzZSBjaGFubmVscyB3b3JrIGJlc3QgZm9yIG1lLjwvaDU+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9fZ2lsYnByb2R1Y2luZ1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL3N0YXRpYy90d2l0dGVyLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPiBcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPnR3aXR0ZXI8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3NvdW5kY2xvdWQuY29tL2ludGhlc2Vjb25kc2hpZnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9zdGF0aWMvc291bmRjbG91ZC5wbmdcIiBhbHQ9XCJcIiAvPjwvYT4gXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5zb3VuZGNsb3VkPC9wPiBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9naWxiZXJ0a2luZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9zdGF0aWMvbGlua2VkaW4ucG5nXCIgYWx0PVwiXCIgLz48L2E+IFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+bGlua2VkaW48L3A+IFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogIDE1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PilcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsc1xuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/socials.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Socials);

/***/ }),

/***/ "./components/tagline.js":
/*!*******************************!*\
  !*** ./components/tagline.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const TagLine = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    'backgroundColor': '#282828'
  },
  className: "jsx-1194038478" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1194038478" + " " + "elevator columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1194038478" + " " + "column is-6 is-offset-3"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-1194038478" + " " + "title is-4"
}, "Hey, I'm Gil B. \uD83D\uDC4B\uD83C\uDFFE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1194038478"
}, "I'm a Northwest Indiana bred, food loving digital consultant who accepts bribes in the form of southern Barbecue"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1194038478"
}, ".elevator.jsx-1194038478{text-align:center;color:white;}.title.jsx-1194038478{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvZ2lsYmVydGtpbmcuY29tL3BlcnNvbmFsLXdlYnNpdGUvY29tcG9uZW50cy90YWdsaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUcyQixBQUlSLFlBQ0ssTUFKSCxXQUtkLENBSkEiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy9naWxiZXJ0a2luZy5jb20vcGVyc29uYWwtd2Vic2l0ZS9jb21wb25lbnRzL3RhZ2xpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUYWdMaW5lID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnIzI4MjgyOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPkhleSwgSSdtIEdpbCBCLiDwn5GL8J+PvjwvaDI+XG4gICAgICAgIDxoMz5JJ20gYSBOb3J0aHdlc3QgSW5kaWFuYSBicmVkLCBmb29kIGxvdmluZyBkaWdpdGFsIGNvbnN1bHRhbnQgXG4gICAgICAgICAgd2hvIGFjY2VwdHMgYnJpYmVzIGluIHRoZSBmb3JtIG9mIHNvdXRoZXJuIEJhcmJlY3VlPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAudGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgVGFnTGluZVxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/gilbertking.com/personal-website/components/tagline.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TagLine);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/socials */ "./components/socials.js");
/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/portfolio */ "./components/portfolio.js");
/* harmony import */ var _components_podcasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/podcasts */ "./components/podcasts.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_group_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/group-banner */ "./components/group-banner.js");
/* harmony import */ var _components_tagline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tagline */ "./components/tagline.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");



 // import Carousel from '../components/carousel'









/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tagline__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_group_banner__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_portfolio__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_podcasts__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_socials__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilbertking/src/gilbertking.com/personal-website/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-typekit":
/*!********************************!*\
  !*** external "react-typekit" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typekit");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map