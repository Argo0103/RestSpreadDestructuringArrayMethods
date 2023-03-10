function fakeSlice(array = [], start , end = array.length ){
    const newArray = []
    for(let idx= 0 ; idx < array.length ; idx++) {
        if(idx >= start && idx < end){
            newArray.push(array[idx])
        }else if(idx === end){
            break
        }
        
        
    }
    return newArray
}
const arr = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
console.log(fakeSlice(arr,1,3));






