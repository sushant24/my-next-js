webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sushant/Dev/next-my-app/pages/user/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar fetcher = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {\n    var res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            res = _context.sent;\n\n            if (res.ok) {\n              _context.next = 5;\n              break;\n            }\n\n            throw Error('Something crappy happened!!');\n\n          case 5:\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetcher(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar User = function User() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _router$query = router.query,\n      id = _router$query.id,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_router$query, [\"id\"]);\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('api/user/${id}', fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Alert\"], {\n      status: \"error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 12\n      }\n    }, \"Loading failed: \", error.message);\n  }\n\n  if (!data) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Alert\"], {\n      status: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"SimpleGrid\"], {\n    columns: 2,\n    width: \"2xs\",\n    spacingY: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"UserID\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, data.id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Name\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, data.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Email\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, data.email));\n};\n\n_s(User, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8udHN4PzAzYmMiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiVXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJyZXN0IiwidXNlU1dSIiwiZXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTztBQUFBLDhMQUFHLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lDLEtBQUssQ0FBQ0QsR0FBRCxDQURUOztBQUFBO0FBQ1JFLGVBRFE7O0FBQUEsZ0JBRVZBLEdBQUcsQ0FBQ0MsRUFGTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFHTkMsS0FBSyxDQUFDLDZCQUFELENBSEM7O0FBQUE7QUFBQTtBQUFBLG1CQUtrREYsR0FBRyxDQUFDRyxJQUFKLEVBTGxEOztBQUFBO0FBS1JDLGdCQUxRO0FBQUEsNkNBTVBBLElBTk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUFAsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQVNBLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEaUIsc0JBRU9ELE1BQU0sQ0FBQ0UsS0FGZDtBQUFBLE1BRVRDLEVBRlMsaUJBRVRBLEVBRlM7QUFBQSxNQUVGQyxJQUZFOztBQUFBLGdCQUdPQyxtREFBTSxDQUFDLGdCQUFELEVBQW1CZCxPQUFuQixDQUhiO0FBQUEsTUFHVE8sSUFIUyxXQUdUQSxJQUhTO0FBQUEsTUFHSFEsS0FIRyxXQUdIQSxLQUhHOztBQUtqQixNQUFHQSxLQUFILEVBQVU7QUFDUixXQUFPLE1BQUMscURBQUQ7QUFBTyxZQUFNLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF3Q0EsS0FBSyxDQUFDQyxPQUE5QyxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDVCxJQUFKLEVBQVU7QUFDUixXQUFPLE1BQUMscURBQUQ7QUFBTyxZQUFNLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQVksV0FBTyxFQUFFLENBQXJCO0FBQXdCLFNBQUssRUFBQyxLQUE5QjtBQUFvQyxZQUFRLEVBQUUsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxJQUFJLENBQUNLLEVBQVosQ0FGRixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQUtFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTCxJQUFJLENBQUNVLElBQVosQ0FMRixFQU9FLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixJQUFJLENBQUNXLEtBQVosQ0FSRixDQURGO0FBWUQsQ0F6QkQ7O0dBQU1WLEk7VUFDV0UscUQsRUFFU0ksMkM7OztLQUhwQk4sSTtBQTJCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IFNpbXBsZUdyaWQsIFRleHQsIEFsZXJ0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZighcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBjcmFwcHkgaGFwcGVuZWQhIScpO1xuICB9XG4gIGNvbnN0IGRhdGE6IHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuY29uc3QgVXNlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQsIC4uLnJlc3QgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCdhcGkvdXNlci8ke2lkfScsIGZldGNoZXIpOyAgXG5cbiAgaWYoZXJyb3IpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+TG9hZGluZyBmYWlsZWQ6IHsgZXJyb3IubWVzc2FnZSB9PC9BbGVydD5cbiAgfVxuXG4gIGlmKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxBbGVydCBzdGF0dXM9XCJpbmZvXCI+TG9hZGluZyAuLi48L0FsZXJ0PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSB3aWR0aD1cIjJ4c1wiIHNwYWNpbmdZPXs0fT5cbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbWFyZ2luUmlnaHQ9ezR9PlVzZXJJRDwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLmlkfTwvVGV4dD5cblxuICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtYXJnaW5SaWdodD17NH0+TmFtZTwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLm5hbWV9PC9UZXh0PlxuXG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG1hcmdpblJpZ2h0PXs0fT5FbWFpbDwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLmVtYWlsfTwvVGV4dD5cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

})