// NodeJS like modules in browser
var module = {
  exports: null
};

function loadModule(code)
{
  eval(code);
  return module.exports;
}

function require(file)
{
  if(file.contains("./"))
  {
     fetch(file).then((data) => {loadModule(data);});
  } else {
     fetch (file, { mode : 'cors' })
     .then((data) => {loadModule(data);});
  }
}
