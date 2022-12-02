const { array2 } = require('./day-2-input')

function findLargest(array) {
    let score = 0
    for (let i=0; i< array.length ; i++) {
        if(array[i][0]=="A"){
            if(array[i][1]=="X") {
                score+=3
            } else if (array[i][1]=="Y") {
                score+=4
            } else {
                score+=8
            }
        } else if (array[i][0]=="B"){
            if(array[i][1]=="X") {
                score+=1
            } else if (array[i][1]=="Y") {
                score+=5
            } else {
                score+=9
            }
        } else {
            if(array[i][1]=="X") {
                score+=2
            } else if (array[i][1]=="Y") {
                score+=6
            } else {
                score+=7
            }
        }
    }
    console.log(score)
}
findLargest(array2)