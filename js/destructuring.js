// //Destructuring (object)
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
// const { name: personName, age: personAge, city: personCity, height: personHeight = '194', languages: { Arabic, English, France, Indian = '20%' } } = Person;
// console.log(`My name is: ${personName}, i'm ${personAge} years old, i live in ${personCity},my tall is ${personHeight}, and my Arabic language is ${Indian}`);

// //nested object in object destructuring 
// const { Arabic: myArabic, English: myEnglish, France: myFrance } = Person.languages;
// console.log(`My Arabic language is: ${myArabic}, my English language is: ${myEnglish}, and my France language is: ${myFrance}`);

// //Destructureing (Array)
// const cars = ['Ford', 'BMW', 'Mercides', 'Toyota'];
// // const [typeOne, typeTwo, typeThree, typeFour, typeFive = 'default'] = cars;
// // console.log(`Cars types are ${typeOne}, ${typeTwo}, ${typeThree} ${typeFour}, ${typeFive}`);

// //Escaping elements
// const [typeOne, , typeThree, , typeFive = 'default'] = cars;
// console.log(`Cars types are ${typeOne}, ${typeThree}, ${typeFive}`);

//nested arrays
// const cities = ['Egypt', 'KSA', 'USA', ['Cairo', 'Alex', 'Dakahlia', ['Mansoura', 'Dekrnes', 'Manzala']]];
// const [cityOne, cityTwo, cityThree, [cityoneEgy, cityTwoEgy, cityThreeEgy, [cityoneEgyDakah, cityTwoEgyDakah, cityThreeEgyDakah]]] = cities;
// console.log(`I'm from ${cityOne}, i live in ${cityThreeEgy}, sepcially at ${cityThreeEgyDakah}, but i wanna travel to ${cityTwo} and ${cityThree}.`);

//using rest operator in nested arrays
// const [one, two, three, ...other] = cities;
// console.log(` All the cities ara ( ${one}, ${two}, ${three}, ${other } )`);

//swapping between two variables

// let name = 'number',
//     number  = 'name';

// //old way
// // let swapper = name;
// // name = number;
// // number = swapper;
// //using destructuring way
// // [name, number] = [number, name];

// console.log(`name is ${name}, and numbers is ${number}`);

//destructuring between mixed content (objects and arrays)
// const user = {
//     username: 'ibrahim',
//     city: 'Mansoura',
//     skills: {
//         html: '90%',
//         css: '60%',
//         js: ['Vuejs', 'Reactjs', 'Angularjs']

//     }
// };
// const { username, city, skills: { html, css, js: [Vuejs, Reactjs, Angularjs] } } = user;
// console.log(`My name is ${username}, and I live in ${city}.`);
// console.log(`My Html skills progress is ${html}, and css is ${css}.`);
// console.log(`I have knowledge in Js frameworks ike ${Vuejs}, ${Reactjs}, ${Angularjs}.`);

//converting js Array into js Object
// const user = {
//     username: 'ibrahim',
//     city: 'Mansoura',
//     skills: {
//         html: '90%',
//         css: '60%',
//         js: {
//             frameworkOne: 'Vuejs',
//             frameworkTwo: 'Reactjs',
//             frameworkThree: 'Angularjs'
//         }
//     }
// };

// const { username, city, skills: { html, css, js: { frameworkOne, frameworkTwo, frameworkThree } } } = user;
// console.log(`My name is ${username}, and I live in ${city}.`);
// console.log(`My Html skills progress is ${html}, and css is ${css}.`);
// console.log(`I have knowledge in Js frameworks ike ${frameworkOne}, ${frameworkTwo}, ${frameworkThree}.`);

//using destructuring as paramters 
// const user = {
//     username: 'ibrahim',
//     city: 'Mansoura',
//     skills: {
//         html: '90%',
//         css: '60%',
//         js: ['Vuejs', 'Reactjs', 'Angularjs']

//     }
// };

// function showUserInfo({ username, city, skills: { html, css, js: [Vuejs, Reactjs, Angularjs] } }) {
//     console.log(`My name is ${username}, and I live in ${city}.`);
//     console.log(`My Html skills progress is ${html}, and css is ${css}.`);
//     console.log(`I have knowledge in Js frameworks ike ${Vuejs}, ${Reactjs}, ${Angularjs}.`);
// }
// showUserInfo(user);
//using destructuring object on dynamic variables
// const name = {
//     firstName: 'ibrahim',
//     secondName:'Elsaber'
// };
// const myName = 'firstName';
// const { [myName]: myFirstName, secondName: mySecondName} = name;
// console.log(`my first name is ${myFirstName}, and my second name is ${mySecondName}`);

//using object destructuring on declared variable
// let name;
// const user ={
//     name: 'ibrahim'
// };
// ({name: firstName}= user);
// console.log(`My name is ${firstName}`);