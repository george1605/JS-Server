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
