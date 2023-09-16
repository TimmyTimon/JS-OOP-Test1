const student = {
    name: "Charles",
    age: 18,
    courses: ['Biology', 'Physics', 'Chemistry'],
    parentsHomeTown:{
        cityForDad:"Miami",
        cityForMum:"Dallas"
    },

    doHomework: function(){
        console.log(`Charles has completed all his homework!`)
    }
}

student.doHomework();
console.log(student.courses);
console.log(`The student's name is ${student.name} and he is ${student.age} years old.`);
console.log(`${student.name} told us that his father is from ${student.parentsHomeTown.cityForDad.toUpperCase()} and his mum is from ${student.parentsHomeTown.cityForMum.toUpperCase()}`)

