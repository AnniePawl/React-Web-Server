/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')

const { random, randomD, randomRolls } = require('./utils')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Get Ready to Roll Some Die' })
})

app.get('/rollDice', (req, res) => {
  res.json({ message: 'Die have been rolled' })
})

// Simple route that returns a JSON object
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({
    about: 'This service generates a random numbers.',
    date: new Date().toLocaleString(),
  })
})

// Random Whole Number Route
// Returns a random whole number between 0 and n-1
// Test this route with: http://localhost:4000/random?n=99
app.get('/random', (req, res) => {
  const { n } = req.query
  const value = random(n)
  res.json({
    message: 'Returning a Random Whole Number between 0 and n-1',
    value,
  })
})

// RollDie Route
// Returns a random whole number between 0 and n-1
// Test this route with: http://localhost:4000/random?n=99
app.get('/rollDie', (req, res) => {
  const { n } = req.query
  const value = random(n)
  res.json({
    message: 'You see me rollin',
    value,
  })
})


// RandomRolls Route
// Returns a random whole number between 0 and n-1
// Test this route with: http://localhost:4000/random?n=99
app.get('/randomRolls', (req, res) => {
  const { n } = req.query
  const value = random(n)
  res.json({
    message: 'Rollin Randoms',
    value,
  })
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
