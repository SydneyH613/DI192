export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(taskName) {
    const task = this.tasks.find(t => t.task === taskName);
    if (task) task.completed = true;
  }

  listTasks() {
    this.tasks.forEach(t => {
      console.log(`${t.task} - ${t.completed ? "✔" : "✘"}`);
    });
  }
}
