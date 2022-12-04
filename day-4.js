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
        let first = firstSplit[i][0].split("-")
        let second = firstSplit[i][1].split("-")
        secondSplit.push([first,second])
    }
    return secondSplit
}

function findOutput(array) {
    let prepared = prepareData(array)
    let numBetween = 0
    for (let i=0; i<prepared.length ; i++) {
        if((parseInt(prepared[i][0][0]) == parseInt(prepared[i][1][0])) || parseInt(prepared[i][0][0]) == parseInt(prepared[i][1][1]) || parseInt(prepared[i][0][1]) == parseInt(prepared[i][1][0]) || parseInt(prepared[i][0][1]) == parseInt(prepared[i][1][1])) numBetween++
        else if((parseInt(prepared[i][0][0]) < parseInt(prepared[i][1][0])) && parseInt(prepared[i][0][1]) > parseInt(prepared[i][1][0])) numBetween++
        else if((parseInt(prepared[i][0][0]) < parseInt(prepared[i][1][1])) && parseInt(prepared[i][0][1]) > parseInt(prepared[i][1][1])) numBetween++
        else if((parseInt(prepared[i][1][0]) < parseInt(prepared[i][0][0])) && parseInt(prepared[i][1][1]) > parseInt(prepared[i][0][0])) numBetween++
        else if((parseInt(prepared[i][1][0]) < parseInt(prepared[i][0][1])) && parseInt(prepared[i][1][1]) > parseInt(prepared[i][0][1])) numBetween++
    }
    console.log(numBetween)
}
findOutput(array4)