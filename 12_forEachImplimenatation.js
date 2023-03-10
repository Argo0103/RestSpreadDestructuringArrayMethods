function fakeForEach(array = [], cb = () => {}){
    const newArray = []

    for(let idx = 0 ; idx < array.length ; idx++){
        const currentItem = cb(array[idx],idx ,array)
        newArray.push(currentItem)
        
    }

    return newArray
}



const words = ['one', 'two', 'three', 'four']

words.forEach((word , index) => {
  console.log( word + " " + ++index)
  
})


fakeForEach(words,(item,index)=>  {
   console.log(item + " "+ ++index)
} )








