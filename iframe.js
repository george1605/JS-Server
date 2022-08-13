class CustomIframe extends HtmlElement
{
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
  connectedCallback() 
  {
    const shadow = this.attachShadow({mode: 'open'});
    this.element = document.createElement("div");
    shadow.appendChild(this.element);
    this.resize(500, 400);
    this.load(this.getAttribute("src") || "about:blank");
  }
}

customElements.define('w-frame', CustomIframe);
