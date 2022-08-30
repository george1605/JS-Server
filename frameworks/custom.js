// Create Custom Frameworks

class VNode {
  constructor()
  {
    this.tag = "";
    this.props = null;
    this.innerHTML = null;
    this.stateName = "";
  }
}

var framework = {
  parseCode: (code) => {return code},
  render: (code, elem) => {
    var el = elem || document.body;
    el.innerHTML = code;
  },
  createElem: (node) => {
    return document.createElement(node.tag);
  }
};

function runFramework(code)
{
  var code = framework.parseCode(code);
  document.body.append(framework.createElem(code));
}
