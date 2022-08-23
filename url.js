//can be included in nodejs too
function constructURL(base, params)
{
  var keys = Object.keys(params);
  var values = Object.values(params);
  var url = base;
  for(var i = 0;i < keys.length;i++)
     url = url + "?" + keys[i] + "=" + values[i];
}
