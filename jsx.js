function nodeFromString(string) {
  return document.createRange().createContextualFragment(string);
};

var ReactRuntime = {
  useState: function(x) {
    x.internal = 0;
    return x;
  }
};
