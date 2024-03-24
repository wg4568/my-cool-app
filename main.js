const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000

app.get('/flag', (req, res) => {
  console.log('Getting flag')
  console.log(process.env.FLAG)
  res.send("blu{"+process.env.FLAG+"}")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
