"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_contact_js"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n\n\n\n\nfunction menuMain(){\n    (0,_function__WEBPACK_IMPORTED_MODULE_1__.tabSite)()\n    ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.tabEvents)()\n    \n    let contactH1 = document.createElement(\"h1\")\n    contactH1.setAttribute(\"id\", \"contactTitle\")\n    contactH1.innerText = \"The Resturant Contact Page\"\n    mainDiv.appendChild(contactH1);\n}\n\n\nconst loadContact = () => {\n    let mainDiv = document.getElementById(\"content\");\n    mainDiv.innerText = \"\";\n    mainDiv.appendChild(menuMain())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ })

}]);