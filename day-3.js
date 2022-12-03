const { array3 } = require('./day-3-input')
const example = ["vJrwpWtwJgWrhcsFMMfFFhFp","jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg", "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn","ttgJtRGJQctTZtZT","CrZsJsPPZsGzwwsLwLmpwMDw"]
const score = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26,"A":27,"B":28,"C":29,"D":30,"E":31,"F":32,"G":33,"H":34,"I":35,"J":36,"K":37,"L":38,"M":39,"N":40,"O":41,"P":42,"Q":43,"R":44,"S":45,"T":46,"U":47,"V":48,"W":49,"X":50,"Y":51,"Z":52}
function findLargest(array) {
    let priorities = 0
    for (let i =0; i<array.length ; i++) {
        const length = (array[i].length/2)

        let firstHalf = array[i].substring(0,length).split('')
        let secondHalf = array[i].substring(length).split('')

        const intersection = firstHalf.filter(element => secondHalf.includes(element));
        priorities+=score[intersection[0]]
    }

    console.log(priorities)
}
findLargest(array3)