class Vue {
  constructor(object)
  {
    this.element = document.queryElement(object.tag);
    this.value = object.value;
    this.vtext = this.element.innerHTML;
  }
  update() 
  {
    this.element = this.vtext.replace(/{{*}}/, function (r) {
       var t = r.replace("{{","").replace("{{","");
       return String(eval(t));
    });
  }
  set value(x) 
  {
    this.update();
  }
}
