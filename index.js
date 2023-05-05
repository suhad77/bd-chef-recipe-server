const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');
const food = require('./data/food.json');

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/food', (req, res)=>{
  res.send(food);
})

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  const selectedchef = categories.find(n => n._id === id);
  res.send(selectedchef)
  console.log(id);
})

app.get('/', (req, res) => {
    res.send('Hello Express ..!')
  })
  
  app.listen(port, () => {
    console.log(`bd chef is runnig ${port}`)
  })