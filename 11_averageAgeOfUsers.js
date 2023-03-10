const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
   ];

    function getAverageAge(array = []){
        const usersCount = users.length
        const initialValue = 0
       
        const sumOfAges = array.reduce((acumulator,currUser) =>  acumulator + currUser.age , initialValue  )
            return sumOfAges / usersCount
    }
    console.log(getAverageAge(users));