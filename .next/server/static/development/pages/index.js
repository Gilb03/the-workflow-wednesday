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
}, "CREATION. COMMUNITY. COLLABORATION."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2932254444"
}, ".elevator.jsx-2932254444{text-align:center;color:white;}.title.jsx-2932254444{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUcyQixBQUlOLFlBQ0ssTUFKTCxXQUtkLENBSkEiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5L2NvbXBvbmVudHMvZGVzY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMyODI4MjgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTYgaXMtb2Zmc2V0LTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5DUkVBVElPTi4gQ09NTVVOSVRZLiBDT0xMQUJPUkFUSU9OLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25cbiJdfQ== */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/description.js */"));

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
}, "Made with \u2764\uFE0F in Cincinnati."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-648890430"
}, "Copyright 2017 \xA9 All Rights Reserved by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "http://hill7.org",
  className: "jsx-648890430"
}, "Hillman Accelerator")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "648890430"
}, "#footer.jsx-648890430{background-color:#282828;text-align:center;color:white;}.title.jsx-648890430{color:white;}a.jsx-648890430{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHa0MsQUFLYixBQUdELFlBRmIsQUFHQSxhQVJtQixrQkFDTCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPk1hZGUgd2l0aCDinaTvuI8gaW4gQ2luY2lubmF0aS48L2gyPlxuICAgIDxwPkNvcHlyaWdodCAyMDE3ICZjb3B5OyBBbGwgUmlnaHRzIFJlc2VydmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vaGlsbDcub3JnXCI+SGlsbG1hbiBBY2NlbGVyYXRvcjwvYT48L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI2Zvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/footer.js */"));

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
}, "Stay Connected"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
  style: {
    'padding': '3px',
    'textAlign': 'center'
  },
  action: "https://tinyletter.com/workflow-wednesday",
  method: "post",
  target: "popupwindow",
  onsubmit: "window.open('https://tinyletter.com/workflow-wednesday', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true",
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
}, ".title.jsx-3981005454{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdxQixZQUNNLGtCQUNELGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkvY29tcG9uZW50cy9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3VibWl0Rm9ybSA9ICgpID0+IChcbiAgPGRpdiBpZD1cInNpZ251cFwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnI2ZmYzdhOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGYgaXMtb2Zmc2V0LW9uZS1xdWFydGVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIGxhYmVsXCI+U3RheSBDb25uZWN0ZWQ8L2gzPlxuICAgICAgICA8Zm9ybSBzdHlsZT17eyAncGFkZGluZyc6ICczcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcicgfX0gYWN0aW9uPVwiaHR0cHM6Ly90aW55bGV0dGVyLmNvbS93b3JrZmxvdy13ZWRuZXNkYXlcIiBtZXRob2Q9XCJwb3N0XCIgdGFyZ2V0PVwicG9wdXB3aW5kb3dcIiBvbnN1Ym1pdD1cIndpbmRvdy5vcGVuKCdodHRwczovL3RpbnlsZXR0ZXIuY29tL3dvcmtmbG93LXdlZG5lc2RheScsICdwb3B1cHdpbmRvdycsICdzY3JvbGxiYXJzPXllcyx3aWR0aD04MDAsaGVpZ2h0PTYwMCcpO3JldHVybiB0cnVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2wgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJ0bGVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiMVwiIG5hbWU9XCJlbWJlZFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtd2hpdGVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8cD48bGFiZWwgZm9yPVwidGxlbWFpbFwiPkJlIE5vdGlmaWVkPC9sYWJlbD48L3A+XG4gICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3sgJ3dpZHRoJzogJzE0MHB4JyB9fSBuYW1lPVwiZW1haWxcIiBpZD1cInRsZW1haWxcIiAvPjwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiMVwiIG5hbWU9XCJlbWJlZFwiIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIC8+ICovfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0Rm9ybVxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/form.js */"));

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
  src: "/static/group.jpg",
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
  className: "jsx-4049844003"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4049844003" + " " + "header section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/workflowfinal.jpg",
  alt: "",
  className: "jsx-4049844003" + " " + "logo"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4049844003"
}, ".logo.jsx-4049844003{margin-bottom:15px;}.title.jsx-4049844003{font-weight:bold;color:#282828;}.header.jsx-4049844003{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRCLEFBR0YsQUFJQyxpQkFISixDQUlTLENBUHpCLFlBSUEsVUFJYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIHNlY3Rpb25cIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvd29ya2Zsb3dmaW5hbC5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgey8qIDxwIHN0eWxlPXt7ICdmb250V2VpZ2h0JzogJ2JvbGQnLCAndGV4dC1hbGlnbic6ICdjZW50ZXInIH19PiBFdmVyeSAybmQgYW5kIDR0aCBXZWRuZXNkYXksIGF0IDc6MDBwbSwgd29yayB3aXRoIHVzLjwvcD4gKi99XG4gICAgICB7LyogPHAgc3R5bGU9e3sgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfX0+IENpbmNpbmF0aSwgT2hpbzwvcD4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICA8YSBzdHlsZT17eyd0ZXh0LWFsaWdodCc6ICdjZW50ZXInLCBtYXJnaW46ICdhdXRvJywgZGlzcGxheTogJ2Jsb2NrJywgd2lkdGg6ICcyMDAnfX0gY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVnaXN0ZXI8L2E+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyODI4Mjg7XG4gICAgICB9XG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/header.js */"));

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
}, "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRzJDLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVHlwZWtpdCBmcm9tICdyZWFjdC10eXBla2l0JztcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57J1dvcmtmbG93IFdlZG5lc2RheXMnfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC40LjMvY3NzL2J1bG1hLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWJvb3RzdHJhcC8wLjMyLjQvcmVhY3QtYm9vdHN0cmFwLm1pbi5qc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDR1VHODhZVmlNMmhfck1xQTJZV0RoaXRwN0dvb1hRN2dcIj48L3NjcmlwdD5cbiAgICAgIDxUeXBla2l0IGtpdElkPVwiZ3pjN3hpeVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogXCJmcmFua2xpbi1nb3RoaWMtdXJ3XCI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/location-chi.js":
/*!************************************!*\
  !*** ./components/location-chi.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





const GettingStartedGoogleMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withGoogleMap"])(props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
  ref: props.onMapLoad,
  defaultZoom: 15,
  defaultCenter: {
    lat: 41.9320583,
    lng: -87.7158
  },
  onClick: props.onMapClick
}, props.markers.map(marker => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["Marker"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
  onRightClick: () => props.onMarkerRightClick(marker)
})))));

const LocationChi = () => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  id: "location",
  style: {
    'backgroundColor': 'white',
    'textAlign': 'center'
  },
  className: "jsx-4212282735" + " " + "section location"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
  className: "jsx-4212282735" + " " + "title is-2"
}), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "block"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
  className: "jsx-4212282735"
}, "The Second Shift"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
  className: "jsx-4212282735"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  class: "btn btn-primary",
  href: "https://bit.ly/2OdB3ji",
  target: "_blank",
  className: "jsx-4212282735"
}, "Chicago Registration")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  target: "_blank",
  style: {
    "marginRight": "spacing + 'em'",
    "color": "black"
  },
  href: "https://goo.gl/maps/i8fhL65pXC22",
  className: "jsx-4212282735"
}, "3432 W Diversey Ave., Chicago, IL 60647"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
  src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7eQqc3TND4gRAOH4kESIeYs&key=AIzaSyAwzu9UHFXD_TG3k6u8VZUxyEEatg-AvBw",
  width: "600",
  height: "450",
  frameBorder: "0",
  style: {
    border: 0
  },
  allowFullScreen: true,
  className: "jsx-4212282735"
})))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "4212282735"
}, ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2xvY2F0aW9uLWNoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBRzJCLEFBR0osQUFLRixZQUNLLEVBTEUsSUFIckIsV0FTQSxJQUxtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5L2NvbXBvbmVudHMvbG9jYXRpb24tY2hpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEdldHRpbmdTdGFydGVkR29vZ2xlTWFwID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXG4gIDxHb29nbGVNYXBcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cbiAgICBkZWZhdWx0Wm9vbT17MTV9XG4gICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDQxLjkzMjA1ODMsIGxuZzogLTg3LjcxNTggfX1cbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxuICA+XG4gICAge3Byb3BzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoXG4gICAgICA8TWFya2VyXG4gICAgICAgIHsuLi5tYXJrZXJ9XG4gICAgICAgIG9uUmlnaHRDbGljaz17KCkgPT4gcHJvcHMub25NYXJrZXJSaWdodENsaWNrKG1hcmtlcil9XG4gICAgICAvPlxuICAgICkpfVxuICA8L0dvb2dsZU1hcD5cbikpO1xuXG5jb25zdCBMb2NhdGlvbkNoaSA9ICgpID0+IChcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj48L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9mcmVlZG9tLWNlbnRlci5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk5hdGlvbmFsIFVuZGVyZ3JvdW5kIFJhaWxyb2FkIEZyZWVkb20gQ2VudGVyPC9oMz5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICA8aDQ+VGhlIFNlY29uZCBTaGlmdDwvaDQ+XG4gICAgICAgICAgPGg0PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vYml0Lmx5LzJPZEIzamlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaGljYWdvIFJlZ2lzdHJhdGlvbjwvYT48L2g0PlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwibWFyZ2luUmlnaHRcIjpcInNwYWNpbmcgKyAnZW0nXCIsXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvaThmaEw2NXBYQzIyXCI+MzQzMiBXIERpdmVyc2V5IEF2ZS4sIENoaWNhZ28sIElMIDYwNjQ3PC9hPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6Q2hJSjdlUXFjM1RORDRnUkFPSDRrRVNJZVlzJmtleT1BSXphU3lBd3p1OVVIRlhEX1RHM2s2dThWWlV4eUVFYXRnLUF2QndcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIGZyYW1lQm9yZGVyPVwiMFwiIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25DaGkiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/location-chi.js */"));

/* harmony default export */ __webpack_exports__["default"] = (LocationChi);

/***/ }),

/***/ "./components/location.js":
/*!********************************!*\
  !*** ./components/location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





const GettingStartedGoogleMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withGoogleMap"])(props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
  ref: props.onMapLoad,
  defaultZoom: 15,
  defaultCenter: {
    lat: 39.0976281,
    lng: -84.513433
  },
  onClick: props.onMapClick
}, props.markers.map(marker => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["Marker"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
  onRightClick: () => props.onMarkerRightClick(marker)
})))));

const Location = () => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  id: "location",
  style: {
    'backgroundColor': 'white',
    'textAlign': 'center'
  },
  className: "jsx-4212282735" + " " + "section location"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
  className: "jsx-4212282735" + " " + "title is-2"
}, "Locations"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: "jsx-4212282735" + " " + "block"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
  className: "jsx-4212282735"
}, "Union Hall"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
  className: "jsx-4212282735"
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  class: "btn btn-primary",
  href: "https://bit.ly/2OdB3ji",
  target: "_blank",
  className: "jsx-4212282735"
}, "Cincinnati Registration")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  target: "_blank",
  style: {
    "color": "black"
  },
  href: "https://goo.gl/maps/eWq3GswALPq",
  className: "jsx-4212282735"
}, "1311 Vine St, Cincinnati, OH 45202"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71014.21228393703!2d-84.53633066674713!3d39.16517939131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd94c8f02b%3A0x3caee5bfc65866b3!2sUnion+Hall!5e0!3m2!1sen!2sus!4v1521638612498",
  width: "600",
  height: "450",
  frameBorder: "0",
  style: {
    border: 0
  },
  allowFullScreen: true,
  className: "jsx-4212282735"
})))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "4212282735"
}, ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEZ0IsQUFHMkIsQUFHSixBQUtGLFlBQ0ssRUFMRSxJQUhyQixXQVNBLElBTG1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkvY29tcG9uZW50cy9sb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhHb29nbGVNYXAsIEdvb2dsZU1hcCwgTWFya2VyIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBHZXR0aW5nU3RhcnRlZEdvb2dsZU1hcCA9IHdpdGhHb29nbGVNYXAocHJvcHMgPT4gKFxuICA8R29vZ2xlTWFwXG4gICAgcmVmPXtwcm9wcy5vbk1hcExvYWR9XG4gICAgZGVmYXVsdFpvb209ezE1fVxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiAzOS4wOTc2MjgxLCBsbmc6IC04NC41MTM0MzMgfX1cbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxuICA+XG4gICAge3Byb3BzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoXG4gICAgICA8TWFya2VyXG4gICAgICAgIHsuLi5tYXJrZXJ9XG4gICAgICAgIG9uUmlnaHRDbGljaz17KCkgPT4gcHJvcHMub25NYXJrZXJSaWdodENsaWNrKG1hcmtlcil9XG4gICAgICAvPlxuICAgICkpfVxuICA8L0dvb2dsZU1hcD5cbikpO1xuXG5jb25zdCBMb2NhdGlvbiA9ICgpID0+IChcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Mb2NhdGlvbnM8L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9mcmVlZG9tLWNlbnRlci5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk5hdGlvbmFsIFVuZGVyZ3JvdW5kIFJhaWxyb2FkIEZyZWVkb20gQ2VudGVyPC9oMz5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICA8aDM+VW5pb24gSGFsbDwvaDM+XG4gICAgICAgICAgPGg0PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vYml0Lmx5LzJPZEIzamlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaW5jaW5uYXRpIFJlZ2lzdHJhdGlvbjwvYT48L2g0PlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwiY29sb3JcIjogXCJibGFja1wiIH19IGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2VXcTNHc3dBTFBxXCI+MTMxMSBWaW5lIFN0LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cbiAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDcxMDE0LjIxMjI4MzkzNzAzITJkLTg0LjUzNjMzMDY2Njc0NzEzITNkMzkuMTY1MTc5MzkxMzE1ODghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4NDFiM2ZkOTRjOGYwMmIlM0EweDNjYWVlNWJmYzY1ODY2YjMhMnNVbmlvbitIYWxsITVlMCEzbTIhMXNlbiEyc3VzITR2MTUyMTYzODYxMjQ5OFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVCb3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy00IGlzLW9mZnNldC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkRpcmVjdGlvbnM8L2gzPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChTb3VuZGJvdW5kKTwvaDQ+XG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKSBvIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpIG8gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKE5vcnRoYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxIFNvdXRoIHRvIHRoZSBUSElSRCBTVFJFRVQgZXhpdCAoeW91IHdpbGwgbmVlZCB0byBiZSBpbiB0aGUgZmFyIGxlZnQgbGFuZSkuIEdvIHN0cmFpZ2h0IG9uIFRoaXJkIFN0cmVldCwgdHVybiBsZWZ0IGF0IHRoZSA0dGggdHJhZmZpYyBsaWdodCBvbnRvIFdBTE5VVC4gQXQgdGhlIGZpcnN0IGxpZ2h0IHR1cm4gbGVmdCBvbnRvIFNFQ09ORCBTVFJFRVQuIEF0IHRoZSBmaXJzdCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCk8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03NSBOb3J0aCAoU291dGhib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzUgU291dGggdG8gQ2luY2lubmF0aSwgT2hpbyBhbmQgZXhpdCBhdCBTRUNPTkQgU1RSRUVUIERvd250b3duLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKFNvdW5kYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPiBUYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKS4gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkuIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25cbiJdfQ== */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/location.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Location);

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
  href: "#what-to-expect"
}, "What To Expect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "#location"
}, "Locations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "#organizers"
}, "Organizers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navbar-end"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "https://www.instagram.com/hill7org/",
  target: "_blank"
}, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "https://www.facebook.com/hill7org/",
  target: "_blank"
}, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "navbar-item",
  href: "https://twitter.com/hill7org",
  target: "_blank"
}, "Twitter")
/* grouped */
), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  id: "twitter",
  className: "button is-white",
  "data-social-network": "Twitter",
  "data-social-action": "tweet",
  "data-social-target": "https://fridays.hill7.org",
  target: "_blank",
  href: "https://twitter.com/intent/tweet?text=#HillmanFridays"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fa fa-twitter"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tweet")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
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

/***/ "./components/organizers.js":
/*!**********************************!*\
  !*** ./components/organizers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Organizers = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "organizers",
  style: {
    'backgroundColor': 'white',
    'textAlign': 'center'
  },
  className: "jsx-2813563257" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-2813563257" + " " + "title is-2"
}, "Organizers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2813563257" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2813563257" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://twitter.com/Queeeeel__",
  className: "jsx-2813563257"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/raquel.jpg",
  alt: "",
  className: "jsx-2813563257"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2813563257" + " " + "title is-5"
}, "Raquel Robinson")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2813563257" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://twitter.com/_gilbproducing",
  className: "jsx-2813563257"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/gil.jpg",
  alt: "",
  className: "jsx-2813563257"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2813563257" + " " + "title is-5"
}, "Gilbert King")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2813563257" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.linkedin.com/in/cyrinathomas/",
  className: "jsx-2813563257"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "/static/Cyrina.jpg",
  alt: "",
  className: "jsx-2813563257"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2813563257" + " " + "title is-5"
}, "Cyrina Thomas"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2813563257"
}, ".elevator.jsx-2813563257{text-align:center;}.title.jsx-2813563257{font-weight:bold;}img.jsx-2813563257{height:250px;width:250px;margin-bottom:10px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL29yZ2FuaXplcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUcyQixBQUdELEFBR0osYUFDQSxJQUhmLENBSEEsT0FPb0IsbUJBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL29yZ2FuaXplcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgY29uc3QgT3JnYW5pemVycyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJvcmdhbml6ZXJzXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+T3JnYW5pemVyczwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1F1ZWVlZWVsX19cIj48aW1nIHNyYz1cIi9zdGF0aWMvcmFxdWVsLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+UmFxdWVsIFJvYmluc29uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9fZ2lsYnByb2R1Y2luZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9naWwuanBnXCIgYWx0PVwiXCIgLz48L2E+IFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+R2lsYmVydCBLaW5nPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2N5cmluYXRob21hcy9cIj48aW1nIHNyYz1cIi9zdGF0aWMvQ3lyaW5hLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPiBcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPkN5cmluYSBUaG9tYXM8L3A+IFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB3aWR0aDogIDI1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PilcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemVyc1xuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/organizers.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Organizers);

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
  className: "jsx-1855462676" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1855462676" + " " + "elevator columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1855462676" + " " + "column is-6 is-offset-3"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-1855462676" + " " + "title is-4"
}, "Every 2nd and 4th Wednesday, at 7pm, work with us."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1855462676"
}, ".elevator.jsx-1855462676{text-align:center;color:white;}.title.jsx-1855462676{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL3RhZ2xpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzJCLEFBSVIsWUFDSyxNQUpILFdBS2QsQ0FKQSIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkvY29tcG9uZW50cy90YWdsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFnTGluZSA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMyODI4MjgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTYgaXMtb2Zmc2V0LTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5FdmVyeSAybmQgYW5kIDR0aCBXZWRuZXNkYXksIGF0IDdwbSwgd29yayB3aXRoIHVzLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUYWdMaW5lXG4iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/tagline.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TagLine);

/***/ }),

/***/ "./components/tweet-embed.js":
/*!***********************************!*\
  !*** ./components/tweet-embed.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement('script');
    s.setAttribute('src', src);

    s.onload = () => callbacks.forEach(cb => cb());

    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

class TweetEmbed extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    const renderTweet = () => {
      window.twttr.ready().then(({
        widgets
      }) => {
        const {
          options,
          onTweetLoadSuccess,
          onTweetLoadError
        } = this.props;
        widgets.createTweetEmbed(this.props.id, this._div, options).then(onTweetLoadSuccess).catch(onTweetLoadError);
      });
    };

    if (!window.twttr) {
      const isLocal = window.location.protocol.indexOf('file') >= 0;
      const protocol = isLocal ? this.props.protocol : '';
      addScript(`${protocol}//platform.twitter.com/widgets.js`, renderTweet);
    } else {
      renderTweet();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className,
      ref: c => {
        this._div = c;
      }
    });
  }

}

TweetEmbed.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  protocol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onTweetLoadSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTweetLoadError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
TweetEmbed.defaultProps = {
  protocol: 'https:',
  options: {},
  className: null
};
/* harmony default export */ __webpack_exports__["default"] = (TweetEmbed);

/***/ }),

/***/ "./components/twitter.js":
/*!*******************************!*\
  !*** ./components/twitter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tweet_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet-embed */ "./components/tweet-embed.js");




const Twitter = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    'backgroundColor': 'white'
  },
  className: "jsx-3852583590" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3852583590" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3852583590" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tweet_embed__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "890734688138141697",
  options: {
    cards: 'hidden'
  }
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3852583590" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tweet_embed__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "883507696279969792",
  options: {
    cards: 'hidden'
  }
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3852583590" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tweet_embed__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: "890733750744698880",
  options: {
    cards: 'hidden'
  }
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3852583590"
}, ".elevator.jsx-3852583590{text-align:center;color:white;}.title.jsx-3852583590{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL3R3aXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUcyQixBQUtyQixZQUFDLE1BSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkvY29tcG9uZW50cy90d2l0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWV0RW1iZWQgZnJvbSAnLi90d2VldC1lbWJlZCc7XG5cbmNvbnN0IFR3aXR0ZXIgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODkwNzM0Njg4MTM4MTQxNjk3XCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxUd2VldEVtYmVkIGlkPXtcIjg4MzUwNzY5NjI3OTk2OTc5MlwifSBvcHRpb25zPXt7IGNhcmRzOiAnaGlkZGVuJyB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8VHdlZXRFbWJlZCBpZD17XCI4OTA3MzM3NTA3NDQ2OTg4ODBcIn0gb3B0aW9ucz17eyBjYXJkczogJ2hpZGRlbicgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxUd2VldEVtYmVkIGlkPXtcIjg5MDc0NTg1NjYwMDgwOTQ3N1wifSBvcHRpb25zPXt7IGNhcmRzOiAnaGlkZGVuJyB9fSAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/twitter.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ }),

/***/ "./components/what-to-expect.js":
/*!**************************************!*\
  !*** ./components/what-to-expect.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const WhatToExpect = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "what-to-expect",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-4235853645" + " " + "section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-4235853645" + " " + "title is-2"
}, "What To Expect")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "column "
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4235853645" + " " + "title is-3"
}, "Collaborate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-4235853645"
}, "Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4235853645" + " " + "title is-3"
}, "Create"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-4235853645"
}, "It\u2019s hard to make time for your projects and even yourself. Get the chance to attend free live classes for various topics, discuss dreams, or even toss around ideas"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "columns"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4235853645" + " " + "title is-3"
}, "Pizza And Beer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-4235853645"
}, "Hey, It\u2019s Hump Day, we\u2019re here to relax, vibe, and even get work done. What\u2019s a mid-week meet-up without a cold brew and not having to worry about dinner plans. Plain and simple! ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4235853645" + " " + "column"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4235853645" + " " + "title is-3"
}, "On Your Time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-4235853645"
}, "There is no commitment necessary, Hump Days should flow, and that\u2019s just how it goes. We are located in Over The Rhine and Logan Square, in close proximity to many popular local bars and night clubs. Both cities provide great restaurants, nightlife, and scenery. Plus there's a short drive from wherever you may be traveling.  "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4235853645"
}, "#what-to-expect.jsx-4235853645{text-align:center;background-color:white;}.elevator.jsx-4235853645{text-align:center;}.title.jsx-4235853645{font-weight:bold;text-align:center;}.img.jsx-4235853645{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheS9jb21wb25lbnRzL3doYXQtdG8tZXhwZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHMkIsQUFJQSxBQUdELEFBSUosYUFDSyxJQUpBLENBUEssQUFJekIsYUFRQSxJQUpBLE1BUEEiLCJmaWxlIjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5L2NvbXBvbmVudHMvd2hhdC10by1leHBlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXaGF0VG9FeHBlY3QgPSAoKSA9PiAoXG4gIDxkaXY+XG4gIDxkaXYgaWQ9XCJ3aGF0LXRvLWV4cGVjdFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIiBzdHlsZT17eyd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+V2hhdCBUbyBFeHBlY3Q8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+Q29sbGFib3JhdGU8L2gzPlxuICAgICAgICA8cD5Db25uZWN0IHdpdGggb3RoZXIgYW1iaXRpb3VzIGluZGl2aWR1YWxzIGluIGEgdmFyaWV0eSBvZiBkaWZmZXJlbnQgZmllbGRzLiBHYWluIGFjY2VzcyB0byBvdGhlciBwZXJzcGVjdGl2ZXMgYW5kIGJyYWluc3Rvcm0gZm9yIHlvdXIgcGFzc2lvbiBwcm9qZWN0cy4gOS8xMCB0aGVyZSBpcyBzb21lb25lIGF2YWlsYWJsZSB3aG8gaGFzIGhhZCBzb21lIHNraW4gaW4gdGhlIGZpZWxkLCBubyBjb3N0IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkNyZWF0ZTwvaDM+XG4gICAgICAgIDxwPkl04oCZcyBoYXJkIHRvIG1ha2UgdGltZSBmb3IgeW91ciBwcm9qZWN0cyBhbmQgZXZlbiB5b3Vyc2VsZi4gR2V0IHRoZSBjaGFuY2UgdG8gYXR0ZW5kIGZyZWUgbGl2ZSBjbGFzc2VzIGZvciB2YXJpb3VzIHRvcGljcywgZGlzY3VzcyBkcmVhbXMsIG9yIGV2ZW4gdG9zcyBhcm91bmQgaWRlYXNcbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UGl6emEgQW5kIEJlZXI8L2gzPlxuICAgICAgICA8cD5IZXksIEl04oCZcyBIdW1wIERheSwgd2XigJlyZSBoZXJlIHRvIHJlbGF4LCB2aWJlLCBhbmQgZXZlbiBnZXQgd29yayBkb25lLiBXaGF04oCZcyBhIG1pZC13ZWVrIG1lZXQtdXAgd2l0aG91dCBhIGNvbGQgYnJldyBhbmQgbm90IGhhdmluZyB0byB3b3JyeSBhYm91dCBkaW5uZXIgcGxhbnMuIFBsYWluIGFuZCBzaW1wbGUhIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5PbiBZb3VyIFRpbWU8L2gzPlxuICAgICAgICA8cD5UaGVyZSBpcyBubyBjb21taXRtZW50IG5lY2Vzc2FyeSwgSHVtcCBEYXlzIHNob3VsZCBmbG93LCBhbmQgdGhhdOKAmXMganVzdCBob3cgaXQgZ29lcy4gV2UgYXJlIGxvY2F0ZWQgaW4gT3ZlciBUaGUgUmhpbmUgYW5kIExvZ2FuIFNxdWFyZSwgaW4gY2xvc2UgcHJveGltaXR5IHRvIG1hbnkgcG9wdWxhciBsb2NhbCBiYXJzIGFuZCBuaWdodCBjbHVicy4gQm90aCBjaXRpZXMgcHJvdmlkZSBncmVhdCByZXN0YXVyYW50cywgbmlnaHRsaWZlLCBhbmQgc2NlbmVyeS4gUGx1cyB0aGVyZSdzIGEgc2hvcnQgZHJpdmUgZnJvbSB3aGVyZXZlciB5b3UgbWF5IGJlIHRyYXZlbGluZy4gIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICN3aGF0LXRvLWV4cGVjdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmltZyB7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG48L2Rpdj4gICAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRUb0V4cGVjdFxuIl19 */\n/*@ sourceURL=/Users/gilbertking/src/the-workflow-wednesday/components/what-to-expect.js */"));

/* harmony default export */ __webpack_exports__["default"] = (WhatToExpect);

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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
/* harmony import */ var _components_organizers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organizers */ "./components/organizers.js");
/* harmony import */ var _components_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/location */ "./components/location.js");
/* harmony import */ var _components_location_chi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/location-chi */ "./components/location-chi.js");
/* harmony import */ var _components_what_to_expect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/what-to-expect */ "./components/what-to-expect.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_group_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/group-banner */ "./components/group-banner.js");
/* harmony import */ var _components_tagline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/tagline */ "./components/tagline.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/twitter */ "./components/twitter.js");








{
  /* import Agenda from '../components/agenda'*/
}






/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tagline__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_group_banner__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_description__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_twitter__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_what_to_expect__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_location__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_location_chi__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organizers__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], null)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilbertking/src/the-workflow-wednesday/pages/index.js */"./pages/index.js");


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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

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