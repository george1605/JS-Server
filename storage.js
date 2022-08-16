function saveState(name, val)
{
  localStorage.setItem(String(name), String(val));
}

class State
{
  constructor(x)
  {
    this.value = x;
    this.updateState = (n) => {};
  }

  set value(n)
  {
    this.updateState(n);
  }
}
