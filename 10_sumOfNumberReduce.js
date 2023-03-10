const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

function sumNumbers(array = []){
    let initialValue = 0
    const sumOfNumbers = array.reduce((acumulator ,currValue) => currValue >= 18 ? acumulator + currValue : acumulator + 0,initialValue)
    return sumOfNumbers
}

console.log(sumNumbers(arr));