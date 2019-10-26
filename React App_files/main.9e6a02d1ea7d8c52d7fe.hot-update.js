webpackHotUpdate("main",{

/***/ "./src/Funcs/LucketSetParentIcon/index.js":
/*!************************************************!*\
  !*** ./src/UIComponents/LucketSetParentIcon/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/UIComponents/LucketSetParentIcon/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elustondo/luckets/src/UIComponents/LucketSetParentIcon/index.js";



var imageLocation = function imageLocation(hasParent) {
  return hasParent ? '/images/up-arrow.svg' : '/images/line.svg';
};

var LucketSetParentIcon = function LucketSetParentIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: function onClick() {
      return props.lucket.parent != "" ? props.backToParent() : null;
    },
    className: "LucketSetParentIcon",
    src: imageLocation(props.lucket.parent != ""),
    alt: imageLocation(props.lucket.parent != ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LucketSetParentIcon);

/***/ })

})
//# sourceMappingURL=main.9e6a02d1ea7d8c52d7fe.hot-update.js.map