const { Command } = require('commander');
const program = new Command();
const fs=require('fs');
program
  .name('Todo-cli')
  .description('cli to do todo based tasks')
  .version('0.8.0');

program.command('addtodo')
  .description('adds the todo inside the todos.json file')
  .argument('<string>', 'todo to add')
  .action((string)=>{
    fs.appendFile('todos.json',JSON.stringify(string)+"\n",function(err,data){
      data=JSON.stringify(string);
        if(err){
            console.log(err);
        }
        else{
            console.log(`added todo successfully`);
        }
    })
  });

program.parse();