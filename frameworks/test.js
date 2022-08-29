var __iframe = document.createElement("iframe");
__iframe.style.width = "40%";
document.body.append(__iframe);

const test = {
  fill(input)
  {
    var inp = document.querySelector(input);
    if(inp.getAtrribute("type") == "email")
      inp.value = "email@example.com";
  },
  fillForm(form, data)
  {
    var i = document.querySelector(form);
    for(var j = 0; j < i.children.length;j++)
      if(i.children[j].type == "submit")
        i.children[j].click();
      else
        i.children[j].value = "";
  },
  click(elem)
  {
    var time1 = new Date().now();
    document.querySelector(elem).click();
    var time2 = new Date().now();
    return (time2 - time1);
  },
  load(link)
  {
    __iframe.setAttribute("src", link);
  }
};

