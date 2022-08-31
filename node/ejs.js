const ejs = {
  compile(content)
  {
    var i = content.indexOf("<%");
    var j = content.indexOf("%>");
    var str = content.substring(i,j);
    return String(eval(str));
  },
  render(content)
  {
    
  }
}
