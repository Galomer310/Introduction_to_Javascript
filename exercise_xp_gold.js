// Exercise 1 : Divisible by three
// let numbers = [123, 8409, 100053, 333333333, 7]

// numbers.forEach(num => {
//     if (num % 3 === 0) {
//         console.log(` ${num} True`);
//     } else {
//         console.log(` ${num} False`);
//     }
// });

// Exercise 2 : Attendance
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   };
  
//   let studentName = prompt("What is your name?");
  
//   if (studentName in guestList) {
//     console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
//   } else {
//     console.log("Hi! I'm a guest.");
//   }
  
// Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];
let ageSum = 0;

for (let i = 0; i < age.length; i++) {
    ageSum += age[i];
}

console.log("The sum of the ages is: " + ageSum);



