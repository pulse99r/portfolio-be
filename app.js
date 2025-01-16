const express = require('express')
// const peopleController = require("./controllers/peopleController")

const app = express()
const cors = require('cors')
app.use(express.json())

app.use(cors())

// -------- project routes -------- 
// app.use('/people', peopleController)

// -------- Default or Home routes -------- 
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
})

app.get('/', (req, res) => {
  const msg = `
  Welcome to my portfolio site!!
  `
  res.send(msg)
})

app.get('*', (req, res) => {
  res.send('The page you are looking for does not exist')
})

module.exports = app;
