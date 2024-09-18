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
// console.log(people[0]);
// 5
// var newList = people.slice(1);
// console.log(newList1);
// 6 ? 
// 7
// let last = [people[people.length - 1]];

// console.log(last);
// part 2.1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])

// }
// part 2.2
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])

//     if (people[i] === "Devon") {
//         break;
//     }
// }


// Exercise 2 : Your favorite colors
// const colors = ['red','blue','yellow','green','purple'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(`My #${i+1} Choice is:` + colors[i]);
// }

// 🌟 Exercise 3 : Repeat the question
// let user_choice;
// let number;

// do {
//     user_choice = prompt("Please enter a number:");
//     number = Number(user_choice);
//     if (isNaN(number)) {
//         console.log("That's not a valid number. Please try again.");
//     }
// } while (isNaN(number) || number < 10);

// console.log("You entered a valid number:", number);


// 🌟 Exercise 4 : Building Management
// 1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
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