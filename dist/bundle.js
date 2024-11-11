/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getFetch() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch(`http://localhost:3000/drivers`);\n            const data = yield response.json();\n            return data;\n        }\n        catch (error) {\n            console.log(error + \"ma'lumot olinmadi :(\");\n        }\n    });\n}\nlet driversUi = document.getElementById(\"driversUi\");\nlet driversNumber = document.getElementById(\"driversNumber\");\nlet allPrice = document.getElementById(\"allPrice\");\ngetFetch().then((data) => {\n    let count = 0;\n    let countAllPrice = \"5660.00\";\n    let AllPriceInfo = 0;\n    driversNumber.textContent = data.length + ` Person`;\n    data.forEach((item) => {\n        count++;\n        countAllPrice = item.price.replace(/[$]/g, \"\");\n        AllPriceInfo += parseFloat(countAllPrice);\n        countAllPrice = countAllPrice.toString();\n        if (count < 6) {\n            driversUi.innerHTML += `\r\n            <tr class=\"border-t\">\r\n            \t<td id=\"userId\" class=\"py-2\">${item.userId}</td>\r\n            \t<td>\r\n            \t\t<span id=\"carNumber\" class=\"px-2 py-1 bg-gray-100 rounded-lg\">\r\n                    ${item.carNumber}\r\n            \t\t</span>\r\n            \t</td>\r\n            \t<td class=\"flex items-center mt-2 space-x-2\">\r\n            \t\t<img\r\n            \t\t\tid=\"userImg\"\r\n            \t\t\tsrc=\"${item.userImg}\"\r\n            \t\t\talt=\"Driver\"\r\n            \t\t\tclass=\"w-6 h-6 rounded-full\" />\r\n            \t\t<span class=\"driver\">${item.driver}</span>\r\n            \t</td>\r\n            \t<td id=\"status\" class=\"font-semibold text-green-500\">\r\n                ${item.status}\r\n            \t</td>\r\n            \t<td class=\"price\">${item.price}</td>\r\n            \t<td>\r\n            \t\t<button\r\n            \t\t\tclass=\"px-4 py-1 text-sm text-white bg-blue-500 rounded-lg\">\r\n            \t\t\tDetails\r\n            \t\t</button>\r\n            \t</td>\r\n            </tr>\r\n        `;\n        }\n        allPrice.textContent = String(AllPriceInfo) + \"$\";\n    });\n});\n\n\n//# sourceURL=webpack://vazifa-19-main/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;