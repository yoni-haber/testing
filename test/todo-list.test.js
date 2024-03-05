import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    // 💡 Tip: use toEqual() to compare arrays and objects, and toBe() to compare primitive values (like numbers or booleans)
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    const todoList = new TodoList()
    const testTask = new Task('')

    todoList.addTask(testTask)

    expect(todoList.tasks).toEqual([])
  })

  it('should correctly toggle the completion status of a task', () => {
    const task = new Task()

    expect(task.isComplete).toBe(false)

    task.toggleCompletion()

    expect(task.isComplete).toBe(true)

    task.toggleCompletion()

    expect(task.isComplete).toBe(false)

  })

  it('should correctly delete a task from a to-do list', () => {
    const todoList = new TodoList()
    const task1 = new Task('Test task 1')
    const task2 = new Task('Test task 2')

    todoList.addTask(task1)
    todoList.addTask(task2)

    todoList.deleteTask(task1)

    expect(todoList.tasks).toEqual([task2])
  })

  it('should count the correct total number of tasks in a to-do list', () => {
    const todoList = new TodoList()
    const task1 = new Task('Test task 1')
    const task2 = new Task('Test task 2')
    const task3 = new Task('Test task 3')

    todoList.addTask(task1)
    todoList.addTask(task2)
    todoList.addTask(task3)
    
    const tasksCount = todoList.countTotalTasks()

    expect(tasksCount).toBe(3)
  })

  it('should count the correct number of incomplete tasks in a to-do list', () => {
    const todoList = new TodoList()
    const task1 = new Task('Test task 1')
    const task2 = new Task('Test task 2')
    const task3 = new Task('Test task 3')

    todoList.addTask(task1)
    todoList.addTask(task2)
    todoList.addTask(task3)

    task1.toggleCompletion()

    const incompleteTasksCount = todoList.countIncompleteTasks()

    expect(incompleteTasksCount).toBe(2)
  })

  it('should count the correct number of complete tasks in a to-do list', () => {
    const todoList = new TodoList()
    const task1 = new Task('Test task 1')
    const task2 = new Task('Test task 2')
    const task3 = new Task('Test task 3')

    todoList.addTask(task1)
    todoList.addTask(task2)
    todoList.addTask(task3)

    task1.toggleCompletion()

    const completeTasksCount = todoList.countCompleteTasks()

    expect(completeTasksCount).toBe(1)
  })

  it('should determine that every task in the to-do list is complete', () => {
    const todoList = new TodoList()

    const emptyList = todoList.checkIsEntireListComplete()
    expect(emptyList).toBe(true)

    const task1 = new Task('Test task 1')
    const task2 = new Task('Test task 2')
    const task3 = new Task('Test task 3')

    todoList.addTask(task1)
    todoList.addTask(task2)
    todoList.addTask(task3)

    const listWithIncompleteTasks = todoList.checkIsEntireListComplete()
    expect(listWithIncompleteTasks).toBe(false)

    task1.toggleCompletion()
    task2.toggleCompletion()
    task3.toggleCompletion()

    const listWithAllCompletedTasks = todoList.checkIsEntireListComplete()
    expect(listWithAllCompletedTasks).toBe(true)
  })
})