// adds a vtext that will be parsed according to
// the current state
document.newVElement = function(name) {
  var n = document.createElement(name);
  n.vtext = "{{state}}";
  return n;
}

document.formatVElement = function(elem, args) {
  var c = 0;
  elem.innerHTML = elem.vtext.replace(/{{*}}/g, function() {
    return args[c++];
  });
}
