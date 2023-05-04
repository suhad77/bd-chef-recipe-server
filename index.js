const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`bd chef is runnig ${port}`)
  })