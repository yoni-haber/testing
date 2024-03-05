// Represents an individual task
export class Task {
  constructor(name, isComplete=false) {
    this.name = name
    this.isComplete = isComplete
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete
  }
}

// Represents a list of tasks
export class TodoList {
  constructor() {
    this.tasks = []
  }

  addTask(taskToAdd) {
    if (taskToAdd.name) {
      this.tasks.push(taskToAdd)
    }
  }

  deleteTask(taskToRemove) {
    const indexToRemove = this.tasks.indexOf(taskToRemove);
    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }
  }
  
  countTotalTasks() {
    return this.tasks.length
  }

  countIncompleteTasks() {
    let count = 0;
    for (const task of this.tasks) {
        if (!task.isComplete) {
            count++;
        }
    }
    return count;
  }

  countCompleteTasks() {
    let count = 0;
    for (const task of this.tasks) {
        if (task.isComplete) {
            count++;
        }
    }
    return count;
  }

  checkIsEntireListComplete() {
    if (this.tasks.length === 0) {
        return true;
    }

    if (this.countIncompleteTasks() > 0) {
        return false;
    }

    return true;
  }
}