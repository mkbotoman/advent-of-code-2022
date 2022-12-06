const { input6 } = require('./day-6-input')
const example1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
const example2 = "bvwbjplbgvbhsrlpgdmjqwftvncz"
const example3 = "nppdvjthqldpwncqszvftbrmjlhg"
const example4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"
const example5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

function findOutput(input) {
    let characters
    const array = input.split("")
    for (let i=0; i<array.length ; i++) {
        let four = array.slice(i,i+14)
        let duplicates = toFindDuplicates(four)
        if(duplicates.length == 0) {
            characters = i+14
            break
        }
    }
    console.log(characters)  
    
}
findOutput(input6[0])