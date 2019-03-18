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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\description.js";



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
    css: ".elevator.jsx-2932254444{text-align:center;color:white;}.title.jsx-2932254444{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGRlc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUcyQixBQUlOLFlBQ0ssTUFKTCxXQUtkLENBSkEiLCJmaWxlIjoiY29tcG9uZW50c1xcZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx3b3JrZmxvdy13ZWRuZXNkYXlcXGhpbGxtYW4tZnJpZGF5cyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMjgyODI4JyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+Q1JFQVRJT04uIENPTU1VTklUWS4gQ09MTEFCT1JBVElPTi48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25cclxuIl19 */\n/*@ sourceURL=components\\description.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\footer.js";



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
    css: "#footer.jsx-648890430{background-color:#282828;text-align:center;color:white;}.title.jsx-648890430{color:white;}a.jsx-648890430{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHa0MsQUFLYixBQUdELFlBRmIsQUFHQSxhQVJtQixrQkFDTCxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHdvcmtmbG93LXdlZG5lc2RheVxcaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPk1hZGUgd2l0aCDinaTvuI8gaW4gQ2luY2lubmF0aS48L2gyPlxyXG4gICAgPHA+Q29weXJpZ2h0IDIwMTcgJmNvcHk7IEFsbCBSaWdodHMgUmVzZXJ2ZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9oaWxsNy5vcmdcIj5IaWxsbWFuIEFjY2VsZXJhdG9yPC9hPjwvcD5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI2Zvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdfQ== */\n/*@ sourceURL=components\\footer.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\form.js";



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
    css: ".title.jsx-3981005454{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdxQixZQUNNLGtCQUNELGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxmb3JtLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdWJtaXRGb3JtID0gKCkgPT4gKFxyXG4gIDxkaXYgaWQ9XCJzaWdudXBcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyNmZmM3YTgnIH19IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBsYWJlbFwiPlN0YXkgQ29ubmVjdGVkPC9oMz5cclxuICAgICAgICA8Zm9ybSBzdHlsZT17eyAncGFkZGluZyc6ICczcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcicgfX0gYWN0aW9uPVwiaHR0cHM6Ly90aW55bGV0dGVyLmNvbS9oaWxsbWFuLWZyaWRheVwiIG1ldGhvZD1cInBvc3RcIiB0YXJnZXQ9XCJwb3B1cHdpbmRvd1wiIG9uc3VibWl0PVwid2luZG93Lm9wZW4oJ2h0dHBzOi8vdGlueWxldHRlci5jb20vaGlsbG1hbi1mcmlkYXknLCAncG9wdXB3aW5kb3cnLCAnc2Nyb2xsYmFycz15ZXMsd2lkdGg9ODAwLGhlaWdodD02MDAnKTtyZXR1cm4gdHJ1ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwidGxlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiMVwiIG5hbWU9XCJlbWJlZFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy13aGl0ZVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxwPjxsYWJlbCBmb3I9XCJ0bGVtYWlsXCI+QmUgTm90aWZpZWQ8L2xhYmVsPjwvcD5cclxuICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7ICd3aWR0aCc6ICcxNDBweCcgfX0gbmFtZT1cImVtYWlsXCIgaWQ9XCJ0bGVtYWlsXCIgLz48L3A+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiMVwiIG5hbWU9XCJlbWJlZFwiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz4gKi99XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VibWl0Rm9ybVxyXG4iXX0= */\n/*@ sourceURL=components\\form.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SubmitForm);

/***/ }),

/***/ "./components/group-banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\group-banner.js";


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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\header.js";



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
    css: ".logo.jsx-4049844003{margin-bottom:15px;}.title.jsx-4049844003{font-weight:bold;color:#282828;}.header.jsx-4049844003{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRCLEFBR0YsQUFJQyxpQkFISixDQUlTLENBUHpCLFlBSUEsVUFJYyxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHdvcmtmbG93LXdlZG5lc2RheVxcaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIHNlY3Rpb25cIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy93b3JrZmxvd2ZpbmFsLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIHsvKiA8cCBzdHlsZT17eyAnZm9udFdlaWdodCc6ICdib2xkJywgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9fT4gRXZlcnkgMm5kIGFuZCA0dGggV2VkbmVzZGF5LCBhdCA3OjAwcG0sIHdvcmsgd2l0aCB1cy48L3A+ICovfVxyXG4gICAgICB7LyogPHAgc3R5bGU9e3sgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfX0+IENpbmNpbmF0aSwgT2hpbzwvcD4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGlzLW9mZnNldC1vbmUtcXVhcnRlclwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e3sndGV4dC1hbGlnaHQnOiAnY2VudGVyJywgbWFyZ2luOiAnYXV0bycsIGRpc3BsYXk6ICdibG9jaycsIHdpZHRoOiAnMjAwJ319IGNsYXNzTmFtZT1cImJ1dHRvblwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMjgyODI4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=components\\header.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\layout.js";





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
    css: "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRzJDLGtDQUNwQyIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx3b3JrZmxvdy13ZWRuZXNkYXlcXGhpbGxtYW4tZnJpZGF5cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFR5cGVraXQgZnJvbSAncmVhY3QtdHlwZWtpdCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnsnV29ya2Zsb3cgV2VkbmVzZGF5cyd9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC40LjMvY3NzL2J1bG1hLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtYm9vdHN0cmFwLzAuMzIuNC9yZWFjdC1ib290c3RyYXAubWluLmpzXCIvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDR1VHODhZVmlNMmhfck1xQTJZV0RoaXRwN0dvb1hRN2dcIj48L3NjcmlwdD5cclxuICAgICAgPFR5cGVraXQga2l0SWQ9XCJnemM3eGl5XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7IGNoaWxkcmVuIH1cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZyYW5rbGluLWdvdGhpYy11cndcIjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=components\\layout.js */"
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
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
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
    href: "https://www.facebook.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, "Chicago Registration goes here")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
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
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLWNoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBRzJCLEFBR0osQUFLRixZQUNLLEVBTEUsSUFIckIsV0FTQSxJQUxtQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50c1xcbG9jYXRpb24tY2hpLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcclxuICA8R29vZ2xlTWFwXHJcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cclxuICAgIGRlZmF1bHRab29tPXsxNX1cclxuICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiA0MS45MzIwNTgzLCBsbmc6IC04Ny43MTU4IH19XHJcbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxyXG4gID5cclxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAgey4uLm1hcmtlcn1cclxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Hb29nbGVNYXA+XHJcbikpO1xyXG5cclxuY29uc3QgTG9jYXRpb25DaGkgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPjwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgIDxoND5TZWNvbmQgU2hpZnQgQ28tV29ya2luZzwvaDQ+XHJcbiAgICAgICAgICA8aDQ+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj5DaGljYWdvIFJlZ2lzdHJhdGlvbiBnb2VzIGhlcmU8L2E+PC9oND5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IFwibWFyZ2luUmlnaHRcIjpcInNwYWNpbmcgKyAnZW0nXCIsXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvaThmaEw2NXBYQzIyXCI+MzQzMiBXIERpdmVyc2V5IEF2ZS4sIENoaWNhZ28sIElMIDYwNjQ3PC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQvdjEvcGxhY2U/cT1wbGFjZV9pZDpDaElKN2VRcWMzVE5ENGdSQU9INGtFU0llWXMma2V5PUFJemFTeUF3enU5VUhGWERfVEczazZ1OFZaVXh5RUVhdGctQXZCd1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVCb3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmVsZXZhdG9yIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNoaSJdfQ== */\n/*@ sourceURL=components\\location-chi.js */"
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
  }, "Union Hall"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://www.facebook.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-4212282735"
  }, "Cincinnati registration goes here")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
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
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEZ0IsQUFHMkIsQUFHSixBQUtGLFlBQ0ssRUFMRSxJQUhyQixXQVNBLElBTG1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxsb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEdpbCBCXFxzcmNcXHdvcmtmbG93LXdlZG5lc2RheVxcaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IEdldHRpbmdTdGFydGVkR29vZ2xlTWFwID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXHJcbiAgPEdvb2dsZU1hcFxyXG4gICAgcmVmPXtwcm9wcy5vbk1hcExvYWR9XHJcbiAgICBkZWZhdWx0Wm9vbT17MTV9XHJcbiAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMzkuMDk3NjI4MSwgbG5nOiAtODQuNTEzNDMzIH19XHJcbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxyXG4gID5cclxuICAgIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAgey4uLm1hcmtlcn1cclxuICAgICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Hb29nbGVNYXA+XHJcbikpO1xyXG5cclxuY29uc3QgTG9jYXRpb24gPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImxvY2F0aW9uXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICd3aGl0ZScsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uIGxvY2F0aW9uXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkxvY2F0aW9uczwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OYXRpb25hbCBVbmRlcmdyb3VuZCBSYWlscm9hZCBGcmVlZG9tIENlbnRlcjwvaDM+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj41MCBFIEZyZWVkb20gV2F5LCBDaW5jaW5uYXRpLCBPSCA0NTIwMjwvYT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5VbmlvbiBIYWxsPC9oMz5cclxuICAgICAgICAgIDxoND48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiPkNpbmNpbm5hdGkgcmVnaXN0cmF0aW9uIGdvZXMgaGVyZTwvYT48L2g0PlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj4xMzExIFZpbmUgU3QsIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3MTAxNC4yMTIyODM5MzcwMyEyZC04NC41MzYzMzA2NjY3NDcxMyEzZDM5LjE2NTE3OTM5MTMxNTg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODQxYjNmZDk0YzhmMDJiJTNBMHgzY2FlZTViZmM2NTg2NmIzITJzVW5pb24rSGFsbCE1ZTAhM20yITFzZW4hMnN1cyE0djE1MjE2Mzg2MTI0OThcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIGZyYW1lQm9yZGVyPVwiMFwiIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJlbGV2YXRvciBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy00IGlzLW9mZnNldC00XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+RGlyZWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoU291bmRib3VuZCk8L2g0PlxyXG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKSBvIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpIG8gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChOb3J0aGJvdW5kKTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxIFNvdXRoIHRvIHRoZSBUSElSRCBTVFJFRVQgZXhpdCAoeW91IHdpbGwgbmVlZCB0byBiZSBpbiB0aGUgZmFyIGxlZnQgbGFuZSkuIEdvIHN0cmFpZ2h0IG9uIFRoaXJkIFN0cmVldCwgdHVybiBsZWZ0IGF0IHRoZSA0dGggdHJhZmZpYyBsaWdodCBvbnRvIFdBTE5VVC4gQXQgdGhlIGZpcnN0IGxpZ2h0IHR1cm4gbGVmdCBvbnRvIFNFQ09ORCBTVFJFRVQuIEF0IHRoZSBmaXJzdCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCk8L3A+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzUgTm9ydGggKFNvdXRoYm91bmQpPC9oND5cclxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzUgU291dGggdG8gQ2luY2lubmF0aSwgT2hpbyBhbmQgZXhpdCBhdCBTRUNPTkQgU1RSRUVUIERvd250b3duLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTcxIChTb3VuZGJvdW5kKTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPiBUYWtlIEnigJA3MS9J4oCQNzUgTm9ydGggdG8gU0VDT05EIFNUUkVFVCBEb3dudG93biAoeW91IHdpbGwgd2FudCB0byBiZSBpbiB0aGUgcmlnaHQgaGFuZCBsYW5lIHdoZW4geW91IGFyZSBjcm9zc2luZyB0aGUgYnJpZGdlKS4gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkuIFR1cm4gUklHSFQgaW50byB0aGUgQ0VOVFJBTCBSSVZFUiBGUk9OVCBQQVJLSU5HIEdBUkFHRTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmVsZXZhdG9yIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblxyXG4iXX0= */\n/*@ sourceURL=components\\location.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Location);

/***/ }),

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\navbar.js";


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
  }, "Location"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
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
  }, "Facebook")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\organizers.js";



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
    css: ".elevator.jsx-2813563257{text-align:center;}.title.jsx-2813563257{font-weight:bold;}img.jsx-2813563257{height:250px;width:250px;margin-bottom:10px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG9yZ2FuaXplcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUcyQixBQUdELEFBR0osYUFDQSxJQUhmLENBSEEsT0FPb0IsbUJBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHNcXG9yZ2FuaXplcnMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx3b3JrZmxvdy13ZWRuZXNkYXlcXGhpbGxtYW4tZnJpZGF5cyIsInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBPcmdhbml6ZXJzID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiIGlkPVwib3JnYW5pemVyc1wiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnd2hpdGUnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9fT5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+T3JnYW5pemVyczwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2FudHdvaW5lLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPkFudHdvaW5lIEZsb3dlcnM8L3A+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90eXBpY2FsX25hbmFcIj48aW1nIHNyYz1cIi9zdGF0aWMvTmFuYS5qcGdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+TmFuYSBBYmVla3U8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL19naWxicHJvZHVjaW5nXCI+PGltZyBzcmM9XCIvc3RhdGljL2dpbC5qcGdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+R2lsYmVydCBLaW5nPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICB3aWR0aDogIDI1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6ZXJzXHJcbiJdfQ== */\n/*@ sourceURL=components\\organizers.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\tagline.js";



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
    css: ".elevator.jsx-1855462676{text-align:center;color:white;}.title.jsx-1855462676{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHRhZ2xpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzJCLEFBSVIsWUFDSyxNQUpILFdBS2QsQ0FKQSIsImZpbGUiOiJjb21wb25lbnRzXFx0YWdsaW5lLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUYWdMaW5lID0gKCkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMjgyODI4JyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+RXZlcnkgMm5kIGFuZCA0dGggV2VkbmVzZGF5LCBhdCA3cG0sIHdvcmsgd2l0aCB1cy48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdMaW5lXHJcbiJdfQ== */\n/*@ sourceURL=components\\tagline.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\tweet-embed.js";

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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\twitter.js";




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
    css: ".elevator.jsx-3852583590{text-align:center;color:white;}.title.jsx-3852583590{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHR3aXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUcyQixBQUtyQixZQUFDLE1BSmMsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzXFx0d2l0dGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcR2lsIEJcXHNyY1xcd29ya2Zsb3ctd2VkbmVzZGF5XFxoaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXRFbWJlZCBmcm9tICcuL3R3ZWV0LWVtYmVkJztcclxuXHJcbmNvbnN0IFR3aXR0ZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8VHdlZXRFbWJlZCBpZD17XCI4OTA3MzQ2ODgxMzgxNDE2OTdcIn0gb3B0aW9ucz17eyBjYXJkczogJ2hpZGRlbicgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODgzNTA3Njk2Mjc5OTY5NzkyXCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxUd2VldEVtYmVkIGlkPXtcIjg5MDczMzc1MDc0NDY5ODg4MFwifSBvcHRpb25zPXt7IGNhcmRzOiAnaGlkZGVuJyB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODkwNzQ1ODU2NjAwODA5NDc3XCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXHJcbiJdfQ== */\n/*@ sourceURL=components\\twitter.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\components\\what-to-expect.js";



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
  }, "There is no commitment necessary, Wednesdays should flow, and that\u2019s just how it goes. We are located in Over The Rhine, in close proximity to popular local bars and night clubs. OTR provides great nightlife scenery and is a short drive from Covington where there are also local breweries and bars.  "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4235853645",
    css: "#what-to-expect.jsx-4235853645{text-align:center;background-color:white;}.elevator.jsx-4235853645{text-align:center;}.title.jsx-4235853645{font-weight:bold;text-align:center;}.img.jsx-4235853645{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHdoYXQtdG8tZXhwZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHMkIsQUFJQSxBQUdELEFBSUosYUFDSyxJQUpBLENBUEssQUFJekIsYUFRQSxJQUpBLE1BUEEiLCJmaWxlIjoiY29tcG9uZW50c1xcd2hhdC10by1leHBlY3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxHaWwgQlxcc3JjXFx3b3JrZmxvdy13ZWRuZXNkYXlcXGhpbGxtYW4tZnJpZGF5cyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdoYXRUb0V4cGVjdCA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gIDxkaXYgaWQ9XCJ3aGF0LXRvLWV4cGVjdFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIiBzdHlsZT17eyd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5XaGF0IFRvIEV4cGVjdDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkNvbGxhYm9yYXRlPC9oMz5cclxuICAgICAgICA8cD5Db25uZWN0IHdpdGggb3RoZXIgYW1iaXRpb3VzIGluZGl2aWR1YWxzIGluIGEgdmFyaWV0eSBvZiBkaWZmZXJlbnQgZmllbGRzLiBHYWluIGFjY2VzcyB0byBvdGhlciBwZXJzcGVjdGl2ZXMgYW5kIGJyYWluc3Rvcm0gZm9yIHlvdXIgcGFzc2lvbiBwcm9qZWN0cy4gOS8xMCB0aGVyZSBpcyBzb21lb25lIGF2YWlsYWJsZSB3aG8gaGFzIGhhZCBzb21lIHNraW4gaW4gdGhlIGZpZWxkLCBubyBjb3N0IHRvIHlvdS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+Q3JlYXRlPC9oMz5cclxuICAgICAgICA8cD5JdOKAmXMgaGFyZCB0byBtYWtlIHRpbWUgZm9yIHlvdXIgcHJvamVjdHMgYW5kIGV2ZW4geW91cnNlbGYuIEdldCB0aGUgY2hhbmNlIHRvIGF0dGVuZCBmcmVlIGxpdmUgY2xhc3NlcyBmb3IgdmFyaW91cyB0b3BpY3MsIGRpc2N1c3MgZHJlYW1zLCBvciBldmVuIHRvc3MgYXJvdW5kIGlkZWFzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlBpenphIEFuZCBCZWVyPC9oMz5cclxuICAgICAgICA8cD5IZXksIEl04oCZcyBIdW1wIERheSwgd2XigJlyZSBoZXJlIHRvIHJlbGF4LCB2aWJlLCBhbmQgZXZlbiBnZXQgd29yayBkb25lLiBXaGF04oCZcyBhIG1pZC13ZWVrIG1lZXQtdXAgd2l0aG91dCBhIGNvbGQgYnJldyBhbmQgbm90IGhhdmluZyB0byB3b3JyeSBhYm91dCBkaW5uZXIgcGxhbnMuIFBsYWluIGFuZCBzaW1wbGUhIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5PbiBZb3VyIFRpbWU8L2gzPlxyXG4gICAgICAgIDxwPlRoZXJlIGlzIG5vIGNvbW1pdG1lbnQgbmVjZXNzYXJ5LCBXZWRuZXNkYXlzIHNob3VsZCBmbG93LCBhbmQgdGhhdOKAmXMganVzdCBob3cgaXQgZ29lcy4gV2UgYXJlIGxvY2F0ZWQgaW4gT3ZlciBUaGUgUmhpbmUsIGluIGNsb3NlIHByb3hpbWl0eSB0byBwb3B1bGFyIGxvY2FsIGJhcnMgYW5kIG5pZ2h0IGNsdWJzLiBPVFIgcHJvdmlkZXMgZ3JlYXQgbmlnaHRsaWZlIHNjZW5lcnkgYW5kIGlzIGEgc2hvcnQgZHJpdmUgZnJvbSBDb3Zpbmd0b24gd2hlcmUgdGhlcmUgYXJlIGFsc28gbG9jYWwgYnJld2VyaWVzIGFuZCBiYXJzLiAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjd2hhdC10by1leHBlY3Qge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuZWxldmF0b3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG48L2Rpdj4gICAgXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRUb0V4cGVjdFxyXG4iXX0= */\n/*@ sourceURL=components\\what-to-expect.js */"
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
var _jsxFileName = "C:\\Users\\Gil B\\src\\workflow-wednesday\\hillman-fridays\\pages\\index.js";








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