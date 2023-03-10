const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
    ]

    function filterUsers(array = []){
        const newArr = array.filter(currItem => currItem.lang !== "ru")
        return newArr
    }

    console.log(filterUsers(users))