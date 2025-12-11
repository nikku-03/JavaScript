let tasks = [];
let nextId = 1;

// Get all tasks
function getTasks() {
  return tasks;
}

// Add a task
function addTask(title) {
  const newTask = { id: nextId++, title };
  tasks.push(newTask);
  return newTask;
}

// Update a task
function updateTask(id, title) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;

  tasks[index].title = title;
  return tasks[index];
}

// Delete a task
function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
