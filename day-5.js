const { crateOrder, instructions } = require('./day-5-input')
const exampleOrder = {
    1: ["N","Z"],
    2: ["D","C","M"],
    3: ["P"]
}
const exampleInstructions = [
    [1,2,1],
    [3,1,3],
    [2,2,1],
    [1,1,2]
]

function findOutput(order,directions) {
    let newOrder = order
    for (let i=0; i<directions.length ; i++) {
        const moves = directions[i][0]
        let movingGroup = []
        for(let j = 0; j < moves; j++) { 
            movingGroup.push(newOrder[directions[i][1]].shift())
        }
        while(movingGroup.length > 0) {
            newOrder[directions[i][2]].unshift(movingGroup.pop())
        }
    }
    console.log(newOrder)
}
findOutput(crateOrder,instructions)