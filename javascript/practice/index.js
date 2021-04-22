const express = require('express')
const router = require('./routes')

const app = express()

app.use(router)

app.get('/', (req, res)=>{
  res.send('Welcome to practice')
})

app.use('*', (req, res)=>{
  res.send('Route not found')
})

const PORT = process.env.PORT || 4040;

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})