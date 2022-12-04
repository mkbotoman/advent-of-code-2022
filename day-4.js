const { array4 } = require('./day-4-input')
const example = ["2-4,6-8","2-3,4-5","5-7,7-9","2-8,3-7","6-6,4-6","2-6,4-8"]

function prepareData(array) {
    let firstSplit = []
    let secondSplit = []
    for (let i=0; i< array.length ; i++) {
        const chunk = array[i].split(",")
        firstSplit.push(chunk)
    }
    for (let i=0; i<firstSplit.length ; i++) {
        let first = parseInt(firstSplit[i][0].split("-"))
        let second = parseInt(firstSplit[i][1].split("-"))
        secondSplit.push([first,second])
    }
    return secondSplit
}

function findOutput(array) {
    let prepared = prepareData(array)
    console.log(prepared)
}
findOutput(example)