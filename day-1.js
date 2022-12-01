const array = require('./day-1-input')
let largest = []

function findLargest(array) {
    let current = 0
    for (let i =0; i< array.length ; i++) {
        if ( array[i]=== undefined) {
            if (largest.length < 3) {
                largest.push(current)
            } else if (current > Math.min(...largest)) {
                largest = largest.filter(e => e != Math.min(...largest))
                largest.push(current)
            }
            current = 0
        } else {
            current = current + array[i]
        }
    }
    console.log(largest.reduce((partialSum, a) => partialSum + a, 0))
}
findLargest(array.array)