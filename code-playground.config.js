module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-equalize-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-equalize-component
				</h1>
				<p class="p m-b-bigger">
					Simply made some equal height columns
				</p>
				<div style="overflow:hidden">
					<div class="my-cool-column tf vr" style="width:200px; float:left;">
						<s-equalize group="cols">
							<h4>Column 1</h4>
							<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
							<s-equalize-equalizer></s-equalize-equalizer>
							<a href="javascript:void(0);" class="btn btn--primary">
								More infos...
							</a>
						</s-equalize>
					</div>
					<div class="my-cool-column tf vr" style="width:200px; float:left;">
						<s-equalize group="cols">
							<h4>Column 2</h4>
							<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
							<s-equalize-equalizer></s-equalize-equalizer>
							<a href="javascript:void(0);" class="btn btn--primary">
								More infos...
							</a>
						</s-equalize>
					</div>
					<div class="my-cool-column tf vr" style="width:200px; float:left;">
						<s-equalize group="cols">
							<h4>Column 3</h4>
							<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend.</p>
							<s-equalize-equalizer></s-equalize-equalizer>
							<a href="javascript:void(0);" class="btn btn--primary">
								More infos...
							</a>
						</s-equalize>
					</div>
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@import 'node_modules/coffeekraken-s-button-component/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				@include s-button-classes();
				body {
					padding: s-space(big);
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import SEqualizeComponent from './dist/index'
			`
		}
	}
}
