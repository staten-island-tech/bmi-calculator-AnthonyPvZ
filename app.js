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
function getBMI() {
    console.log(703 * (a / b ** 2));
}
let a = Number(prompt("Enter your weight in pounds, fatty"));
let b = Number(prompt("Enter your height in inches, chuddy"));
getBMI(703 * (a / b ** 2));
function check(getBMI) {
    if (getBMI <= 18.5); {
        console.log("Lightweight");
    } else if (getBMI > 18.5 && getBMI <= 29.9) {
        console.log("Overweight");
    } else (getBMI > 24.5 && getBMI <= 29.5); {
        console.log("Obese");
    } else (getBMI > 29.5 && getBMI <= 34.9); {
        console.log("Very obese");
    } else (getBMI > 34.9); {
        console.log("Extremely obese");
    }
}

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