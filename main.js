require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/flag', (req, res) => {
  flag = process.env.FLAG
  res.send(`blu{${flag}}`)
})

app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO MY COOL APP!</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
