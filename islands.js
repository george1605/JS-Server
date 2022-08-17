function injectJS(div, js)
{
  if(!div)
    div = document.createElement("div");
  div.onload = js;
  return div;
}

class Navbar
{
  constructor()
  {
    super();
  }
  
  connectedCallback()
  {

  }
}
