function getRand(x)
{
  return Math.floor(Math.random() * x);
}

class CustomCanvas 
{
  constructor(width, height)
  {
    this.width = (width != undefined)? width: 400;
    this.height = (height != undefined)? height: 300;
    this.element = document.createElement("canvas");
    this.element.width = this.width, this.element.height = this.height;
  }
  addTo(elem)
  {
    elem.appendChild(this.element);
    this.ctx = this.element.getContext("2d");
  }
  randLine()
  {
   this.ctx.beginPath();
   this.ctx.moveTo(getRand(this.width/3), getRand(this.height/4));
   this.ctx.lineTo(getRand(this.width), getRand(this.height));
   this.ctx.stroke();
  }
  
  gradient(clr1, clr2)
  {
      
  }
  
  data()
  {
    return this.ctx.getImageData(0, 0, this.width, this.height);
  }
  
  set width(w)
  {
    this.element.width = w; 
  }
  
  set height(h)
  {
    this.element.height = h; 
  }
};
