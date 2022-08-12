class FormEvent
{
 constructor(data)
 {
  this.event = new Event("form-trigger");
  this.data = data || [0];   
 }
 emit()
 {
  document.dispatchEvent(this.event);
 }
}
