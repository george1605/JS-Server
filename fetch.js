//inspired by Flamethrower
void lazyLoad(loader)
{
  var n = document.createElement("div");
  n.onload = loader;
  return n;
}

class Route
{
  constructor(name){
   this.path = name;
  }
  load()
  {
    fetch(this.path).then((data)=>{document.write(data);});
  }
};

function sendGraphQL(data)
{
  var n = new XmlHttpRequest(data);
  var data = "";
  n.open("GET","/graphql");
  n.onreadystatechange = () => {
    if(n.state == 4)
      data = n.responseText;
  }
  return data;
}

function replaceTitle(title)
{
  var n = document.getElementsByTagName("title")[0];
  n.innerHTML = title;
}

function getPathParam()
{
  var uri = new URI(window.location.href);
  var param = uri.searchParams.get("path");
  return param;
}
