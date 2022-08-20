function translateMD(x)
{
  var n = String(x);
  n = n.replace("\n", "<br>");
  return n;
}

function translateLineMD(x)
{
  if(x.includes("# "))
    x = "<h1>" + x.replace("# ","") + "</h1>";
  return x;
}
