
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector('#create-task-form')
  const taskInput = document.querySelector('#new-task-description')

  taskForm.addEventListener('submit', event => {
    event.preventDefault()
    taskList.addTask(taskInput.value)
  })

})
