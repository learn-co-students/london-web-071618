class Task {
  constructor(text, id) {
    this.text = text
    this.id = id
  }

  render() {
    const task = document.createElement('li')
    task.id = `todo-${this.id}`
    task.innerText = this.text
    return task
  }
}
