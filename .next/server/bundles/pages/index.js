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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/description.js";



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
    css: ".elevator.jsx-2932254444{text-align:center;color:white;}.title.jsx-2932254444{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzY3JpcHRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzJCLEFBSU4sWUFDSyxNQUpMLFdBS2QsQ0FKQSIsImZpbGUiOiJjb21wb25lbnRzL2Rlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnIzI4MjgyOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPkNSRUFUSU9OLiBDT01NVU5JVFkuIENPTExBQk9SQVRJT04uPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxuIl19 */\n/*@ sourceURL=components/description.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/footer.js";



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
    css: "#footer.jsx-648890430{background-color:#282828;text-align:center;color:white;}.title.jsx-648890430{color:white;}a.jsx-648890430{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQixBQUdrQyxBQUtiLEFBR0QsWUFGYixBQUdBLGFBUm1CLGtCQUNMLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TWFkZSB3aXRoIOKdpO+4jyBpbiBDaW5jaW5uYXRpLjwvaDI+XG4gICAgPHA+Q29weXJpZ2h0IDIwMTcgJmNvcHk7IEFsbCBSaWdodHMgUmVzZXJ2ZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9oaWxsNy5vcmdcIj5IaWxsbWFuIEFjY2VsZXJhdG9yPC9hPjwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=components/footer.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/form.js";



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
    action: "https://tinyletter.com/workflow-wednesday",
    method: "post",
    target: "popupwindow",
    onsubmit: "window.open('https://tinyletter.com/workflow-wednesday', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true",
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
    css: ".title.jsx-3981005454{color:white;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR3FCLFlBQ00sa0JBQ0QsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdWJtaXRGb3JtID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwic2lnbnVwXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZjN2E4JyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbGFiZWxcIj5TdGF5IENvbm5lY3RlZDwvaDM+XG4gICAgICAgIDxmb3JtIHN0eWxlPXt7ICdwYWRkaW5nJzogJzNweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJyB9fSBhY3Rpb249XCJodHRwczovL3RpbnlsZXR0ZXIuY29tL3dvcmtmbG93LXdlZG5lc2RheVwiIG1ldGhvZD1cInBvc3RcIiB0YXJnZXQ9XCJwb3B1cHdpbmRvd1wiIG9uc3VibWl0PVwid2luZG93Lm9wZW4oJ2h0dHBzOi8vdGlueWxldHRlci5jb20vd29ya2Zsb3ctd2VkbmVzZGF5JywgJ3BvcHVwd2luZG93JywgJ3Njcm9sbGJhcnM9eWVzLHdpZHRoPTgwMCxoZWlnaHQ9NjAwJyk7cmV0dXJuIHRydWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cInRsZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgbmFtZT1cImVtYmVkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy13aGl0ZVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxwPjxsYWJlbCBmb3I9XCJ0bGVtYWlsXCI+QmUgTm90aWZpZWQ8L2xhYmVsPjwvcD5cbiAgICAgICAgICA8cD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17eyAnd2lkdGgnOiAnMTQwcHgnIH19IG5hbWU9XCJlbWFpbFwiIGlkPVwidGxlbWFpbFwiIC8+PC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgbmFtZT1cImVtYmVkXCIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz4gKi99XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRGb3JtXG4iXX0= */\n/*@ sourceURL=components/form.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SubmitForm);

/***/ }),

/***/ "./components/group-banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/group-banner.js";


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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/header.js";



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
    css: ".logo.jsx-4049844003{margin-bottom:15px;}.title.jsx-4049844003{font-weight:bold;color:#282828;}.header.jsx-4049844003{text-align:center;background-color:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHNEIsQUFHRixBQUlDLGlCQUhKLENBSVMsQ0FQekIsWUFJQSxVQUljLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgc2VjdGlvblwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy93b3JrZmxvd2ZpbmFsLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICB7LyogPHAgc3R5bGU9e3sgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfX0+IEV2ZXJ5IDJuZCBhbmQgNHRoIFdlZG5lc2RheSwgYXQgNzowMHBtLCB3b3JrIHdpdGggdXMuPC9wPiAqL31cbiAgICAgIHsvKiA8cCBzdHlsZT17eyAnZm9udFdlaWdodCc6ICdib2xkJywgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9fT4gQ2luY2luYXRpLCBPaGlvPC9wPiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGlzLW9mZnNldC1vbmUtcXVhcnRlclwiPlxuICAgICAgICAgIDxhIHN0eWxlPXt7J3RleHQtYWxpZ2h0JzogJ2NlbnRlcicsIG1hcmdpbjogJ2F1dG8nLCBkaXNwbGF5OiAnYmxvY2snLCB3aWR0aDogJzIwMCd9fSBjbGFzc05hbWU9XCJidXR0b25cIj5SZWdpc3RlcjwvYT5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzI4MjgyODtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=components/header.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/layout.js";





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
    css: "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCdUIsQUFHMkMsa0NBQ3BDIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBUeXBla2l0IGZyb20gJ3JlYWN0LXR5cGVraXQnO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsnV29ya2Zsb3cgV2VkbmVzZGF5cyd9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjQuMy9jc3MvYnVsbWEuY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtYm9vdHN0cmFwLzAuMzIuNC9yZWFjdC1ib290c3RyYXAubWluLmpzXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUNHVUc4OFlWaU0yaF9yTXFBMllXRGhpdHA3R29vWFE3Z1wiPjwvc2NyaXB0PlxuICAgICAgPFR5cGVraXQga2l0SWQ9XCJnemM3eGl5XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cbiAgICB7IGNoaWxkcmVuIH1cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZyYW5rbGluLWdvdGhpYy11cndcIjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=components/layout.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/location-chi.js";



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
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24tY2hpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDZ0IsQUFHMkIsQUFHSixBQUtGLFlBQ0ssRUFMRSxJQUhyQixXQVNBLElBTG1CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL2xvY2F0aW9uLWNoaS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAsIE1hcmtlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcbiAgPEdvb2dsZU1hcFxuICAgIHJlZj17cHJvcHMub25NYXBMb2FkfVxuICAgIGRlZmF1bHRab29tPXsxNX1cbiAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogNDEuOTMyMDU4MywgbG5nOiAtODcuNzE1OCB9fVxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWFwQ2xpY2t9XG4gID5cbiAgICB7cHJvcHMubWFya2Vycy5tYXAobWFya2VyID0+IChcbiAgICAgIDxNYXJrZXJcbiAgICAgICAgey4uLm1hcmtlcn1cbiAgICAgICAgb25SaWdodENsaWNrPXsoKSA9PiBwcm9wcy5vbk1hcmtlclJpZ2h0Q2xpY2sobWFya2VyKX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvR29vZ2xlTWFwPlxuKSk7XG5cbmNvbnN0IExvY2F0aW9uQ2hpID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwibG9jYXRpb25cIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInNlY3Rpb24gbG9jYXRpb25cIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPjwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TmF0aW9uYWwgVW5kZXJncm91bmQgUmFpbHJvYWQgRnJlZWRvbSBDZW50ZXI8L2gzPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9lV3EzR3N3QUxQcVwiPjUwIEUgRnJlZWRvbSBXYXksIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIDxoND5UaGUgU2Vjb25kIFNoaWZ0PC9oND5cbiAgICAgICAgICA8aDQ+PGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiaHR0cHM6Ly9iaXQubHkvMk9kQjNqaVwiIHRhcmdldD1cIl9ibGFua1wiPkNoaWNhZ28gUmVnaXN0cmF0aW9uPC9hPjwvaDQ+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgXCJtYXJnaW5SaWdodFwiOlwic3BhY2luZyArICdlbSdcIixcImNvbG9yXCI6IFwiYmxhY2tcIiB9fSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9pOGZoTDY1cFhDMjJcIj4zNDMyIFcgRGl2ZXJzZXkgQXZlLiwgQ2hpY2FnbywgSUwgNjA2NDc8L2E+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQvdjEvcGxhY2U/cT1wbGFjZV9pZDpDaElKN2VRcWMzVE5ENGdSQU9INGtFU0llWXMma2V5PUFJemFTeUF3enU5VUhGWERfVEczazZ1OFZaVXh5RUVhdGctQXZCd1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVCb3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNoaSJdfQ== */\n/*@ sourceURL=components/location-chi.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/location.js";



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
    css: ".elevator.jsx-4212282735{text-align:center;}a.jsx-4212282735{display:block;margin-bottom:10px;font-weight:bold;}.location.jsx-4212282735{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RnQixBQUcyQixBQUdKLEFBS0YsWUFDSyxFQUxFLElBSHJCLFdBU0EsSUFMbUIsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dpbGJlcnRraW5nL3NyYy90aGUtd29ya2Zsb3ctd2VkbmVzZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEdldHRpbmdTdGFydGVkR29vZ2xlTWFwID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXG4gIDxHb29nbGVNYXBcbiAgICByZWY9e3Byb3BzLm9uTWFwTG9hZH1cbiAgICBkZWZhdWx0Wm9vbT17MTV9XG4gICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDM5LjA5NzYyODEsIGxuZzogLTg0LjUxMzQzMyB9fVxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWFwQ2xpY2t9XG4gID5cbiAgICB7cHJvcHMubWFya2Vycy5tYXAobWFya2VyID0+IChcbiAgICAgIDxNYXJrZXJcbiAgICAgICAgey4uLm1hcmtlcn1cbiAgICAgICAgb25SaWdodENsaWNrPXsoKSA9PiBwcm9wcy5vbk1hcmtlclJpZ2h0Q2xpY2sobWFya2VyKX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvR29vZ2xlTWFwPlxuKSk7XG5cbmNvbnN0IExvY2F0aW9uID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwibG9jYXRpb25cIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInNlY3Rpb24gbG9jYXRpb25cIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkxvY2F0aW9uczwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ZyZWVkb20tY2VudGVyLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TmF0aW9uYWwgVW5kZXJncm91bmQgUmFpbHJvYWQgRnJlZWRvbSBDZW50ZXI8L2gzPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9lV3EzR3N3QUxQcVwiPjUwIEUgRnJlZWRvbSBXYXksIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIDxoMz5VbmlvbiBIYWxsPC9oMz5cbiAgICAgICAgICA8aDQ+PGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiaHR0cHM6Ly9iaXQubHkvMk9kQjNqaVwiIHRhcmdldD1cIl9ibGFua1wiPkNpbmNpbm5hdGkgUmVnaXN0cmF0aW9uPC9hPjwvaDQ+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgXCJjb2xvclwiOiBcImJsYWNrXCIgfX0gaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZVdxM0dzd0FMUHFcIj4xMzExIFZpbmUgU3QsIENpbmNpbm5hdGksIE9IIDQ1MjAyPC9hPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNzEwMTQuMjEyMjgzOTM3MDMhMmQtODQuNTM2MzMwNjY2NzQ3MTMhM2QzOS4xNjUxNzkzOTEzMTU4OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODg0MWIzZmQ5NGM4ZjAyYiUzQTB4M2NhZWU1YmZjNjU4NjZiMyEyc1VuaW9uK0hhbGwhNWUwITNtMiExc2VuITJzdXMhNHYxNTIxNjM4NjEyNDk4XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZUJvcmRlcj1cIjBcIiBzdHlsZT17eyBib3JkZXI6IDAgfX0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTQgaXMtb2Zmc2V0LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+RGlyZWN0aW9uczwvaDM+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPlRyYXZlbGluZyBmcm9tIEktNzEgKFNvdW5kYm91bmQpPC9oND5cbiAgICAgICAgICAgIDxwPlRha2UgSeKAkDcxL0nigJA3NSBOb3J0aCB0byBTRUNPTkQgU1RSRUVUIERvd250b3duICh5b3Ugd2lsbCB3YW50IHRvIGJlIGluIHRoZSByaWdodCBoYW5kIGxhbmUgd2hlbiB5b3UgYXJlIGNyb3NzaW5nIHRoZSBicmlkZ2UpIG8gQXQgdGhlIDV0aCB0cmFmZmljIGxpZ2h0IHR1cm4gcmlnaHQgb250byBNQUlOIFNUUkVFVCAoR3JlYXQgQW1lcmljYW4gQmFsbHBhcmsgd2lsbCBiZSBvbiB5b3VyIGxlZnQgb25jZSBvbiBNYWluIFN0cmVldCkgbyBUdXJuIFJJR0hUIGludG8gdGhlIENFTlRSQUwgUklWRVIgRlJPTlQgUEFSS0lORyBHQVJBR0U8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoTm9ydGhib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+VGFrZSBJ4oCQNzEgU291dGggdG8gdGhlIFRISVJEIFNUUkVFVCBleGl0ICh5b3Ugd2lsbCBuZWVkIHRvIGJlIGluIHRoZSBmYXIgbGVmdCBsYW5lKS4gR28gc3RyYWlnaHQgb24gVGhpcmQgU3RyZWV0LCB0dXJuIGxlZnQgYXQgdGhlIDR0aCB0cmFmZmljIGxpZ2h0IG9udG8gV0FMTlVULiBBdCB0aGUgZmlyc3QgbGlnaHQgdHVybiBsZWZ0IG9udG8gU0VDT05EIFNUUkVFVC4gQXQgdGhlIGZpcnN0IHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KTwvcD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5UcmF2ZWxpbmcgZnJvbSBJLTc1IE5vcnRoIChTb3V0aGJvdW5kKTwvaDQ+XG4gICAgICAgICAgICA8cD5UYWtlIEnigJA3NSBTb3V0aCB0byBDaW5jaW5uYXRpLCBPaGlvIGFuZCBleGl0IGF0IFNFQ09ORCBTVFJFRVQgRG93bnRvd24uIEF0IHRoZSA1dGggdHJhZmZpYyBsaWdodCB0dXJuIHJpZ2h0IG9udG8gTUFJTiBTVFJFRVQgKEdyZWF0IEFtZXJpY2FuIEJhbGxwYXJrIHdpbGwgYmUgb24geW91ciBsZWZ0IG9uY2Ugb24gTWFpbiBTdHJlZXQpLiBUdXJuIFJJR0hUIGludG8gdGhlIENFTlRSQUwgUklWRVIgRlJPTlQgUEFSS0lORyBHQVJBR0U8L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+VHJhdmVsaW5nIGZyb20gSS03MSAoU291bmRib3VuZCk8L2g0PlxuICAgICAgICAgICAgPHA+IFRha2UgSeKAkDcxL0nigJA3NSBOb3J0aCB0byBTRUNPTkQgU1RSRUVUIERvd250b3duICh5b3Ugd2lsbCB3YW50IHRvIGJlIGluIHRoZSByaWdodCBoYW5kIGxhbmUgd2hlbiB5b3UgYXJlIGNyb3NzaW5nIHRoZSBicmlkZ2UpLiBBdCB0aGUgNXRoIHRyYWZmaWMgbGlnaHQgdHVybiByaWdodCBvbnRvIE1BSU4gU1RSRUVUIChHcmVhdCBBbWVyaWNhbiBCYWxscGFyayB3aWxsIGJlIG9uIHlvdXIgbGVmdCBvbmNlIG9uIE1haW4gU3RyZWV0KS4gVHVybiBSSUdIVCBpbnRvIHRoZSBDRU5UUkFMIFJJVkVSIEZST05UIFBBUktJTkcgR0FSQUdFPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblxuIl19 */\n/*@ sourceURL=components/location.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Location);

/***/ }),

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/navbar.js";


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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/organizers.js";



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
      lineNumber: 5
    },
    className: "jsx-2813563257" + " " + "column"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://twitter.com/Queeeeel__",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2813563257"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/raquel.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2813563257"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2813563257" + " " + "title is-5"
  }, "Raquel Robinson")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
  }, "Nana Thompson")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
    css: ".elevator.jsx-2813563257{text-align:center;}.title.jsx-2813563257{font-weight:bold;}img.jsx-2813563257{height:250px;width:250px;margin-bottom:10px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3JnYW5pemVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBRzJCLEFBR0QsQUFHSixhQUNBLElBSGYsQ0FIQSxPQU9vQixtQkFDQSxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9vcmdhbml6ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBPcmdhbml6ZXJzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIiBpZD1cIm9yZ2FuaXplcnNcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJywgJ3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Pcmdhbml6ZXJzPC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vUXVlZWVlZWxfX1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9yYXF1ZWwuanBnXCIgYWx0PVwiXCIgLz48L2E+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5SYXF1ZWwgUm9iaW5zb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3R5cGljYWxfbmFuYVwiPjxpbWcgc3JjPVwiL3N0YXRpYy9OYW5hLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+TmFuYSBUaG9tcHNvbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vX2dpbGJwcm9kdWNpbmdcIj48aW1nIHNyYz1cIi9zdGF0aWMvZ2lsLmpwZ1wiIGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+R2lsYmVydCBLaW5nPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB3aWR0aDogIDI1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PilcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemVyc1xuIl19 */\n/*@ sourceURL=components/organizers.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/tagline.js";



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
    css: ".elevator.jsx-1855462676{text-align:center;color:white;}.title.jsx-1855462676{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFnbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHMkIsQUFJUixZQUNLLE1BSkgsV0FLZCxDQUpBIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFnbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUYWdMaW5lID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAnIzI4MjgyOCcgfX0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxldmF0b3IgY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPkV2ZXJ5IDJuZCBhbmQgNHRoIFdlZG5lc2RheSwgYXQgN3BtLCB3b3JrIHdpdGggdXMuPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0xpbmVcbiJdfQ== */\n/*@ sourceURL=components/tagline.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/tweet-embed.js";

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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/twitter.js";




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
    css: ".elevator.jsx-3852583590{text-align:center;color:white;}.title.jsx-3852583590{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHdpdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBRzJCLEFBS3JCLFlBQUMsTUFKYyxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvdHdpdHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3RoZS13b3JrZmxvdy13ZWRuZXNkYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXRFbWJlZCBmcm9tICcuL3R3ZWV0LWVtYmVkJztcblxuY29uc3QgVHdpdHRlciA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8VHdlZXRFbWJlZCBpZD17XCI4OTA3MzQ2ODgxMzgxNDE2OTdcIn0gb3B0aW9ucz17eyBjYXJkczogJ2hpZGRlbicgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODgzNTA3Njk2Mjc5OTY5NzkyXCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxUd2VldEVtYmVkIGlkPXtcIjg5MDczMzc1MDc0NDY5ODg4MFwifSBvcHRpb25zPXt7IGNhcmRzOiAnaGlkZGVuJyB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPFR3ZWV0RW1iZWQgaWQ9e1wiODkwNzQ1ODU2NjAwODA5NDc3XCJ9IG9wdGlvbnM9e3sgY2FyZHM6ICdoaWRkZW4nIH19IC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG4iXX0= */\n/*@ sourceURL=components/twitter.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/components/what-to-expect.js";



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
    css: "#what-to-expect.jsx-4235853645{text-align:center;background-color:white;}.elevator.jsx-4235853645{text-align:center;}.title.jsx-4235853645{font-weight:bold;text-align:center;}.img.jsx-4235853645{height:250px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2hhdC10by1leHBlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUcyQixBQUlBLEFBR0QsQUFJSixhQUNLLElBSkEsQ0FQSyxBQUl6QixhQVFBLElBSkEsTUFQQSIsImZpbGUiOiJjb21wb25lbnRzL3doYXQtdG8tZXhwZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvdGhlLXdvcmtmbG93LXdlZG5lc2RheSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdoYXRUb0V4cGVjdCA9ICgpID0+IChcbiAgPGRpdj5cbiAgPGRpdiBpZD1cIndoYXQtdG8tZXhwZWN0XCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5XaGF0IFRvIEV4cGVjdDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Db2xsYWJvcmF0ZTwvaDM+XG4gICAgICAgIDxwPkNvbm5lY3Qgd2l0aCBvdGhlciBhbWJpdGlvdXMgaW5kaXZpZHVhbHMgaW4gYSB2YXJpZXR5IG9mIGRpZmZlcmVudCBmaWVsZHMuIEdhaW4gYWNjZXNzIHRvIG90aGVyIHBlcnNwZWN0aXZlcyBhbmQgYnJhaW5zdG9ybSBmb3IgeW91ciBwYXNzaW9uIHByb2plY3RzLiA5LzEwIHRoZXJlIGlzIHNvbWVvbmUgYXZhaWxhYmxlIHdobyBoYXMgaGFkIHNvbWUgc2tpbiBpbiB0aGUgZmllbGQsIG5vIGNvc3QgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+Q3JlYXRlPC9oMz5cbiAgICAgICAgPHA+SXTigJlzIGhhcmQgdG8gbWFrZSB0aW1lIGZvciB5b3VyIHByb2plY3RzIGFuZCBldmVuIHlvdXJzZWxmLiBHZXQgdGhlIGNoYW5jZSB0byBhdHRlbmQgZnJlZSBsaXZlIGNsYXNzZXMgZm9yIHZhcmlvdXMgdG9waWNzLCBkaXNjdXNzIGRyZWFtcywgb3IgZXZlbiB0b3NzIGFyb3VuZCBpZGVhc1xuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5QaXp6YSBBbmQgQmVlcjwvaDM+XG4gICAgICAgIDxwPkhleSwgSXTigJlzIEh1bXAgRGF5LCB3ZeKAmXJlIGhlcmUgdG8gcmVsYXgsIHZpYmUsIGFuZCBldmVuIGdldCB3b3JrIGRvbmUuIFdoYXTigJlzIGEgbWlkLXdlZWsgbWVldC11cCB3aXRob3V0IGEgY29sZCBicmV3IGFuZCBub3QgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IGRpbm5lciBwbGFucy4gUGxhaW4gYW5kIHNpbXBsZSEgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk9uIFlvdXIgVGltZTwvaDM+XG4gICAgICAgIDxwPlRoZXJlIGlzIG5vIGNvbW1pdG1lbnQgbmVjZXNzYXJ5LCBIdW1wIERheXMgc2hvdWxkIGZsb3csIGFuZCB0aGF04oCZcyBqdXN0IGhvdyBpdCBnb2VzLiBXZSBhcmUgbG9jYXRlZCBpbiBPdmVyIFRoZSBSaGluZSBhbmQgTG9nYW4gU3F1YXJlLCBpbiBjbG9zZSBwcm94aW1pdHkgdG8gbWFueSBwb3B1bGFyIGxvY2FsIGJhcnMgYW5kIG5pZ2h0IGNsdWJzLiBCb3RoIGNpdGllcyBwcm92aWRlIGdyZWF0IHJlc3RhdXJhbnRzLCBuaWdodGxpZmUsIGFuZCBzY2VuZXJ5LiBQbHVzIHRoZXJlJ3MgYSBzaG9ydCBkcml2ZSBmcm9tIHdoZXJldmVyIHlvdSBtYXkgYmUgdHJhdmVsaW5nLiAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3doYXQtdG8tZXhwZWN0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5lbGV2YXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbjwvZGl2PiAgICBcbilcblxuZXhwb3J0IGRlZmF1bHQgV2hhdFRvRXhwZWN0XG4iXX0= */\n/*@ sourceURL=components/what-to-expect.js */"
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
var _jsxFileName = "/Users/gilbertking/src/the-workflow-wednesday/pages/index.js";








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