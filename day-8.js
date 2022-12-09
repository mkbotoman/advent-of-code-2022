const { input8 } = require('./day-8-input')
const example = `30373
25512
65332
33549
35390`


const part1 = (rawInput) => {
  let parsedInput = parseInput(rawInput)
  const edgeTrees = getTotalEdgeTrees(parsedInput)
  let visibleInterior = getVisible(parsedInput)

  return visibleInterior + edgeTrees
}

const parseInput = (rawInput) => {
    return rawInput.split(/\r?\n/)
}

const getTotalEdgeTrees = (input) => {
    let vertEdge = input.length * 2
    let horizEdge = input[0].length * 2
    return vertEdge + horizEdge - 4
}
const getVisible = (input) => {
    let visible = []
    const verticalArray = createVerticalSlices(input)
    for(let i = 1; i<input.length-1; i++) {
        let arrayInput = input[i].split('')
        for(let j = 1; j<arrayInput.length-1; j++){
            let first = getLargest(arrayInput.slice(0,j))
            let second = getLargest(arrayInput.slice(j+1))
            if(arrayInput[j] > first || arrayInput[j] > second) {
                visible.push(i + "," + j)
            }
            
            let bottomTree = getLargest(verticalArray[i].slice(j+1).split(''))
            let topTree = getLargest(verticalArray[i].slice(0,j).split(''))
            if(arrayInput[j] > bottomTree || arrayInput[j] > topTree) {
                visible.push(i + "," + j)
            }
        }
    }
    let uniqueVisible = [...new Set(visible)]

    return uniqueVisible.length
}

const createVerticalSlices = (input) => {
    let vertical = []
    for(let i = 0; i < input.length; i++) {
        const row = input.toString().split(',').map(word => word[i]).join('')
        vertical.push(row)
    }
    return vertical
}

const getLargest = (input) => {
    return Math.max.apply(null,input)
}

console.log(part1(input8))