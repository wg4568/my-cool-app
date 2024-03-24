require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/flag', (req, res) => {
  flag = process.env.FLAG
  res.send(`blu{${flag}}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
