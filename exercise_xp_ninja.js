// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let fullName = '';
// let mass = 0;
// let height = 0;

// function askFullName() {
//     rl.question('Please enter your full name: ', (answer) => {
//         fullName = answer;
//         console.log(`Full Name: ${fullName}`);
//         askMass(); // Call the next question function
//     });
// }

// function askMass() {
//     rl.question('Enter your mass (kg): ', (answer) => {
//         mass = parseFloat(answer);
//         if (isNaN(mass) || mass <= 0) {
//             console.log('Please enter a valid mass.');
//             askMass()
//         } else {
//             console.log(`Mass: ${mass} kg`);
//             askHeight()
//         }
//     });
// }

// function askHeight() {
//     rl.question('Enter your height(cm): ', (answer) => {
//         height = parseFloat(answer);
//         if (isNaN(height) || height <= 0) {
//             console.log('Please enter a valid height.');
//             askHeight();
//         } else {
//             console.log(`Height: ${height} cm`);
//             calculateBMI();
//             rl.close();
//         }
//     });
// }

// function calculateBMI() {
//     const heightInMeters = height / 100;
//     const bmi = mass / (heightInMeters * heightInMeters);
//     let category = '';

//     if (bmi < 18.5) {
//         category = 'Underweight';
//     } else if (bmi < 24.9) {
//         category ='Normal weight';
//     } else if (bmi < 29.9) {
//         category = 'Overweight';
//     } else {
//         category = 'Obesity';
//     }
//     console.log(`${fullName}, your BMI is ${bmi.toFixed(2)}, Category: ${category}`);
// }


// // Start the chain of questions
// askFullName();


// Exercise 2 : Grade Average


let gradesList = [50, 60, 60, 80, 70, 70];

function findAvg(gradesList) {
    let gradesSum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        gradesSum += gradesList[i];
    }
    let average = (gradesSum / gradesList.length).toFixed(1);
    isPass(average);
}

function isPass(average) {
    if (average < 65) {
        console.log(`Your Average is: ${average}, You failed the course so you must repeat it!.`);
    } else {
        console.log(`Your Average is: ${average}, you Pass the course, free for the summer!`);
    }
}

findAvg(gradesList);


