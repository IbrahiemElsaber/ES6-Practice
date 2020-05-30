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
// let arrayTwo = [...arrayOne];
// arrayTwo.push('S');
// console.log(arrayOne);
// console.log(arrayTwo);