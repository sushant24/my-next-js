module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/sushant/Dev/next-my-app/pages/user/[id].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst fetcher = async url => {\n  const res = await fetch(url);\n\n  if (!res.ok) {\n    throw Error('Something crappy happened!!');\n  }\n\n  const data = await res.json();\n  return data;\n};\n\nconst User = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`/api/user/${id}`, fetcher);\n\n  if (error) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Alert\"], {\n      status: \"error\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 12\n      }\n    }, \"Loading failed: \", error.message);\n  }\n\n  if (!data) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Alert\"], {\n      status: \"info\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"SimpleGrid\"], {\n    columns: 2,\n    width: \"2xs\",\n    spacingY: 4,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"UserID\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, data.id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Name\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, data.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    fontWeight: \"bold\",\n    marginRight: 4,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Email\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, data.email));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyLy50c3g/MDNiYyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImVycm9yIiwidXNlU1dSIiwibWVzc2FnZSIsIm5hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFPQyxHQUFQLElBQXVCO0FBQ3JDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBdkI7O0FBQ0EsTUFBRyxDQUFDQyxHQUFHLENBQUNFLEVBQVIsRUFBWTtBQUNWLFVBQU1DLEtBQUssQ0FBQyw2QkFBRCxDQUFYO0FBQ0Q7O0FBQ0QsUUFBTUMsSUFBaUQsR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUosRUFBaEU7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQ0FQRDs7QUFTQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFDQSxRQUFNO0FBQUVOLFFBQUY7QUFBUU87QUFBUixNQUFrQkMsMENBQU0sQ0FBRSxhQUFZSCxFQUFHLEVBQWpCLEVBQW9CWCxPQUFwQixDQUE5Qjs7QUFFQSxNQUFHYSxLQUFILEVBQVU7QUFDUixXQUFPLE1BQUMscURBQUQ7QUFBTyxZQUFNLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF3Q0EsS0FBSyxDQUFDRSxPQUE5QyxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDVCxJQUFKLEVBQVU7QUFDUixXQUFPLE1BQUMscURBQUQ7QUFBTyxZQUFNLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQVksV0FBTyxFQUFFLENBQXJCO0FBQXdCLFNBQUssRUFBQyxLQUE5QjtBQUFvQyxZQUFRLEVBQUUsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxJQUFJLENBQUNLLEVBQVosQ0FGRixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQUtFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTCxJQUFJLENBQUNVLElBQVosQ0FMRixFQU9FLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsZUFBVyxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixJQUFJLENBQUNXLEtBQVosQ0FSRixDQURGO0FBWUQsQ0F6QkQ7O0FBMkJlVCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXIvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgU2ltcGxlR3JpZCwgVGV4dCwgQWxlcnQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcignU29tZXRoaW5nIGNyYXBweSBoYXBwZW5lZCEhJyk7XG4gIH1cbiAgY29uc3QgZGF0YTogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5jb25zdCBVc2VyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYC9hcGkvdXNlci8ke2lkfWAsIGZldGNoZXIpOyAgXG5cbiAgaWYoZXJyb3IpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+TG9hZGluZyBmYWlsZWQ6IHsgZXJyb3IubWVzc2FnZSB9PC9BbGVydD5cbiAgfVxuXG4gIGlmKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxBbGVydCBzdGF0dXM9XCJpbmZvXCI+TG9hZGluZyAuLi48L0FsZXJ0PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSB3aWR0aD1cIjJ4c1wiIHNwYWNpbmdZPXs0fT5cbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbWFyZ2luUmlnaHQ9ezR9PlVzZXJJRDwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLmlkfTwvVGV4dD5cblxuICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtYXJnaW5SaWdodD17NH0+TmFtZTwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLm5hbWV9PC9UZXh0PlxuXG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG1hcmdpblJpZ2h0PXs0fT5FbWFpbDwvVGV4dD5cbiAgICAgIDxUZXh0PntkYXRhLmVtYWlsfTwvVGV4dD5cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });