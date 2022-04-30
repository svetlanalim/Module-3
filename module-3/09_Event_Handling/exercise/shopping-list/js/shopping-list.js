let allItemsIncomplete = true;
const pageTitle = 'My Shopping List';
const groceries = [
  { id: 1, name: 'Oatmeal', completed: false },
  { id: 2, name: 'Milk', completed: false },
  { id: 3, name: 'Banana', completed: false },
  { id: 4, name: 'Strawberries', completed: false },
  { id: 5, name: 'Lunch Meat', completed: false },
  { id: 6, name: 'Bread', completed: false },
  { id: 7, name: 'Grapes', completed: false },
  { id: 8, name: 'Steak', completed: false },
  { id: 9, name: 'Salad', completed: false },
  { id: 10, name: 'Tea', completed: false }
];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    li.appendChild(checkCircle);
    ul.appendChild(li);
  });
}

/*
  1) The element to listen for the event on
  2) The type of event
  3) The function to run when the event occurs
*/
document.addEventListener('DOMContentLoaded', () => {
  setPageTitle();
  displayGroceries();

  function markForCompleted() {
    const list = document.querySelector('ul')
    const items = Array.from(list.children)
    items.forEach((item) => {
      if(allItemsIncomplete == false){
        item.setAttribute('class', 'completed')
        item.querySelector('i').classList.add('completed')
      } else if (allItemsIncomplete == true){
        item.setAttribute('class', '')
        item.querySelector('i').classList.remove('completed')
      }
    });
  }
  const button = document.querySelector('.btn');
  button.addEventListener('click', markAllComplete);
  const li = document.querySelector('li');
  li.addEventListener('dblclick', markAllComplete);
  function markAllComplete(){
    const all = document.querySelector('a')
    markForCompleted();
    if(allItemsIncomplete == true){
      allItemsIncomplete = false
      all.innerText = 'Mark All Complete'
    } else {
      allItemsIncomplete = true
      all.innerText = 'Mark All Incomplete'
    }
  }
const list = document.querySelector('ul')
list.addEventListener('click', (event) =>{
  if(event.target.classList != 'completed'){
    event.target.classList.add('completed');
    event.target.querySelector('i').classList.add('completed')
  } else if (event.target.classList == 'completed'){
    event.target.classList.remove('completed');
    event.target.querySelector('i').classList.remove('completed')
  }
})
})

// button.addEventListener('click', (event) => {
//   displayGroceries();
// });

  // find the button (Mark All Completed)
  // attach event listener to the button
  // call a function

  // the function on click of the button

  /*
    find all of the list items
    iterate over them
    for each one, 
      - add the class completed to the li
      - find the icon, add the class completed to it

    change the button text to Mark All Incomplete
    flip the boolean allItemsIncomplete = false


    find all of the list items
    iterate over them
    for each one, 
      - remove the class completed to the li
      - find the icon, remove the class completed to it

    change the button text to Mark All Complete
    flip the boolean allItemsIncomplete = true
  */

