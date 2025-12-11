

const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "task.json");

async function updateTasks(newTask) {
  try {
    
    const data = await fs.readFile(filePath, "utf-8");

    
    const tasks = JSON.parse(data);

    
    tasks.push(newTask);

    
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));

    
    console.log(" Updated Tasks:");
    console.log(tasks);

  } catch (err) {
    console.error(" Error:", err.message);
  }
}


const newTask = {
  id: 3,
  title: "Read JSON using fs/promises",
  completed: false
};

updateTasks(newTask);
