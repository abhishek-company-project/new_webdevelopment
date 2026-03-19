
var person = {
    name: "abhi",
    age: 23,
    surname: "gurjar",
    skills: ["html", "css", "js"],
    address: {
        city: "indore",
        state: "mp",
        pincode: "452021",
        houseNo: "48 sec-c"

    },
    college: "lncts",
    getAllDetails: function () {
        return `my name is ${this.name} ${this.surname} . i am old ${this.age}`
    },
    getAllSkills: function () {
        for (var i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i])
        }
    },
    changeName:function(name,surname){
        this.name=name,
        this.surname=surname,
        console.log("name updated")
    }

}

console.log(person.getAllDetails())
person.getAllSkills()
person.changeName("aman","sharma")
console.log(person.getAllDetails())

// console.log(person["age"])
// console.log(person.address.city)
// console.log(person.skills[0])

// person.age=35
// person["age"]=45;
// person.gender="male"
// console.log(person)

// for(var i=0;i<person.skills.length;i++){
//     console.log(person.skills[i])
// }

// var persons = [
//     {
//         name: "abhi",
//         age: 23,
//         surname: "gurjar",
//         skills: ["html", "css", "js"],
//         address: {
//             city: "indore",
//             state: "mp",
//             pincode: "452021",
//             houseNo: "48 sec-c"
//         },
//         college: "lncts"
//     },

//     {
//         name: "rahul",
//         age: 25,
//         surname: "sharma",
//         skills: ["java", "spring", "mysql"],
//         address: {
//             city: "bhopal",
//             state: "mp",
//             pincode: "462001",
//             houseNo: "12 a"
//         },
//         college: "uit"
//     },

//     {
//         name: "neha",
//         age: 22,
//         surname: "verma",
//         skills: ["python", "django", "ml"],
//         address: {
//             city: "delhi",
//             state: "delhi",
//             pincode: "110001",
//             houseNo: "22 b"
//         },
//         college: "du"
//     },

//     {
//         name: "amit",
//         age: 24,
//         surname: "yadav",
//         skills: ["c++", "dsa", "problem solving"],
//         address: {
//             city: "jaipur",
//             state: "rajasthan",
//             pincode: "302001",
//             houseNo: "5 c"
//         },
//         college: "mnit"
//     }
// ];

// console.log(persons[2].name , persons[2].skills.toString())
// console.log(persons[2].skills.toString())

// for(var i=0;i<persons.length;i++){
//     console.log(persons[i].name , persons[i].skills.toString())
// }