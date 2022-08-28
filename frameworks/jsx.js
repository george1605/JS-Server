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

var ReactRuntime = {
  useState: function(x) {
    x.internal = 0;
    return x;
  }
};
