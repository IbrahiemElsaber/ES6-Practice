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