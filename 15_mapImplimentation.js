function fakeMap(array = [], cb = () => {}) {
    const newArray = [];
  
    for (let idx = 0; idx < array.length; idx++) {
      const currentItem = cb(array[idx], idx, array);
      newArray.push(currentItem);
    }
  
    return newArray;
  }
  
  const arr = ['one', 'two', 'three', 'four']
  
  console.log(fakeMap(arr, (item) => item + " " + item.length))
  