
const TaskManager = (() => {
  let tasks = [];
  let nextId = 1;

  const addTask = (title) => {
    const newTask = { id: nextId++, title, completed: false };
    tasks = [...tasks, newTask];
    return newTask;
  };

  const removeTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return true;
  };

  const searchTask = (keyword) => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const countCompletedTasks = () => {
    return tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);
  };

  const completeTask = (id) => {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
  };

  const getAllTasks = () => [...tasks];

  return {
    addTask,
    removeTask,
    searchTask,
    countCompletedTasks,
    completeTask,
    getAllTasks
  };
})();


//Interactive CLI Menu

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log(`
===== Task Manager =====
1. Add Task
2. Remove Task
3. Search Task
4. Complete Task
5. Show All Tasks
6. Count Completed
7. Exit
`);
}

function ask() {
  showMenu();
  rl.question("Choose an option: ", (option) => {
    switch (option) {

      case "1":
        rl.question("Enter task title: ", (title) => {
          TaskManager.addTask(title);
          console.log(" Task added!");
          ask();
        });
        break;

      case "2":
        rl.question("Enter task ID to remove: ", (id) => {
          TaskManager.removeTask(parseInt(id));
          console.log(" Task removed");
          ask();
        });
        break;

      case "3":
        rl.question("Enter keyword to search: ", (keyword) => {
          console.log(" Results:", TaskManager.searchTask(keyword));
          ask();
        });
        break;

      case "4":
        rl.question("Enter task ID to complete: ", (id) => {
          TaskManager.completeTask(parseInt(id));
          console.log(" Marked completed");
          ask();
        });
        break;

      case "5":
        console.log(" All Tasks:", TaskManager.getAllTasks());
        ask();
        break;

      case "6":
        console.log(" Completed:", TaskManager.countCompletedTasks());
        ask();
        break;

      case "7":
        console.log(" Exiting...");
        rl.close();
        break;

      default:
        console.log("Invalid option, try again.");
        ask();
    }
  });
}

ask();




















// // class TaskManager {
// //   constructor() {
// //     this.tasks = [];
// //     this.nextId = 1;
// //   }

// //   addTask(title) {
// //     const newTask = {
// //       id: this.nextId++,
// //       title: title,
// //       completed: false
// //     };
    
// //     this.tasks = [...this.tasks, newTask];
// //     console.log(` Task added: "${title}" (ID: ${newTask.id})`);
// //     return newTask;
// //   }

// //   removeTask(id) {
// //     const taskToRemove = this.tasks.find(task => task.id === id);
    
// //     if (!taskToRemove) {
// //       console.log(` Task with ID ${id} not found`);
// //       return false;
// //     }
    
// //     this.tasks = this.tasks.filter(task => task.id !== id);
// //     console.log(`  Task removed: "${taskToRemove.title}"`);
// //     return true;
// //   }

// //   searchTask(keyword) {
// //     const searchTerm = keyword.toLowerCase();
// //     const results = this.tasks.filter(task => 
// //       task.title.toLowerCase().includes(searchTerm)
// //     );
    
// //     console.log(` Found ${results.length} task(s) matching "${keyword}"`);
// //     return results;
// //   }

// //   countCompletedTasks() {
// //     const count = this.tasks.reduce((total, task) => {
// //       return task.completed ? total + 1 : total;
// //     }, 0);
    
// //     console.log(` Completed tasks: ${count}/${this.tasks.length}`);
// //     return count;
// //   }

// //   toggleTask(id) {
// //     this.tasks = this.tasks.map(task => 
// //       task.id === id 
// //         ? { ...task, completed: !task.completed }
// //         : task
// //     );
    
// //     const task = this.tasks.find(t => t.id === id);
// //     if (task) {
// //       console.log(`${task.completed ? 'yes' : 'no'} Task "${task.title}" marked as ${task.completed ? 'completed' : 'incomplete'}`);
// //     }
// //   }

// //   getAllTasks() {
// //     return this.tasks.map(task => ({
// //       ...task,
// //       status: task.completed ? 'Done' : 'Pending'
// //     }));
// //   }

// //   displayTasks() {
// //     if (this.tasks.length === 0) {
// //       console.log(' No tasks available');
// //       return;
// //     }
    
// //     console.log('\n Task List:');
// //     this.tasks.forEach(task => {
// //       const status = task.completed ? '' : '';
// //       console.log(`${status} [${task.id}] ${task.title}`);
// //     });
// //     console.log('');
// //   }
// // }

// // // ============ DEMO CODE - ADD THIS ============
// // console.log('=== TASK MANAGER DEMO ===\n');

// // const manager = new TaskManager();

// // // Add tasks
// // manager.addTask('Learn JavaScript');
// // manager.addTask('Study CAPM');
// // manager.addTask('Build Portfolio Website');
// // manager.addTask('Practice Array Methods');

// // // Display all tasks
// // manager.displayTasks();

// // // Toggle some tasks
// // manager.toggleTask(1);
// // manager.toggleTask(3);

// // // Display updated tasks
// // manager.displayTasks();

// // // Count completed tasks
// // manager.countCompletedTasks();

// // // Search tasks
// // manager.searchTask('learn');

// // // Remove a task
// // manager.removeTask(2);

// // // Final display
// // manager.displayTasks();



// // Task Manager Module
// const TaskManager = (() => {
//   let tasks = [];
//   let nextId = 1;

//   // Add a new task
//   const addTask = (title) => {
//     const newTask = { id: nextId++, title, completed: false };
//     tasks = [...tasks, newTask];     // immutable update
//     return newTask;
//   };

//   //  Remove a task by ID
//   const removeTask = (id) => {
//     const beforeCount = tasks.length;
//     tasks = tasks.filter(task => task.id !== id);   // using filter()
//     return tasks.length < beforeCount; // true if removed
//   };

//   //  Search task by keyword
//   const searchTask = (keyword) => {
//     return tasks.filter(task =>
//       task.title.toLowerCase().includes(keyword.toLowerCase())
//     ); // using filter()
//   };

//   //  Count completed tasks
//   const countCompletedTasks = () => {
//     return tasks.reduce(
//       (count, task) => count + (task.completed ? 1 : 0),
//       0
//     ); // using reduce()
//   };

//   //  Mark task as completed using map()
//   const completeTask = (id) => {
//     tasks = tasks.map(task =>
//       task.id === id ? { ...task, completed: true } : task
//     );
//   };

//   //  Get all tasks
//   const getAllTasks = () => [...tasks];

//   return {
//     addTask,
//     removeTask,
//     searchTask,
//     countCompletedTasks,
//     completeTask,
//     getAllTasks
//   };
// })();
// // ----- TEST CODE -----
// console.log("Adding tasks...");
// TaskManager.addTask("Learn JavaScript");
// TaskManager.addTask("Practice Coding");

// console.log("All Tasks:", TaskManager.getAllTasks());

// TaskManager.completeTask(1);

// console.log("Completed Count:", TaskManager.countCompletedTasks());

// console.log("Search result:", TaskManager.searchTask("learn"));

