//Example to show useing Arrow function on this keyword
//we can't use the same value of this in two functions
// function Cars(){
//     this.carCounter = 0;
//     setInterval(function(){
//         this.carCounter++;
//         console.log(this.carCounter);
//     }, 1000)
// }

// let newCar = new Cars();

//fisrt solution to the pervious problem [ regular function]

// function Cars(){
//     let that = this;
//     this.carCounter = 0;
//     setInterval(function(){
//         that.carCounter++;
//         console.log(that.carCounter);
//     }, 1000);
// }
// let newCar = new Cars();

//second solution using [arrow function]

// function Cars(){
//     this.carCounter = 0;
//     setInterval(()=>{
//         this.carCounter++;
//         console.log(this.carCounter);
//     }, 1000)
// }
// let newCar = new Cars();

// //using spread operator

// let oldNumbers = [1, 2, 3],
//     newNumbers = [4, 5, 6],
//     otherNumbers = [10, 20, 30];
//     numbers = oldNumbers.concat(newNumbers);

// console.log(...oldNumbers.concat(newNumbers).concat(otherNumbers));


//clone array to another without using spread operator
// let arrayOne = [1, 2, 3];
// arrayTwo = arrayOne;

// arrayOne.push('t');
// console.log(arrayOne);
// console.log(arrayTwo);
//using spread operator
// let arrayOne = [1, 2, 3];
// let arrayTwo = [...arrayOne];
// arrayTwo.push('S');
// console.log(arrayOne);
// console.log(arrayTwo);
//using spred operator to define minimum number in array

// let numbers = [1, 2, -5, 66, -90, 1000];

// console.log(Math.min(numbers));  // without spread operator
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

//using rest paramters

// function sumAll(...myParams){
//     let index = 0;
//     for(let myParam of myParams) index+=myParam;
//     return index;
// }
// console.log(sumAll(5, 10, 20));


//using new string methods in ES6
//startswith ==> string.startsWith(search string, position = 0)
//endswith ====> strin.endsWith(search string, end position= string.length)

// let name = "Ibrahim Mohammed Elsaber";
//     console.log(name.startsWith('Mo',8 ));
//     console.log(name.endsWith('ed', 16));

//using new string methods in es6
//includes ==> string.includes(search string, postion = 0)
//repeat ====> string.repeat(counter);

// let Products = {
//     productOne : 'Iphone',
//     productTwo : 'Samsung',
//     productThree : 'Sony'
// }
// console.log(Products.productOne);
// console.log(Products.productOne.includes('Iphone'));
// console.log(Products.productThree.includes('Iphone'));
// console.log(Products.productOne.repeat(2));

//Destructuring (object)
// let Person = {
//     name: 'Ibrahim',
//     age: 30,
//     city: 'Mansoura',
//     job: 'Software Engineer',
//     languages: {
//         Arabic: '100%',
//         English: '60%',
//         France: '30%',
//         // Indian:'25%'
//     }
// };

// const { name: personName, age: personAge, city: personCity, height: personHeight = '194', languages: {Arabic, English, France, Indian = '20%'} } = Person;
// console.log(`My name is: ${personName}, i'm ${personAge} years old, i live in ${personCity},my tall is ${personHeight}, and my Arabic language is ${Indian}`);
// //just nested object in object destructuring 
// const {Arabic: myArabic, English: myEnglish,France: myFrance}= Person.languages;
// console.log(`My Arabic language is: ${myArabic}, my English language is: ${myEnglish}, and my France language is: ${myFrance}`);

//Destructureing (Array)

// const cars = ['Ford', 'BMW', 'Mercides', 'Toyota'];
// // const [typeOne, typeTwo, typeThree, typeFour, typeFive = 'default'] = cars;
// // console.log(`Cars types are ${typeOne}, ${typeTwo}, ${typeThree} ${typeFour}, ${typeFive}`);
// //Esaping elements
// const [typeOne, , typeThree, , typeFive = 'default'] = cars;
// console.log(`Cars types are ${typeOne}, ${typeThree}, ${typeFive}`);

