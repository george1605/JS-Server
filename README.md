#  Liquify 💧
A new js framework with full stack support.<br>
Uses node.js as it's backend, but will support
bindings for more languages.

<b>Example:</b>
<br>
```js
var state = 0;
var elem = document.newVElement("p");
button.onclick = function() {
  state++;
  document.formatVElement(elem, state);
}
```
<br>
<b>Features:</b>
<ul>
 <li>Virtual DOM</li>
 <li>Custom Iframes</li>
 <li>Node.js HTML Runner</li>
 <li>Wrapper for SQL</li>
 <li>more</li>
</ul>
</br>

<b>Tests:</b><br>
  Iframe test - *PASSED*<br>
  Canvas test - *PASSED*
<br>
<b>How to install:</b><br>
Run '''
liquify get [filename]
''' or download the source directly from GitHub 
The files in the root directory are frontend scripts<br>
that can be simply included via script tags.
