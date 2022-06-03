"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userList",{

/***/ "./pages/userList.tsx":
/*!****************************!*\
  !*** ./pages/userList.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_bernie_development_youtube_nextjs_typescript_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bernie_development_youtube_nextjs_typescript_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bernie_development_youtube_nextjs_typescript_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar userList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        try {\n            var fetchUsers = function() {\n                var _ref = _asyncToGenerator(_Users_bernie_development_youtube_nextjs_typescript_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var response, data;\n                    return _Users_bernie_development_youtube_nextjs_typescript_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return fetch(\"http://localhost:3000/api/users\");\n                            case 2:\n                                response = _ctx.sent;\n                                _ctx.next = 5;\n                                return response.json();\n                            case 5:\n                                data = _ctx.sent;\n                                setUsers(data.users);\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function fetchUsers() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            fetchUsers();\n        } catch (error) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"User List API\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: [\n                                users.map(function(param) {\n                                    var id = param.id, name = param.name;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        children: name\n                                    }, id, false, {\n                                        fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, _this1);\n                                }),\n                                \"\\xdf\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                children: \"footer\"\n            }, void 0, false, {\n                fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bernie/development/youtube/nextjs/typescript/pages/userList.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(userList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (userList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2U7O0FBRzVDLElBQU1HLFFBQVEsR0FBYSxXQUFNOzs7SUFDL0IsSUFBMEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOeEMsS0FNYyxHQUFjQSxHQUFZLEdBQTFCLEVBTmQsUUFNd0IsR0FBSUEsR0FBWSxHQUFoQjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSTtZQUNGLElBQU1LLFVBQVU7MkJBQUcsb01BQVk7d0JBQ3ZCQyxRQUFRLEVBQ1JDLElBQUk7Ozs7O3VDQURhQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7O2dDQUF6REYsUUFBUSxZQUFpRDs7dUNBQzVDQSxRQUFRLENBQUNHLElBQUksRUFBRTs7Z0NBQTVCRixJQUFJLFlBQXdCO2dDQUNsQ0gsUUFBUSxDQUFDRyxJQUFJLENBQUNKLEtBQUssQ0FBQyxDQUFDOzs7Ozs7aUJBQ3RCO2dDQUpLRSxVQUFVOzs7ZUFJZjtZQUNEQSxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUMsT0FBT0ssS0FBSyxFQUFFLEVBQUU7S0FDbkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ1osa0RBQUk7O2tDQUNILDhEQUFDYSxPQUFLO2tDQUFDLGVBQWE7Ozs7OzZCQUFRO2tDQUM1Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzZCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzswQkFDUCw4REFBQ0MsTUFBSTswQkFDSCw0RUFBQ1IsS0FBRzs7c0NBQ0YsOERBQUNBLEtBQUc7Ozs7aUNBQVM7c0NBQ2IsOERBQUNTLElBQUU7O2dDQUNBakIsS0FBSyxDQUFDa0IsR0FBRyxDQUFDO3dDQUFHQyxFQUFFLFNBQUZBLEVBQUUsRUFBRVIsSUFBSSxTQUFKQSxJQUFJO3lEQUNwQiw4REFBQ1MsSUFBRTtrREFBV1QsSUFBSTt1Q0FBVFEsRUFBRTs7Ozs4Q0FBYTtpQ0FDekIsQ0FBQztnQ0FBQyxNQUNGO2dDQUFDLEdBQUc7Ozs7OztpQ0FDRjs7Ozs7O3lCQUNEOzs7OztxQkFDRDswQkFDUCw4REFBQ0UsUUFBTTswQkFBQyxRQUFNOzs7OztxQkFBUzs7Ozs7O2FBQ25CLENBQ047Q0FDSDtHQW5DS3RCLFFBQVE7QUFxQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyTGlzdC50c3g/YWE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RyZWFtL2NvbnN1bWVyc1wiO1xuXG5jb25zdCB1c2VyTGlzdDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRVc2VycyhkYXRhLnVzZXJzKTtcbiAgICAgIH07XG4gICAgICBmZXRjaFVzZXJzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlVzZXIgTGlzdCBBUEk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+e308L2Rpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh7IGlkLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR9PntuYW1lfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIMOfe1wiIFwifVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5mb290ZXI8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJMaXN0O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZXJMaXN0IiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoVXNlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwidWwiLCJtYXAiLCJpZCIsImxpIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userList.tsx\n");

/***/ })

});