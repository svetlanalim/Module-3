// add pageTitle
const pageTitle = 'My Shopping List';
// add groceries
const groceries = ['Mangosteen', 
'Lychee', 
'Mango', 
'PassionFruit', 
'DragonFruit', 
'SnakeFruit', 
'JackFruit', 
'Durian', 
'Guava', 
'Mandarin'
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

   groceries.forEach((grocery) => {
    const groceryContainer = document.getElementById('groceries');
    const listElement = document.createElement('li');
    listElement.innerText = grocery;
    groceryContainer.append(listElement);
   })
    
  }



/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  const list = document.querySelectorAll('#groceries > li');
    list.forEach((whale) => {
        whale.classList.add('completed');
    })
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
