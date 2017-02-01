Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _dispatchEvent = require('coffeekraken-sugar/js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _offset = require('coffeekraken-sugar/js/dom/offset');

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import sTemplateIntegrator from 'coffeekraken-sugar/js/core/sTemplateIntegrator'


/**
 * @name 	SEqualizeComponent
 * @extends 	SWebComponent
 * Simply made some equal height columns.
 *
 * @example 	html
 * <div class="my-cool-column tf" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 1</h4>
 *  	<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div>
 * <div class="my-cool-column tf" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 1</h4>
 *  	<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div>
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */

/**
 * @name 			Equalize
 * Simply made some equal height columns.
 * @styleguide  	Webcomponents / Equalize
 * @example 		html
 * <div class="my-cool-column tf" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 1</h4>
 *  	<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div>
 * <div class="my-cool-column tf" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 1</h4>
 *  	<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div> * @see 			https://github.com/Coffeekraken/s-google-map-component/tree/release/{version}
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */

var SEqualizeComponent = function (_SWebComponent) {
	_inherits(SEqualizeComponent, _SWebComponent);

	function SEqualizeComponent() {
		_classCallCheck(this, SEqualizeComponent);

		return _possibleConstructorReturn(this, (SEqualizeComponent.__proto__ || Object.getPrototypeOf(SEqualizeComponent)).apply(this, arguments));
	}

	_createClass(SEqualizeComponent, [{
		key: 'componentWillMount',


		/**
   * Component will mount
  	 * @definition 		SWebComponent.componentWillMount
   * @protected
   */
		value: function componentWillMount() {
			_get(SEqualizeComponent.prototype.__proto__ || Object.getPrototypeOf(SEqualizeComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			var _this2 = this;

			_get(SEqualizeComponent.prototype.__proto__ || Object.getPrototypeOf(SEqualizeComponent.prototype), 'componentMount', this).call(this);

			if (!SEqualizeComponent._groups[this.props.group]) {
				SEqualizeComponent._groups[this.props.group] = {
					refreshLinesInProgress: false,
					elements: [],
					lines: []
				};
			}
			SEqualizeComponent._groups[this.props.group].elements = document.querySelectorAll(this._componentNameDash + '[group="' + this.props.group + '"]');

			// init lines
			this.lines = [];

			// refresh lines first time
			this.refreshLines();

			// equalize
			this.equalize();

			// listen for resizing window
			var resizeWindowTimeout = void 0;
			window.addEventListener('resize', function (e) {
				clearTimeout(resizeWindowTimeout);
				resizeWindowTimeout = setTimeout(function () {
					_this2.equalize();
				}, _this2.props.resizeTimeout);
			});
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   * @protected
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SEqualizeComponent.prototype.__proto__ || Object.getPrototypeOf(SEqualizeComponent.prototype), 'componentUnmount', this).call(this);
		}

		/**
   * Component will receive prop
   * @definition 		SWebComponent.componentWillReceiveProp
   * @protected
   */

	}, {
		key: 'componentWillReceiveProp',
		value: function componentWillReceiveProp(name, newVal, oldVal) {
			switch (name) {}
		}

		/**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition 		SWebComponent.render
   * @protected
   */

	}, {
		key: 'render',
		value: function render() {
			_get(SEqualizeComponent.prototype.__proto__ || Object.getPrototypeOf(SEqualizeComponent.prototype), 'render', this).call(this);
		}

		/**
   * Return the equalizer HTMLElement if exist
   * @return 	{HTMLElement} 		The equalizer HTMLElement
   */

	}, {
		key: 'refreshLines',


		/**
   * Refresh the lines values
   */
		value: function refreshLines() {
			var _this3 = this;

			if (SEqualizeComponent._groups[this.props.group].refreshLinesInProgress) return;
			SEqualizeComponent._groups[this.props.group].refreshLinesInProgress = true;
			setTimeout(function () {
				SEqualizeComponent._groups[_this3.props.group].refreshLinesInProgress = false;
			}, 100);
			// loop on all the columns
			var offsetTop = void 0;
			this.lines = [];
			var line = {
				inProgress: false,
				height: 0,
				elements: []
			};
			[].forEach.call(SEqualizeComponent._groups[this.props.group].elements, function (elm) {

				// reset the equalizer or element min-height
				// to get the real height of the element
				if (elm.equalizerElm) {
					elm.equalizerElm.style.minHeight = 0;
				} else {
					elm.style.minHeight = 0;
				}

				var elmHeight = elm.offsetHeight;
				var elmOffset = (0, _offset2.default)(elm);

				// check if is on new line
				if (offsetTop !== elmOffset.top && line.height > 0) {
					// add the new line to lines stack
					_this3.lines.push(line);
					// reset the line
					line = {
						inProgress: false,
						height: 0,
						elements: []
					};
				}
				// add the element in the line
				line.elements.push(elm);
				// check if the element is higher that the highest of the line
				if (elmHeight > line.height) {
					line.height = elmHeight;
				}
				// save the new offset
				offsetTop = elmOffset.top;
			});

			// add the last line
			this.lines.push(line);

			// save the lins in static stack
			SEqualizeComponent._groups[this.props.group].lines = this.lines;
		}

		/**
   * Get the line object from an HTMLElement
   * @param 		{HTMLElement} 		elm 		The element to get the line from
   * @return 		{Object} 		The line object
   */

	}, {
		key: 'getLineFromElm',
		value: function getLineFromElm(elm) {
			// loop on lines
			for (var key in SEqualizeComponent._groups[this.props.group].lines) {
				var line = SEqualizeComponent._groups[this.props.group].lines[key];
				if (line.elements.indexOf(elm) !== -1) return line;
			}
			return null;
		}

		/**
   * Equalize the passed line
   * @param 		{Object} 		line 		The line object to equalize the elements from
   */

	}, {
		key: 'equalizeLine',
		value: function equalizeLine(line) {

			// do nothing if the line is already in progress
			if (line.inProgress) return;
			// flag the line as inProgress
			line.inProgress = true;

			// refresh lines
			// don't worry, it will not do the work
			// every time it is called but only 1 by group every 100ms
			this.refreshLines();

			setTimeout(function () {
				// loop on each columns
				[].forEach.call(line.elements, function (element) {
					element.classList.add('clear-transmations');
					// reset the equalizer or element min-height
					// to get the real height of the element
					if (element.equalizerElm) {
						element.equalizerElm.style.minHeight = 0;
					} else {
						element.style.minHeight = 0;
					}
				});
				// loop on each columns
				[].forEach.call(line.elements, function (element) {
					// check if an equalizer exist to use it
					// @TODO : find a way to not query each time in the column for the equalizer
					// reset the equalizer or element min-height
					// to get the real height of the element
					if (element.equalizerElm) {
						element.equalizerElm.style.display = 'block';
						element.equalizerElm.style.minHeight = line.height - element.offsetHeight + 'px';
					} else {
						element.style.minHeight = line.height + 'px';
					}
				});
				[].forEach.call(line.elements, function (element) {
					element.classList.remove('clear-transmations');
				});
				// reset the line progress status
				line.inProgress = false;
			});
		}

		/**
   * Equalize from an element or a line object
   * @param 		{HTMLElement|Object} 		[elmOrLine=null] 		An HTMLElement that belong to a line or directly a line object
   */

	}, {
		key: 'equalize',
		value: function equalize() {
			var _this4 = this;

			var elmOrLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// if we have an element passed
			if (elmOrLine && elmOrLine.tagName) {
				// equalize from an element
				var line = this.getLineFromElm(elmOrLine);
				if (!line) return;
				this.equalizeLine(line);
			} else if (elmOrLine && elmOrLine.elements) {
				// equalize a line directly
				this.equalizeLine(elmOrLine);
			} else {
				// equalize the whole set
				SEqualizeComponent._groups[this.props.group].lines.forEach(function (line) {
					// equalize line
					_this4.equalizeLine(line);
				});
			}
			setTimeout(function () {
				(0, _dispatchEvent2.default)(_this4, 'update:height');
			});
		}
	}, {
		key: 'equalizerElm',
		get: function get() {
			if (this._equalizerElmCache) return this._equalizerElmCache;
			this._equalizerElmCache = this.querySelector(this._componentNameDash + '-equalizer');
			return this._equalizerElmCache;
		}
	}], [{
		key: 'css',


		/**
   * Css
   * @protected
   */
		value: function css(componentName, componentNameDash) {
			return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay : block;\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */
		get: function get() {
			return {
				/**
     * Specify the group name that the equalize element belong to
     * @prop
     * @type 	{String}
     */
				group: null,

				/**
     * Specify the timeout to wait before resize again after a window resizeTimeout
     * @prop
     * @type 	{Number}
     */
				resizeTimeout: 200
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   * @protected
   */


		/**
   * Store the groups
   * @type	{Object}
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['group'];
		}
	}]);

	return SEqualizeComponent;
}(_SWebComponent3.default);

// STemplate integration
// sTemplateIntegrator.registerComponentIntegration(SEqualizeComponent, (component) => {
// 	sTemplateIntegrator.ignore(component, {
// 		style : true,
// 	});
// 	if (component.equalizerElm) {
// 		sTemplateIntegrator.ignore(component.equalizerElm, {
// 			style : true
// 		});
// 	}
// });


SEqualizeComponent._groups = {};
exports.default = SEqualizeComponent;