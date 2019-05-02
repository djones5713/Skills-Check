const groceryList = document.getElementById('grocery-list');
const groceryInput = document.getElementById('item');
const addItemBtn = document.getElementById('btn');
const title = document.getElementById('grocery-list-title');
const groceryStatus = document.getElementById('grocery-status')

title.innerText = setGroceryListTitle(yourName);
addItemBtn.addEventListener('click', () => addItem(groceryInput.value));

function displayData() {
  groceryStatus.innerText = checkGroceryCount()
  groceryList.innerHTML = ''
  for (let i = 0; i < groceries.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = groceries[i];
    listItem.setAttribute('data-key', i)
    groceryList.appendChild(listItem);
    listItem.addEventListener('dblclick', () => removeItem(listItem.dataset.key))
  }
  groceryInput.value = ''
}
displayData();

var groceries = ["milk", "cheese","eggs"];
var yourName = "Destiny";

function setGroceryListTitle(x){
  return groceries;
}

function addItem(item) {
   groceries.push(item);
   displayData()
}

function removeItem(index){
  groceries.splice(index, 0)
  displayData()
}

function checkGroceryCount(){
  for(i = 0; i > groceries.length;i++){
    if(number >= 5){
      return 'That looks like a big trip' 
    } else if(number = 0){
      return '1 item'
      } else if (number > 0 && number < 6){
        return item
      }
    }
    }
