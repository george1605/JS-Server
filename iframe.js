class CustomIframe
{
  constructor(selector)
  {
    this.suppressJS = false;
    if(selector != undefined)
      this.element = document.querySelector(selector);
    else
      this.element = document.createElement("div");
  }
  load(src)
  {
    var x = new XMLHttpRequest();
    x.open("GET", src);
    x.setRequestHeader("Access-Control-Allow-Origin","*");
    var elem = this.element;
    x.onreadystatechange = function()
    {
      if(x.status == 200 && x.readyState == 4)
        elem.innerHTML = x.responseText;
      else
        elem.innerHTML = `<code>HTTP Response status: ${x.status}</code>`;
    }
    x.send();
  }
  append()
  {
    document.body.append(this.element);
  }
  resize(w, h)
  {
    this.element.style.width = w;
    this.element.style.height = h;
  }
}
