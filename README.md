# Coffeekraken s-equalize-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/Coffeekraken/s-equalize-component">
		<img src="https://img.shields.io/travis/Coffeekraken/s-equalize-component.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/coffeekraken-s-equalize-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-datepicker.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-equalize-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-datepicker.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-equalize-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-datepicker.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-equalize-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-equalize-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-equalize-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-equalize-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Simply made some equal height columns

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-equalize-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [Sugar Web Components Documentation](https://github.com/Coffeekraken/sugar/blob/master/doc/webcomponent.md)
6. [Browsers support](#readme-browsers-support)
7. [Contribute](#readme-contribute)
8. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
9. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-equalize-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your javascript file like so:

```js
import SEqualizeComponent from 'coffeekraken-s-equalize-component'
```

Then simply use it inside your html like so:

```html
<div style="overflow:hidden">
	<div class="my-cool-column tf vr" style="width:400px; float:left;">
		<s-equalize group="cols">
			<h4>Column 1</h4>
			<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
			<s-equalize-equalizer></s-equalize-equalizer>
			<a href="javascript:void(0);" class="btn btn--primary">
				More infos...
			</a>
		</s-equalize>
	</div>
	<div class="my-cool-column tf vr" style="width:400px; float:left;">
		<s-equalize group="cols">
			<h4>Column 2</h4>
			<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
			<s-equalize-equalizer></s-equalize-equalizer>
			<a href="javascript:void(0);" class="btn btn--primary">
				More infos...
			</a>
		</s-equalize>
	</div>
</div>
```

<a id="readme-browsers-support"></a>
## Browsers support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
