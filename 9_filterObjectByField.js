const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",   
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    isAstronaut: false,
    },
    ];

    function filterByField(array = [],filterableField){
        const newArr = array.filter(currItem => currItem[filterableField] )
            return newArr
    }
    console.log(filterByField(users, "isAstronaut"));