webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sushant/Dev/next-my-app/pages/user/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar fetcher = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {\n    var res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            res = _context.sent;\n\n            if (res.ok) {\n              _context.next = 5;\n              break;\n            }\n\n            throw Error('Something crappy happened!!');\n\n          case 5:\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetcher(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar User = function User() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"api/user/\".concat(id), fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Alert\"], {\n      status: \"error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 12\n      }\n    }, \"Loading failed: \", error.message);\n  }\n\n  if (!data) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Alert\"], {\n      status: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"SimpleGrid\"], {\n    columns: 2,\n    width: \"2xs\",\n    spacingY: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"UserID\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, data.id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Name\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, data.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Email\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, data.email));\n};\n\n_s(User, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8udHN4PzAzYmMiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiVXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTV1IiLCJlcnJvciIsIm1lc3NhZ2UiLCJuYW1lIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTztBQUFBLDhMQUFHLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lDLEtBQUssQ0FBQ0QsR0FBRCxDQURUOztBQUFBO0FBQ1JFLGVBRFE7O0FBQUEsZ0JBRVZBLEdBQUcsQ0FBQ0MsRUFGTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFHTkMsS0FBSyxDQUFDLDZCQUFELENBSEM7O0FBQUE7QUFBQTtBQUFBLG1CQUtrREYsR0FBRyxDQUFDRyxJQUFKLEVBTGxEOztBQUFBO0FBS1JDLGdCQUxRO0FBQUEsNkNBTVBBLElBTk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUFAsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQVNBLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURpQixNQUVUQyxFQUZTLEdBRUZGLE1BQU0sQ0FBQ0csS0FGTCxDQUVURCxFQUZTOztBQUFBLGdCQUdPRSxtREFBTSxvQkFBYUYsRUFBYixHQUFtQlgsT0FBbkIsQ0FIYjtBQUFBLE1BR1RPLElBSFMsV0FHVEEsSUFIUztBQUFBLE1BR0hPLEtBSEcsV0FHSEEsS0FIRzs7QUFLakIsTUFBR0EsS0FBSCxFQUFVO0FBQ1IsV0FBTyxNQUFDLHFEQUFEO0FBQU8sWUFBTSxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBd0NBLEtBQUssQ0FBQ0MsT0FBOUMsQ0FBUDtBQUNEOztBQUVELE1BQUcsQ0FBQ1IsSUFBSixFQUFVO0FBQ1IsV0FBTyxNQUFDLHFEQUFEO0FBQU8sWUFBTSxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUVELFNBQ0UsTUFBQywwREFBRDtBQUFZLFdBQU8sRUFBRSxDQUFyQjtBQUF3QixTQUFLLEVBQUMsS0FBOUI7QUFBb0MsWUFBUSxFQUFFLENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sY0FBVSxFQUFDLE1BQWpCO0FBQXdCLGVBQVcsRUFBRSxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsSUFBSSxDQUFDSSxFQUFaLENBRkYsRUFJRSxNQUFDLG9EQUFEO0FBQU0sY0FBVSxFQUFDLE1BQWpCO0FBQXdCLGVBQVcsRUFBRSxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0osSUFBSSxDQUFDUyxJQUFaLENBTEYsRUFPRSxNQUFDLG9EQUFEO0FBQU0sY0FBVSxFQUFDLE1BQWpCO0FBQXdCLGVBQVcsRUFBRSxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFRRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1QsSUFBSSxDQUFDVSxLQUFaLENBUkYsQ0FERjtBQVlELENBekJEOztHQUFNVCxJO1VBQ1dFLHFELEVBRVNHLDJDOzs7S0FIcEJMLEk7QUEyQlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBTaW1wbGVHcmlkLCBUZXh0LCBBbGVydCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYoIXJlcy5vaykge1xuICAgIHRocm93IEVycm9yKCdTb21ldGhpbmcgY3JhcHB5IGhhcHBlbmVkISEnKTtcbiAgfVxuICBjb25zdCBkYXRhOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IFVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgYXBpL3VzZXIvJHtpZH1gLCBmZXRjaGVyKTsgIFxuXG4gIGlmKGVycm9yKSB7XG4gICAgcmV0dXJuIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiPkxvYWRpbmcgZmFpbGVkOiB7IGVycm9yLm1lc3NhZ2UgfTwvQWxlcnQ+XG4gIH1cblxuICBpZighZGF0YSkge1xuICAgIHJldHVybiA8QWxlcnQgc3RhdHVzPVwiaW5mb1wiPkxvYWRpbmcgLi4uPC9BbGVydD5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gd2lkdGg9XCIyeHNcIiBzcGFjaW5nWT17NH0+XG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG1hcmdpblJpZ2h0PXs0fT5Vc2VySUQ8L1RleHQ+XG4gICAgICA8VGV4dD57ZGF0YS5pZH08L1RleHQ+XG5cbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbWFyZ2luUmlnaHQ9ezR9Pk5hbWU8L1RleHQ+XG4gICAgICA8VGV4dD57ZGF0YS5uYW1lfTwvVGV4dD5cblxuICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtYXJnaW5SaWdodD17NH0+RW1haWw8L1RleHQ+XG4gICAgICA8VGV4dD57ZGF0YS5lbWFpbH08L1RleHQ+XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

})