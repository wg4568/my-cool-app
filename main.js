const express = require('express')
const app = express()
const port = 3000

app.get('/flag', (req, res) => {
  // TODO: get flag from environment file
  res.send('Not implemented yet')
})

app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO MY COOL APP!</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
