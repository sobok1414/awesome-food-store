webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoreList.js":
/*!*********************************!*\
  !*** ./components/StoreList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoreModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreModal */ "./components/StoreModal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StoreList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StoreList, _React$Component);

  function StoreList() {
    _classCallCheck(this, StoreList);

    return _possibleConstructorReturn(this, _getPrototypeOf(StoreList).apply(this, arguments));
  }

  _createClass(StoreList, [{
    key: "render",
    value: function render() {
      var stores = this.props.stores;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "ui four column grid"
      }, stores.map(function (store) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "column",
          key: store.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "ui sement",
          key: store.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: store.thumb,
            alt: store.name,
            style: {
              cursor: 'pointer'
            }
          }),
          closeIcon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StoreModal__WEBPACK_IMPORTED_MODULE_0__["default"], null))));
      }));
    }
  }]);

  return StoreList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StoreList);

/***/ })

})
//# sourceMappingURL=index.js.3d14cc2d5211354eec9b.hot-update.js.map