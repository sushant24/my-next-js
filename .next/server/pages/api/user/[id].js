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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/user/[id].ts":
/*!********************************!*\
  !*** ./pages/api/user/[id].ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DUMMY_DATA = [{\n  id: '1',\n  name: 'John Doe',\n  email: 'jdoe@super.org'\n}, {\n  id: '2',\n  name: 'Martha Roe',\n  email: 'martharoe1@world.org'\n}];\n\nconst user = (req, res) => {\n  const {\n    id\n  } = req.query;\n  const user = DUMMY_DATA.find(item => String(item.id) === String(id));\n\n  if (user) {\n    res.status(200).json(user);\n  } else {\n    res.status(404).end();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci8udHM/NmMwMyJdLCJuYW1lcyI6WyJEVU1NWV9EQVRBIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJ1c2VyIiwicmVxIiwicmVzIiwicXVlcnkiLCJmaW5kIiwiaXRlbSIsIlN0cmluZyIsInN0YXR1cyIsImpzb24iLCJlbmQiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFDbEJDLElBQUUsRUFBRSxHQURjO0FBRWxCQyxNQUFJLEVBQUUsVUFGWTtBQUdsQkMsT0FBSyxFQUFFO0FBSFcsQ0FBRCxFQUloQjtBQUNERixJQUFFLEVBQUUsR0FESDtBQUVEQyxNQUFJLEVBQUUsWUFGTDtBQUdEQyxPQUFLLEVBQUU7QUFITixDQUpnQixDQUFuQjs7QUFXQSxNQUFNQyxJQUFtQixHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3hDLFFBQU07QUFBRUw7QUFBRixNQUFTSSxHQUFHLENBQUNFLEtBQW5CO0FBQ0EsUUFBTUgsSUFBSSxHQUFHSixVQUFVLENBQUNRLElBQVgsQ0FBZ0JDLElBQUksSUFBSUMsTUFBTSxDQUFDRCxJQUFJLENBQUNSLEVBQU4sQ0FBTixLQUFvQlMsTUFBTSxDQUFDVCxFQUFELENBQWxELENBQWI7O0FBQ0EsTUFBR0csSUFBSCxFQUFTO0FBQ1BFLE9BQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixJQUFyQjtBQUNELEdBRkQsTUFFTztBQUNMRSxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCRSxHQUFoQjtBQUNEO0FBQ0YsQ0FSRDs7QUFVZVQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBEVU1NWV9EQVRBID0gW3tcbiAgaWQ6ICcxJyxcbiAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgZW1haWw6ICdqZG9lQHN1cGVyLm9yZycsXG59LCB7XG4gIGlkOiAnMicsXG4gIG5hbWU6ICdNYXJ0aGEgUm9lJyxcbiAgZW1haWw6ICdtYXJ0aGFyb2UxQHdvcmxkLm9yZycsXG59XG5dXG5cbmNvbnN0IHVzZXI6TmV4dEFwaUhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCB1c2VyID0gRFVNTVlfREFUQS5maW5kKGl0ZW0gPT4gU3RyaW5nKGl0ZW0uaWQpID09PSBTdHJpbmcoaWQpKTtcbiAgaWYodXNlcikge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/[id].ts\n");

/***/ })

/******/ });