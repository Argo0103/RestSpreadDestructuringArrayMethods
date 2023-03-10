const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
    ];

    
    
    function getUserNames(array = []){
        const newArr = array.map(currItem => currItem.username)
            return newArr
    } 

    console.log(getUserNames(users))



    function getUserNamesLength(array = []){
        const newArr = array.map(currItem => currItem.username.length)
            return newArr
    } 

    console.log(getUserNamesLength(users))



   
    function parseInteger(array = []){
        const newArr = array.map(currItem => Number(currItem) ? Number(currItem) : null)
        return newArr
    }

    console.log(parseInteger(["1", "2", "34"]))

    