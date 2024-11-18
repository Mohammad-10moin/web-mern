const express = require('express');
const app = express()

const todos=[];

// addTodo
app.post('/add',function(req,res){
    
})

app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.get('/moin', function (req, res) {
    res.send('Hello Moin')
  })

app.listen(3000)