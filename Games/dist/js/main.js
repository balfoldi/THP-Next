/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Button/index.js":
/*!****************************************!*\
  !*** ./src/Components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/Components/Button/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Button = function Button(id, content) {\n  var variant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var classNames = ['button', 'Button'];\n\n  if (variant === 'primary') {\n    classNames.push('button--primary');\n  } else if (variant === 'secondary') {\n    classNames.push('button--secondary');\n  }\n\n  if (variant === 'outlined') {\n    classNames.push('Button--outlined');\n  }\n\n  return \"<button class=\\\"\".concat(classNames.join(' '), \"\\\" id=\\\"\").concat(id, \"\\\">\").concat(content, \"</button>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/Components/Button/index.js?");

/***/ }),

/***/ "./src/Components/Button/index.scss":
/*!******************************************!*\
  !*** ./src/Components/Button/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/Button/index.scss?");

/***/ }),

/***/ "./src/Components/GameCard/index.js":
/*!******************************************!*\
  !*** ./src/Components/GameCard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/Components/GameCard/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar GameCard = function GameCard(gameData) {\n  var releaseDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(gameData.released);\n  return \"\\n        <li class=\\\"GameCard card\\\">\\n            <a href=\\\"#detail/\".concat(gameData.id, \"\\\">\\n                \").concat(gameData.background_image ? \"<img src=\\\"\".concat(gameData.background_image, \"\\\" alt=\\\"\").concat(gameData.name, \"\\\" class=\\\"GameCard__image\\\" />\") : \"\", \"\\n                <div class=\\\"card__content\\\">\\n                    <h3 class=\\\"GameCard__name\\\">\\n                        \").concat(gameData.name, \"\\n                    </h3>\\n                    <p>Sorti le \").concat(releaseDate.format('DD/MM/YYYY'), \"</p>\\n                </div>\\n            </a>\\n        </li>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCard);\n\n//# sourceURL=webpack:///./src/Components/GameCard/index.js?");

/***/ }),

/***/ "./src/Components/GameCard/index.scss":
/*!********************************************!*\
  !*** ./src/Components/GameCard/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/GameCard/index.scss?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL, PAGE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_SIZE\", function() { return PAGE_SIZE; });\nvar API_URL = 'https://api.rawg.io/api';\nvar PAGE_SIZE = 9;\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/_index.scss */ \"./src/style/_index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\nvar searchInput = document.querySelector('.SearchBar__input');\nvar appElement = document.getElementById('app');\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  var pageName = path[0] || \"\";\n  var pageArgument = path[1] || undefined;\n  appElement.innerHTML = '';\n\n  if (!Object.keys(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).includes(pageName)) {\n    _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notFound(appElement);\n    return;\n  }\n\n  _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName](appElement, pageArgument);\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/Home/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home(appElement) {\n  var renderPage = function renderPage(content) {\n    appElement.innerHTML = \"\\n            <div class=\\\"Home\\\">\\n                <div class=\\\"Home__header\\\">\\n                    <h2 class=\\\"Home__header__title type-light\\\">Bienvenue !</h2>\\n                </div>\\n                <div class=\\\"Home__content\\\">\\n                    \".concat(content, \"\\n                    <a href=\\\"#list\\\">Voir les jeux r\\xE9cents</a>\\n                </div>\\n            </div>\\n        \");\n  };\n\n  renderPage('<p>Heureux de vous revoir.</p>');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/Home/index.js?");

/***/ }),

/***/ "./src/pages/Home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/Home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Home/index.scss?");

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/NotFound/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound(appElement) {\n  var pageTemplate = \"\\n    <div class=\\\"NotFound\\\">\\n        <p>Cette page n'existe pas.</p>\\n        <a href=\\\"#\\\">Retour \\xE0 l'accueil</a>\\n    </div>\\n    \";\n  appElement.innerHTML = pageTemplate;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/pages/NotFound/index.js?");

/***/ }),

/***/ "./src/pages/NotFound/index.scss":
/*!***************************************!*\
  !*** ./src/pages/NotFound/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/NotFound/index.scss?");

/***/ }),

/***/ "./src/pages/PageDetail/index.js":
/*!***************************************!*\
  !*** ./src/pages/PageDetail/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/PageDetail/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PageDetail = function PageDetail(appElement, gameId) {\n  var renderPage = function renderPage(content) {\n    appElement.innerHTML = \"\\n            <div class=\\\"PageDetail\\\">\\n                <div class=\\\"PageDetail__header\\\">\\n                    <h2 class=\\\"PageDetail__header__title type-light\\\">Bienvenue !</h2>\\n                </div>\\n                <div class=\\\"PageDetail__content\\\">\\n                    \".concat(content, \"\\n                    <a href=\\\"#list\\\">Retour \\xE0 la liste des jeux r\\xE9cents</a>\\n                </div>\\n            </div>\\n        \");\n  };\n\n  renderPage(\"<p>TODO : Affichage des d\\xE9tails du jeu #\".concat(gameId, \" (apr\\xE8s fetch)</p>\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageDetail);\n\n//# sourceURL=webpack:///./src/pages/PageDetail/index.js?");

/***/ }),

/***/ "./src/pages/PageDetail/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/PageDetail/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/PageDetail/index.scss?");

/***/ }),

/***/ "./src/pages/PageList/index.js":
/*!*************************************!*\
  !*** ./src/pages/PageList/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/PageList/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var _Components_GameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/GameCard */ \"./src/Components/GameCard/index.js\");\n/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Button */ \"./src/Components/Button/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar PageList = function PageList(appElement) {\n  var currentPage = 1;\n  var currentSearchTerm = '';\n  var maxPage = 3;\n  var articles = [];\n\n  var fetchGames = function fetchGames() {\n    if (currentPage > maxPage) {\n      return;\n    }\n\n    var dateStart = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'month');\n    var dateEnd = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'month');\n    var dates = \"\".concat(dateStart.format('YYYY-MM-DD'), \",\").concat(dateEnd.format('YYYY-MM-DD'));\n    var url = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"], \"/games?ordering=-released&page_size=\").concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"PAGE_SIZE\"], \"&page=\").concat(currentPage);\n    var finalUrl = \"\".concat(url, \"&dates=\").concat(dates);\n\n    if (currentSearchTerm) {\n      finalUrl = \"\".concat(url, \"&search=\").concat(currentSearchTerm);\n    }\n\n    fetch(finalUrl).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      handleFetchResults(data);\n    })[\"catch\"](function (error) {\n      renderPage(\"<p class=\\\"type-error\\\">\".concat(error.message, \"</p>\"));\n    });\n  };\n\n  var handleFetchResults = function handleFetchResults(data) {\n    if ((!data.results || data.results.length === 0) && articles.length === 0) {\n      throw new Error('Aucun résultat trouvé !');\n    }\n\n    articles = [].concat(_toConsumableArray(articles), _toConsumableArray(data.results));\n    clearMoreButtonEvent();\n    renderGames();\n    bindMoreButtonEvent();\n  };\n\n  var handleSearch = function handleSearch() {\n    var _document$getElementB = document.getElementById('searchInput'),\n        value = _document$getElementB.value;\n\n    var searchTerm = value.trim().replace(/\\s+/g, '-');\n\n    if (searchTerm !== currentSearchTerm) {\n      currentSearchTerm = searchTerm;\n      currentPage = 1;\n      articles = [];\n    }\n\n    fetchGames();\n  };\n\n  var renderPage = function renderPage(content) {\n    var oldSearchButton = document.getElementById('searchButton');\n\n    if (oldSearchButton) {\n      oldSearchButton.removeEventListener('click', handleSearch);\n    }\n\n    appElement.innerHTML = \"\\n            <div class=\\\"PageList\\\">\\n                <div class=\\\"PageList__header\\\">\\n                    <h2 class=\\\"PageList__header__title\\\">Les jeux les plus r\\xE9cents</h2>\\n                    <input\\n                        type=\\\"search\\\"\\n                        class=\\\"PageList__header__input\\\"\\n                        id=\\\"searchInput\\\"\\n                        placeholder=\\\"Recherche...\\\"\\n                        value=\\\"\".concat(currentSearchTerm, \"\\\"\\n                    />\\n                    \").concat(Object(_Components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('searchButton', 'GO', 'secondary'), \"\\n                </div>\\n                <div class=\\\"PageList__content\\\">\").concat(content, \"</div>\\n            </div>\\n        \");\n    var newSearchbutton = document.getElementById('searchButton');\n    newSearchbutton.addEventListener('click', handleSearch);\n  };\n\n  var renderGames = function renderGames() {\n    return renderPage(\"\\n        <ul class=\\\"PageList__games\\\">\\n            \".concat(articles.map(function (game) {\n      return Object(_Components_GameCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(game);\n    }).join(''), \"\\n        </ul>\\n        \").concat(currentPage < maxPage ? \"<div class=\\\"type-center margin-lg margin-y\\\">\\n                    \".concat(Object(_Components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('loadMoreGames', 'Charger plus', 'primary'), \"\\n                </div>\") : '', \"\\n    \"));\n  };\n\n  var handleClickLoadMore = function handleClickLoadMore(event) {\n    var button = event.currentTarget;\n    button.innerHTML = 'Chargement...';\n    currentPage += 1;\n    fetchGames();\n  };\n\n  var clearMoreButtonEvent = function clearMoreButtonEvent() {\n    var loadMoreButton = document.getElementById('loadMoreGames');\n\n    if (loadMoreButton) {\n      loadMoreButton.removeEventListener('click', handleClickLoadMore);\n    }\n  };\n\n  var bindMoreButtonEvent = function bindMoreButtonEvent() {\n    var loadMoreButton = document.getElementById('loadMoreGames');\n\n    if (loadMoreButton) {\n      loadMoreButton.addEventListener('click', handleClickLoadMore);\n      loadMoreButton.innerHTML = 'Charger plus';\n    }\n  };\n\n  renderPage('<p class=\"type-light\">Chargement, veuillez patienter...</p>');\n  fetchGames();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageList);\n\n//# sourceURL=webpack:///./src/pages/PageList/index.js?");

/***/ }),

/***/ "./src/pages/PageList/index.scss":
/*!***************************************!*\
  !*** ./src/pages/PageList/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/PageList/index.scss?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.js\");\n/* harmony import */ var _pages_PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/PageList */ \"./src/pages/PageList/index.js\");\n/* harmony import */ var _pages_PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/PageDetail */ \"./src/pages/PageDetail/index.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/pages/NotFound/index.js\");\n\n\n\n\nvar routes = {\n  '': _pages_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'list': _pages_PageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'detail': _pages_PageDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'notFound': _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/style/_index.scss":
/*!*******************************!*\
  !*** ./src/style/_index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/_index.scss?");

/***/ })

/******/ });