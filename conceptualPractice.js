const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];

// const city = people[1]?.address?.city;
// console.log(city)
// people.map((person) => {
//     const sentence = `
//     person's name is ${person.name}. City: ${person?.address?.city || 'N/A'}
//     `;
//     console.log(sentence)
// })

// const age = people.find((p) => p.age >= 40);
// console.log(age)


// scic---------->

// const students = [
    
//     { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
//     { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
//     { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
//     { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
//     { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
//     {name: "jackie bro", email: "jackie@gamil.com", avg: 57, fiftyPercent: true},
//     {name: "mehedy bro",  email: "mehedy@gamil.com", avg: 56, fiftyPercent: true,},
//   ];
//   const findSCIC = (students) =>  students.filter((p) => p.avg >= 48 && p.fiftyPercent === true) .map((p) => p.name);
//   const result = findSCIC(students);
//   console.log(result);

// find jamai ------------------>

// const polapain = [
//     { Name: "Abul", job: "sorkari", salary: 17000 },
//     { Name: "Babul", job: "besorkari", salary: 25000 },
//     { Name: "Kabul", job: "sorkari", salary: 21000 },
//     { Name: "Habul", job: "besorkari", salary: 47000 },
//     { Name: "Jabul", job: "sorkari", salary: 23000 },
//     { Name: "Mabul", job: "besorkari", salary: 55000 },
//   ];

//   const jamai = polapain.filter((person) => (person.job === "sorkari" && person.salary >= 20000) || (person.job === "besorkari" && person.salary >= 40000));
  
//   const lottary = Math.floor(Math.random()*jamai.length);
//   console.log(jamai[lottary].Name, 'tumi jitso......!')