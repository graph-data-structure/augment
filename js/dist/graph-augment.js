"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/augment.js */

		var augment = function augment(G) {

			return {

				"with": function _with() {

					var H = G;

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _len = arguments.length, features = Array(_len), _key = 0; _key < _len; _key++) {
							features[_key] = arguments[_key];
						}

						for (var _iterator = features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var feature = _step.value;
							H = feature(H);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator["return"]) {
								_iterator["return"]();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return H;
				}

			};
		};

		exports.augment = augment;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("@aureooms/js-graph-augment", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["graphaugment"] = {});
	} else console.error("unable to detect type of module to define for @aureooms/js-graph-augment");
})();