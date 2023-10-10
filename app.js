function getBMI(a, b) {
    console.log(a / ((b / 100) ** 2));
    console.log(U)
    return (a / ((b / 100) ** 2))
}
let a = Number(prompt("Enter your weight in kilograms, fatty"));
let b = Number(prompt("Enter your height in centimeters, chuddy"));
let U = prompt("Enter your name");
UBMI = getBMI(a, b);
function check(x) {
    if (UBMI <= 18.5) {
        console.log("Lightweight");
    }
    else if (UBMI > 18.5 && UBMI <= 29.9) {
        console.log("Normalweight");
    }
    else if (UBMI > 30) {
        console.log("Obese");
    }
}
check(UBMI)

/* // declare and define function, input and output machines
// we can pass in arguments or parameters
function test(mess){
    console.log(mess);
}
//run the function
test(45);
//String ""
const x = "String";
// declaring a variable, defining a variable
test(x);

//Number/Integer
const y=98;
test(y);

//Boolean is true or false
const z = true;
test(z);

function add(a,b){;
    console.log(a + b);
}
//need to convert the string to a number
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a,b);

function add (c, d){
    //creates an output
    return x + y;
}
const sum = add(45, 34);

function calc(){
    const sum = add(45,34)
    console.log(sum);
}
calc();
 */



/* function check(x) {
    if (x === "horse");
} else{
    console.log("that is false");
// check:("horsey");
}
function complex(x,y){
    if(x === "horse" && y === "horse") {
        console.log("that is true");
    } else{
        console.log("that is false");
    }
}
complex("horse", "horse"); */
// /* const date = new Date();
// let year = date.getFullYear();
// const Dennis = {
//     firstName: "Dennis",
//     lastName: "Unknown",
//     DOB: 1/1/2007,
//     graduated: false,
//     age: function () {
//         // subtract his DOB year from current year
//         return year - this.DOB
//     },
//     siblings: [],
//     spouse: null,
// }
// const ChenZee = {
//     firstName: "Chen-Zee",
//     lastName: "Unknown",
// }
// console.log(Dennis.age) */

// let nums = [1, 2, 3, 4, 5];
// // access individual element from list/array starting from 0
// console.log(nums[0]);

// // for each loop
// // () => arrow function
// // arrow functions auto return
// nums.forEach((el)=>console.log(el));
// movies.forEach((movie))=>console.log((movie));
//students.forEach((students)) => console.log(student.firstname));
// const graduates = students.filter((student) => student.graduated !== true);
// console.log(graduates);