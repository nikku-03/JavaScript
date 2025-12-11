const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require("./taskController");

const app = express();
app.use(express.json());

// GET /tasks
app.get("/tasks", (req, res) => {
  res.json(getTasks());
});

// POST /tasks
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = addTask(title);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  const updated = updateTask(id, title);
  if (!updated) return res.status(404).json({ message: "Task not found" });

  res.json(updated);
});

// DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const success = deleteTask(id);
  if (!success) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted" });
});

// START SERVER WITH LINK
app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("Open API: http://localhost:3000/tasks");
});
