"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "(api)/./pages/api/users/index.ts":
/*!**********************************!*\
  !*** ./pages/api/users/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handler = async (req, res)=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/\");\n    const users = await response.json();\n    res.status(200).json({\n        users\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFDLE1BQU1BLE9BQU8sR0FBRyxPQUFPQyxHQUFPLEVBQUVDLEdBQU8sR0FBSztJQUM1QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0lBQzNFLE1BQU1DLEtBQUssR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtJQUNuQ0osR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztRQUFDRCxLQUFLO0tBQUMsQ0FBQyxDQUFDO0NBQzlCO0FBQ0QsaUVBQWVMLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHM/ZThhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIgY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6YW55LCByZXM6YW55KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvXCIpXG5cdGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbih7dXNlcnN9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImZldGNoIiwidXNlcnMiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.ts"));
module.exports = __webpack_exports__;

})();