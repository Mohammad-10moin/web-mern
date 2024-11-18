// console.log(__dirname);
// console.log(__filename);
/*
Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file
*/
const fs= require('fs');
const path = require('path');
const { Command } = require('commander');
const program = new Command();

program
  .name('words-counter')
  .description('cli to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('counts the no of words inside the given file')
  .argument('<file>', 'file to count')
  .action((file)=>{
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            const words=data.split(' ').length;
            console.log(`the given file contains ${words} words`);
        }
        // here if we do .length we will get the no of words and
        // if we just simply do data.split(' ') --it returns the array seperated by split

    })
  });

program.parse();