"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\nlet mainDiv = document.getElementById(\"content\");\nmainDiv.innerText = \"\";\n\n\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.tabSite)()\n\n\nfunction menuMain(){\n    let menuH1 = document.createElement(\"h1\")\n    menuH1.setAttribute(\"id\", \"menuTitle\")\n    menuH1.innerText = \"The Resturant Menu Page\"\n    mainDiv.appendChild(menuH1);\n}\n\nmenuMain()\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

}]);