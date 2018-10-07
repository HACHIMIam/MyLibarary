const data = require('./data.json')
const uniqueRandomArray = require('unique-random-array')
module.exports={
  all:data,
  random:uniqueRandomArray(data)
}