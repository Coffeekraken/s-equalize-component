# SEqualizeComponent

Extends **SWebComponent**

Simply made some equal height columns.


### Example
```html
	<div class="my-cool-column tf" style="width:400px; float:left;">
	<s-equalize group="cols">
 	<h4>Column 1</h4>
 	<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
 	<s-equalize-equalizer></s-equalize-equalizer>
 	<a href="javascript:void(0);" class="btn btn--primary">
  		More infos...
		</a>
 </s-equalize>
</div>
<div class="my-cool-column tf" style="width:400px; float:left;">
	<s-equalize group="cols">
 	<h4>Column 1</h4>
 	<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
 	<s-equalize-equalizer></s-equalize-equalizer>
 	<a href="javascript:void(0);" class="btn btn--primary">
  		More infos...
		</a>
 </s-equalize>
</div>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>



## Examples

Here's some usage examples.

### Equalize

Simply made some equal height columns.

#### Example
```html
	<div class="my-cool-column tf" style="width:400px; float:left;">
	<s-equalize group="cols">
 	<h4>Column 1</h4>
 	<p>Integer congue a nibh sed elementum. Mauris ligula sem, scelerisque.</p>
 	<s-equalize-equalizer></s-equalize-equalizer>
 	<a href="javascript:void(0);" class="btn btn--primary">
  		More infos...
		</a>
 </s-equalize>
</div>
<div class="my-cool-column tf" style="width:400px; float:left;">
	<s-equalize group="cols">
 	<h4>Column 1</h4>
 	<p>Donec scelerisque eu felis sit amet sodales. Nam sit amet lacus purus. Aliquam rutrum facilisis velit non egestas. Maecenas condimentum condimentum eleifend. Ut sed massa tempus, pellentesque orci id, facilisis dolor. Integer ac ligula convallis, egestas sem ut, luctus purus.</p>
 	<s-equalize-equalizer></s-equalize-equalizer>
 	<a href="javascript:void(0);" class="btn btn--primary">
  		More infos...
		</a>
 </s-equalize>
</div> * @see 			https://github.com/Coffeekraken/s-google-map-component/tree/release/0.0.1
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


## Attributes

Here's the list of available attribute to set on the element.

### group

Specify the group name that the equalize element belong to

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### resizeTimeout

Specify the timeout to wait before resize again after a window resizeTimeout

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **200**




## Methods


### equalizerElm

Return the equalizer HTMLElement if exist

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The equalizer HTMLElement


### refreshLines

Refresh the lines values


### getLineFromElm

Get the line object from an HTMLElement


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the line from  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The line object


### equalizeLine

Equalize the passed line


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
line  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The line object to equalize the elements from  |  required  |


### equalize

Equalize from an element or a line object


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elmOrLine  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) , [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An HTMLElement that belong to a line or directly a line object  |  optional  |  null

Default : **null) {**