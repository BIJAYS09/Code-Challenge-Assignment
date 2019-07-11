const { distanceCalculator } = require("./distanceCalculator");

var fs = require('fs')

// Coordinates of Dublin
const LATITUDE = 53.339428
const LONGITUDE = -6.257664

let array = []

// Readinig  the File 
var data = fs.readFileSync('customers.txt', 'utf-8')

array = data.split('\n')

// Convert into json format
for (let i = 0; i < array.length; i++) {
  array[i] = JSON.parse(array[i])
}

// calulate distance for each customer
for (let i = 0; i < array.length; i++) {
  array[i].distance = distanceCalculator(LATITUDE, LONGITUDE, array[i].latitude, array[i].longitude)
}

// sort the arrayay according to user_id
array.sort(function (a, b) {
  return a.user_id - b.user_id
})

// Display the result
for (let i = 0; i < array.length; i++) {
  if (array[i].distance <= 100) {
    console.log(array[i].name + ' ' + array[i].user_id)
  }
}
