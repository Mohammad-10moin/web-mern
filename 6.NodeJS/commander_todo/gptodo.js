const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

program
  .name('Todo-cli')
  .description('CLI to perform todo-based tasks')
  .version('0.8.0');

program.command('addtodo')
  .description('Adds the todo inside the todos.json file')
  .argument('<string>', 'Todo to add')
  .action((todo) => {
    // Read existing todos from the file
    fs.readFile('todos.json', 'utf-8', (err, data) => {
      let todos = [];
      
      // If the file exists and is not empty, parse the current todos
      if (!err && data) {
        try {
          todos = JSON.parse(data);
        } catch (parseErr) {
          console.error('Error parsing JSON data:', parseErr);
        }
      }

      // Add the new todo to the list
      todos.push(todo);

      // Write the updated todos back to the file
      fs.writeFile('todos.json', JSON.stringify(todos, null, 2), (writeErr) => {
        if (writeErr) {
          console.error('Error writing to file:', writeErr);
        } else {
          console.log('Todo added successfully!');
        }
      });
    });
  });

program.parse();
