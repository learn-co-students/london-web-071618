class TaskList {
  constructor() {
    this.taskListElement = document.querySelector('#tasks')
    this.counter = 0
  }

  addTask(text) {
    const task = new Task(text, this.counter).render()
    this.taskListElement.append(task)
    const currentCounter = this.counter

    task.addEventListener('click', function () {
      const target = document.querySelector(`#todo-${currentCounter}`)
      console.log(currentCounter)
      target.remove()
    })

    this.counter++
  }

  
}
