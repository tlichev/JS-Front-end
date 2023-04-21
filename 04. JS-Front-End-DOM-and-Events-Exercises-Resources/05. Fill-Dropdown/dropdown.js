function addItem() {
   const select = document.getElementById("menu");
   const newItemInput = document.getElementById('newItemText');
   const newValueInput = document.getElementById('newItemValue');


   const textInput = newItemInput.value;
   const valueInput = newValueInput.value;
   const option = document.createElement('option');
   option.textContent = textInput;
   option.value = valueInput;
   select.appendChild(option);
   
   newItemInput.value = '';
   newValueInput.value = '';

}