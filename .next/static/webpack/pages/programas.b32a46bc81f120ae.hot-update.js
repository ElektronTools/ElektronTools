"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/programas",{

/***/ "./pages/programas.js":
/*!****************************!*\
  !*** ./pages/programas.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Programas = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Arreglo de posts\n    const posts = [\n        {\n            title: \"Proteus 8.17\",\n            imagenURL: \"https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG\"\n        },\n        {\n            title: \"Fritzing\",\n            imagenURL: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGscIxhwP37VRw0DemUYDWG06CxUQqyVex_Q&s\"\n        },\n        {\n            title: \"CadeSimu - PcSimu\",\n            imagenURL: \"https://miescapedigital.com/wp-content/uploads/2020/07/Cade-Simu-el-mejor-programa-para-la-simulaci%C3%B3n-de-circuitos.jpg\"\n        }\n    ];\n    const handleDownload = ()=>{\n        router.push(\"/proteus\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My Blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card text-center mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"overflow\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: post.imagenURL,\n                                        className: \"card-img-top\",\n                                        alt: \"Post\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"card-title\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: handleDownload,\n                                                className: \"btn btn-primary\",\n                                                children: \"Descargar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools_Proyect\\\\pages\\\\programas.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Programas, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Programas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Programas);\nvar _c;\n$RefreshReg$(_c, \"Programas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9ncmFtYXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUV4QyxNQUFNRSxZQUFZOztJQUNoQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsbUJBQW1CO0lBQ25CLE1BQU1HLFFBQVE7UUFDWjtZQUNFQyxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxXQUFXO1FBQ2I7S0FDRDtJQUVELE1BQU1DLGlCQUFpQjtRQUNyQkosT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1IsMERBQU1BO1FBQUNTLFFBQVE7UUFBT0osT0FBTTtRQUFVSyxJQUFJO2tCQUN6Qyw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVpSLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDaEIsOERBQUNKO3dCQUFZQyxXQUFVO2tDQUNyQiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0k7d0NBQUlDLEtBQUtILEtBQUtSLFNBQVM7d0NBQUVNLFdBQVU7d0NBQWVNLEtBQUk7Ozs7Ozs7Ozs7OzhDQUV6RCw4REFBQ1A7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBR1AsV0FBVTtzREFBYSw0RUFBQ1E7MERBQVFOLEtBQUtULEtBQUs7Ozs7Ozs7Ozs7O3NEQUM5Qyw4REFBQ007NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNTO2dEQUFPQyxTQUFTZjtnREFBZ0JLLFdBQVU7MERBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFSM0RHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdEI7R0FqRE1iOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFtRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbWFzLmpzP2ZhZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFByb2dyYW1hcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gQXJyZWdsbyBkZSBwb3N0c1xyXG4gIGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQcm90ZXVzIDguMTdcIixcclxuICAgICAgaW1hZ2VuVVJMOiBcImh0dHBzOi8vMy5icC5ibG9nc3BvdC5jb20vLXZJdWRsU0tMUmprL1d5SkMzUDU1ZGVJL0FBQUFBQUFBQXYwLzIwU1drbXlQZTI0aktURi13eFI4NUZyYUloV2dKRlJwUUNMY0JHQXMvczE2MDAvcDhuLkpQR1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJGcml0emluZ1wiLFxyXG4gICAgICBpbWFnZW5VUkw6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUUdzY0l4aHdQMzdWUncwRGVtVVlEV0cwNkN4VVFxeVZleF9RJnNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ2FkZVNpbXUgLSBQY1NpbXVcIixcclxuICAgICAgaW1hZ2VuVVJMOiBcImh0dHBzOi8vbWllc2NhcGVkaWdpdGFsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9DYWRlLVNpbXUtZWwtbWVqb3ItcHJvZ3JhbWEtcGFyYS1sYS1zaW11bGFjaSVDMyVCM24tZGUtY2lyY3VpdG9zLmpwZ1wiXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9wcm90ZXVzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9XCJNeSBCbG9nXCIgZGFyaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICB7LyogTWFwZW8gZGUgcG9zdHMgKi99XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCB0ZXh0LWNlbnRlciBtYi0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlblVSTH0gY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnIGFsdD1cIlBvc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2FyZC10aXRsZSc+PHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG93bmxvYWR9IGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIERlc2NhcmdhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtYXM7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJQcm9ncmFtYXMiLCJyb3V0ZXIiLCJwb3N0cyIsInRpdGxlIiwiaW1hZ2VuVVJMIiwiaGFuZGxlRG93bmxvYWQiLCJwdXNoIiwiZm9vdGVyIiwiZGFyayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJpIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/programas.js\n"));

/***/ })

});