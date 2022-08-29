function nodeFromString(string) {
  return document.createRange().createContextualFragment(string);
}

function parseJSX(element) {
  var tag = element.substring(element.indexOf("<"),element.indexOf(" "));
  var elem = document.createElement(tag);
  var attrs = element.match(/*="*"/g);
  for(var i = 0;i < attrs.length;i++)
    elem.setAttribute();
} 

var React = {
  useState: function(x) {
    x.internal = 0;
    return x;
  },
  createNode: function(name, props) {
    var keys = Object.keys(props);
    var elem = document.createElement(name);
    for(var i = 0;i < keys.length;i++)
       elem.setAttribute(keys[i], props[keys[i]]);
    return elem;
  }
};

var ReactDOM = {
  render(jsx, elem)
  { 
    elem.innerHTML = jsx;
  }
}
