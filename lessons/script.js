// variables

let x;
x = 100;
console.log(x);
console.log('hello');
let age = 25;
let gpa = 2.1;
console.log(`You are ${age} years old`);
console.log(`Your gpa is: ${gpa}`);
console.log(typeof gpa);
let firstname = "David";
console.log(typeof firstname);
console.log(`Your name is: ${firstname}`);

// Booleans

let online = false;

console.log(typeof online);
console.log(`${firstname} is online: ${online}`);

// touching the html

document.getElementById("p1").textContent = online;
document.getElementById("p2").textContent = `GPA of ${firstname}: ${gpa}`;

// arithmetic

let students = 30;
students--;
console.log(students);
students = students * 2;
console.log(students);

// user input

let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("header").textContent = `Hello ${username}`;
}

// type conversion

ageString = String(age);
console.log(age, typeof age);
document.getElementById("type0").textContent = `${age} ${typeof age}, ${ageString} ${typeof ageString}`;

// counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}

// math (the math object)

const PI = Math.PI;
console.log(PI);

z = Math.sin(PI);
console.log(z);

// random number generator

let randomNum
console.log(randomNum);

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

randomLabel = document.getElementById("randomLabel");
randomButton = document.getElementById("randomButton");

randomButton.onclick = () => {
    randomNum = Math.trunc(Math.random() * 100) + 1;
    randomLabel.textContent = randomNum;
}