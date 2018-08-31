console.log('hey!!')

// create a function that will add a <ul> element on the page
function addTodoList() {
  // create the element and assign it to a variable
  const todoList = document.createElement('ul')
  // add it to the <body>
  document.body.append(todoList)
}

// run the above function so the thing happens
addTodoList()

// create a function that will add a todo item to the list
function addTodoItem(text) {
  const todoList = document.querySelector('ul')
  const listItem = document.createElement('li')
  listItem.innerText = text
  todoList.append(listItem)
}

// get a list of todo items from an API
function getTodos() {
  fetch('https://jsonplaceholder.typicode.com/posts') // GET request made
	  .then(resp => resp.json()) // A Response is returned and turned into JSON
	  .then(todos => todos.forEach( // Now we have the actual list of todo items
		  todo => addTodoItem(todo.title) // Now we call the function we wrote before to add the todo on to the page
    ))
}

// This will empty the <ul> and get the todos
function clearAndGetTodos() {
  const todoList = document.querySelector('ul')
  todoList.innerHTML = ''
  getTodos()
}

// Finally, we call clearAndGetTodos when a button is clicked
const getTodosButton = document.createElement('button')
getTodosButton.innerText = "GET TODOS!"
getTodosButton.addEventListener('click', clearAndGetTodos)
document.body.append(getTodosButton)

// Notice that this happens before the data is on the screen
// This is because Promises are asynchronous
console.log('lalala')
