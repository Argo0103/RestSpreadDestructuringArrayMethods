function sortBy(arr = [] , order  ){
    
    return  arr.sort( (a,b) => order === "Desc" ? b - a : order === "Asc" ? a - b : 0  )
    
}

console.log(sortBy([7, 8, 11, 66], "Desc"));

