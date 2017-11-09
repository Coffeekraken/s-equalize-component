import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
import __offset from 'coffeekraken-sugar/js/dom/offset'
import __whenVisible from 'coffeekraken-sugar/js/dom/whenVisible'
import __whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'

/**
 * @name 	SEqualizeComponent
 * @extends 	SWebComponent
 * Simply made some equal height columns.
 *
 * @example 	html
 * <div style="overflow:hidden">
 * 	<div class="my-cool-column tf vr" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 1</h4>
 *  	<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div>
 * <div class="my-cool-column tf vr" style="width:400px; float:left;">
 * 	<s-equalize group="cols">
 *  	<h4>Column 2</h4>
 *  	<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
 *  	<s-equalize-equalizer></s-equalize-equalizer>
 *  	<a href="javascript:void(0);" class="btn btn--primary">
 *   		More infos...
 * 		</a>
 *  </s-equalize>
 * </div>
 * </div>
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SEqualizeComponent extends SWebComponent {

	/**
	 * Store the groups
	 * @type	{Object}
	 */
	static _groups = {};

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
			/**
			 * Specify the group name that the equalize element belong to
			 * @prop
			 * @type 	{String}
			 */
			group : null,

			/**
			 * Specify the timeout to wait before resize again after a window resizeTimeout
			 * @prop
			 * @type 	{Number}
			 */
			resizeTimeout : 200
		};
	}

	static get mountDependencies() {
		return [function() {
			return __whenVisible(this);
		}];
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return ['group'];
	}

	/**
	 * Css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display : block;
			}
		`;
	}

	/**
	 * Component will mount
 	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		if ( ! SEqualizeComponent._groups[this.props.group]) {
			SEqualizeComponent._groups[this.props.group] = {
				refreshLinesInProgress : false,
				elements : [],
				lines : []
			};
		}
		SEqualizeComponent._groups[this.props.group].elements = document.querySelectorAll(`${this._componentNameDash}[group="${this.props.group}"]`);

		// init lines
		this.lines = [];

		// wait a small amount of time
		// to avoid some weird layout issues
		setTimeout(() => {
			// refresh lines first time
			this.refreshLines();
			// equalize
			this.equalize();
		}, 100);

		// listen for resizing window
		let resizeWindowTimeout;
		window.addEventListener('resize', (e) => {
			clearTimeout(resizeWindowTimeout);
			resizeWindowTimeout = setTimeout(() => {
				this.equalize();
			},this.props.resizeTimeout);
		});

		// listen for webfonts loaded
		const htmlElm = document.querySelector('html');
		if (htmlElm && window.WebFont) {
			__whenAttribute(document.querySelector('html'), 'class', () => {
				return htmlElm.classList.contains('wf-active');
			}).then(() => {
				setTimeout(() => {
					this.refreshLines(true); // force refresh
					this.equalize();
				},200);
			});
		}
	}

	/**
	 * Return the equalizer(s) HTMLElement if exist
	 * @return 	{HTMLElement} 		The equalizer(s) HTMLElement
	 */
	get equalizerElms() {
		if (this._equalizerElmsCache) return this._equalizerElmsCache;
		this._equalizerElmsCache = this.querySelectorAll(`${this._componentNameDash}-equalizer`);
		return this._equalizerElmsCache;
	}

	/**
	 * Refresh the lines values
	 */
	refreshLines(force = false) {
		if ( ! force) {
			if (SEqualizeComponent._groups[this.props.group].refreshLinesInProgress) return;
			SEqualizeComponent._groups[this.props.group].refreshLinesInProgress = true;
			setTimeout(() => {
				SEqualizeComponent._groups[this.props.group].refreshLinesInProgress = false;
			}, 100);
		}

		// loop on all the columns
		let offsetTop;
		this.lines = [];
		let line = {
			inProgress : false,
			height : 0,
			elements : []
		};
		[].forEach.call(SEqualizeComponent._groups[this.props.group].elements, (elm) => {

			// reset the equalizer or element min-height
			// to get the real height of the element
			if (elm.equalizerElms) {
				[].forEach.call(elm.equalizerElms, (equalizerElm) => {
					equalizerElm.style.minHeight = 0;
				});
			} else {
				elm.style.minHeight = 0;
			}

			const elmHeight = elm.offsetHeight;
			const elmOffset = __offset(elm);

			// check if is on new line
			if (offsetTop !== elmOffset.top && line.height > 0) {
				// add the new line to lines stack
				this.lines.push(line);
				// reset the line
				line = {
					inProgress : false,
					height : 0,
					elements : []
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
	getLineFromElm(elm) {
		// loop on lines
		for(let key in SEqualizeComponent._groups[this.props.group].lines) {
			const line = SEqualizeComponent._groups[this.props.group].lines[key];
			if (line.elements.indexOf(elm) !== -1) return line;
		}
		return null;
	}

	/**
	 * Equalize the passed line
	 * @param 		{Object} 		line 		The line object to equalize the elements from
	 */
	equalizeLine(line) {

		// do nothing if the line is already in progress
		if (line.inProgress) return;
		// flag the line as inProgress
		line.inProgress = true;

		// refresh lines
		// don't worry, it will not do the work
		// every time it is called but only 1 by group every 100ms
		this.refreshLines();

		setTimeout(() => {
			// loop on each columns
			[].forEach.call(line.elements, (element) => {
				element.classList.add('clear-transmations');
				// reset the equalizer or element min-height
				// to get the real height of the element
				if (element.equalizerElms) {
					[].forEach.call(element.equalizerElms, (equalizerElm) => {
						equalizerElm.style.minHeight = 0;
					});
				} else {
					element.style.minHeight = 0;
				}
			});
			// loop on each columns
			[].forEach.call(line.elements, (element) => {
				// check if some equalizer(s) exist to use it/them
				// @TODO : find a way to not query each time in the column for the equalizer
				// reset the equalizer or element min-height
				// to get the real height of the element
				if (element.equalizerElms) {
					const equalizersHeight = (line.height - element.offsetHeight) / element.equalizerElms.length;
					[].forEach.call(element.equalizerElms, (equalizerElm) => {
						equalizerElm.style.display = 'block';
						equalizerElm.style.minHeight = equalizersHeight + 'px';
					});
				} else {
					element.style.minHeight = line.height + 'px';
				}
			});
			[].forEach.call(line.elements, (element) => {
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
	equalize(elmOrLine = null) {
		// if we have an element passed
		if (elmOrLine && elmOrLine.tagName) {
			// equalize from an element
			const line = this.getLineFromElm(elmOrLine);
			if ( ! line) return;
			this.equalizeLine(line);
		} else if (elmOrLine && elmOrLine.elements) {
			// equalize a line directly
			this.equalizeLine(elmOrLine);
		} else {
			// equalize the whole set
			SEqualizeComponent._groups[this.props.group].lines.forEach((line) => {
				// equalize line
				this.equalizeLine(line);
			});
		}
		setTimeout(() => {
			__dispatchEvent(this, 'update:height');
		});
	}
}
