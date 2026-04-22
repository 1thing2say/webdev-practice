// variables

let x;
x = 100;
console.log(x);
console.log('hello');
let gpa = 2.1;
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
    document.getElementById("header").textContent = `${greeting} ${username}.`;
}

// type conversion

// ageString = String(age);
// console.log(age, typeof age);
// document.getElementById("type0").textContent = `${age} ${typeof age}, ${ageString} ${typeof ageString}`;

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

const z = Math.sin(PI);
console.log(z);

// random number generator

let randomNum
console.log(randomNum);

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

let randomLabel = document.getElementById("randomLabel");
let randomButton = document.getElementById("randomButton");

randomButton.onclick = () => {
    randomNum = Math.trunc(Math.random() * 100) + 1;
    randomLabel.textContent = randomNum;
}

// if statements

let age;

document.getElementById("ifSubmit").onclick = () => {
    age = document.getElementById("ifInput").value;
    if (isNaN(age) || age === "") {
        document.getElementById("ifLabel").textContent = `Enter an integer.`;
    } else {
        age = Number(age);
        document.getElementById("ifLabel").textContent = `You are ${age} years old.`;

        if (age >= 18) {
            document.getElementById("resultElement").textContent = "you are old enough.";
        }
        else if (age <= 0) {
            document.getElementById("resultElement").textContent = "your age cannot be 0 or below.";
        }
        else {
            document.getElementById("resultElement").textContent = "you are too young.";
        }
    }
}

// check property

document.getElementById("checkBox").onclick = () => {
    if (document.getElementById("checkBox").checked) {
        document.getElementById("checkLabel").textContent = `checked!`;
    } else {
        document.getElementById("checkLabel").textContent = `unchecked.`;
    }
}

document.getElementById("checkSubmit").onclick = () => {
    if (document.getElementById("radio0").checked) {
        document.getElementById("optionLabel").textContent = `you have chosen emerald`;
    }
    else if (document.getElementById("radio1").checked) {
        document.getElementById("optionLabel").textContent = `you have chosen blue`;

    }
    else if (document.getElementById("radio2").checked) {
        document.getElementById("optionLabel").textContent = `you have chosen indigo`;

    }
    else {
        document.getElementById("optionLabel").textContent = `please choose an option.`;
    }
}

// ternary operator
const time = new Date().getHours();
let greeting = time <= 12 ? "Good morning" : "Good afternoon";
console.log(greeting);
document.getElementById("header").textContent = greeting;

