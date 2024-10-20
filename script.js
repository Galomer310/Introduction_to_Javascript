// 🌟 Exercise 1 : List of people
// const people = ["Greg", "Mary", "Devon", "James"];
// 1
// people.shift();
// console.log(people);
// 2
// people.pop();
// people.push("Jason");
// console.log(people);
// 3
// people.push("Gal");
// console.log(people);
// 4
// console.log(people.indexOf("Mary"));
// 5
// const newList = people.slice(2, -1);
// console.log(newList);
// 6 ? 
// const foo = people.indexOf("Foo");
// console.log(foo);
// console.log(people);
// 7
// const last = [people[people.length - 1]];
// console.log(last);
// part 2.1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }
// part 2.2
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])

//     if (people[i] === "Devon") {
//         break;
//     }
// }


// Exercise 2 : Your favorite colors
// const colors = ["blue", "red", "green", "yellow", "purple"];
// const suffixes = ["st", "nd", "rd", "th", "th"]; // Include 'th' for 4th and 5th as placeholders

// for (let i = 0; i < colors.length; i++) {
//     // Choose the correct suffix, defaulting to 'th' for numbers beyond the 3rd
//     let suffix = suffixes[(i < 3) ? i : 3];
//     console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
// }

// 🌟 Exercise 3 : Repeat the question
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function askForNumber() {
//     rl.question('Enter a number: ', (answer) => {
//         const number = parseInt(answer);
//         if (typeof number === 'number' && number < 10) {
//             console.log(`You entered: ${number}`);
//             askForNumber(); // Continue asking if the number is less than 10
//         } else {
//             console.log('Number is 10 or higher. Exiting...');
//             rl.close();
//         }
//     });
// }

// askForNumber();


// 🌟 Exercise 4 : Building Management
// 1
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// 2
// console.log(building.numberOfFloors)
// 3
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);
// 4
// console.log(building.nameOfTenants[1])
// console.log(building.numberOfRoomsAndRent.dan[0])
// 5
// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const sumSarahDavidRent = sarahRent + davidRent;

// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sumSarahDavidRent > danRent) {
   
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's rent has been updated to 1200.");
// } else {
//     console.log("Dan's rent remains unchanged.");
// }

// console.log(building.numberOfRoomsAndRent);
// 🌟 Exercise 5 : Family
// 1
// const family = {
//     father: "John",
//     mother: "Jane",
//     son: "Tom",
//     daughter: "Emily"
// };

// console.log("Keys of the family object:");
// for (let key in family) {
//     console.log(key);
// }


// console.log("Values of the family object:");
// for (let key in family) {
//     console.log(family[key]);
// }

// Exercise 6 : Rudolf
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }

// for (let key in details) {
//     console.log(key);
//     console.log(details[key]);
// }

// Exercise 7 : Secret Group
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const firstLetters = names.map(name => name[0]);
// firstLetters.sort();
// console.log(firstLetters); 



