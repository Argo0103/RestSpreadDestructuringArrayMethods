function retunOnlyNumber(array = []){
    const newArr = array.filter(currItem => currItem === Number(currItem)   )
    return newArr
}
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,166, NaN]

console.log(retunOnlyNumber(arr))