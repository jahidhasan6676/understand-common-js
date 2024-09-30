// class-6 > ----------------->

// function kitchen(){
//     let roast = 0;
//     return function(){
//         roast++;
//         return roast;
//     }
// }
// const firstServer = kitchen();
// console.log(firstServer())
// console.log(firstServer())
// console.log(firstServer())
// console.log(firstServer())
// console.log(firstServer())


// class-7 > callback ----------------------------------->

// function greeting(greetingHandler, name, id){
//     greetingHandler(name, id);
// }
// // // const number = 40;
// // const object = {price: 40000, brad: 'lenovo', memory: '8gb'}
// // greeting(object);

// function greetingHandler(name){
//     console.log('Good Morning', name)
// }
// function greetingEvening(name){
//     console.log('Good Evening', name)
// }
// function goodName(id){
//     console.log('id number 0', id)
// }
// greeting(greetingHandler, 'MD: Jahid Hasan')
// greeting(greetingEvening, 'MD: kamrul Hasan')
// greeting(goodName, 'my id number jani na')

// class-8 > value pass ---------------------->

// function sum(a, b, c){
//     const args = [...arguments];
//     // console.log(args);
    
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 56, 67, 78, 23, 12);
// // console.log(total)

// console.log(sum.length)


// let num1 = 5;
// let num2 = 7;

// function multiply(a, b){
//     a = 10;
//     const result = a + b;
//     return result;
// }
// console.log(num1)
// const total = multiply(num1, num2);
// // console.log(total)

// let students1 = {name: 'jahid', partner: 'marjan'};
// let students2 = {name: 'mehedi', partner: 'riya'};

// function makeMovie(couple1, couple2){
//     couple1.name = 'kamrul';
//     couple2.partner = 'tanzina'
// }
// makeMovie(students1, students2);
// console.log(students1, students2)

// let rolllist1 = [12, 34, 45, 6, 67, 8, 43];
// let rolllist2 = [13, 35, 68, 90, 10, 9, 4];

// function list(list1, list2){
//     list1[5] = 100;
//     list2[3] = 400;
// }
// list(rolllist1, rolllist2);
// console.log(rolllist1, rolllist2);

// extra practice-------------->

// let myString = 'Hello World';
// let firstChar = myString.charAt(6);
// console.log(firstChar)

// let myString = 'Hello World jahid my jedhd djih dihii fihr';
// let Char = myString.charCodeAt(20);
// console.log(Char)

// let string = 'Hello world';
// let substring = string.substring(1, 4);
// console.log(substring)

