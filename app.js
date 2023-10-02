// declare and define function, input and output machines
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