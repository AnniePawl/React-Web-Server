/* eslint-disable semi */

function random(n) {
  // Returns a random whole number between 0 and n-1
  return Math.floor(Math.random() * n)
}

function randomD(n) {
  // Simulates the roll of a die and returns a whole number between 1 and n. Takes in one parameter, n 
  return Math.floor(Math.random() * n)
}

function randomRolls(n, s) {
  // Generates a series of die rolls and returns an array of random numbers. Takes two parameters: n=number of die, s=number of sides per die. Return Value between 1 and s
  rollsArray = []
  return rollsArray
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
