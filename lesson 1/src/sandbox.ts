const char = "Hikmah";

console.log(char);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => console.log(input));

let age = 13;

let blackBelt = false;

const cir = ((diameter : number) => {
    return diameter * Math.PI  
});

console.log(cir);


//Objects and arrays
var names = ['hikmah', 'mariam', 'aisha'];

let mixed = ["ertyui", 3, false]

let hikmah : {name : String, belt : any, age : number}
 hikmah = {
    name : "mario",
    belt : false,
    age : 43
}

console.log("test")

let greet : Function;

greet = () => {
    console.log('Hello');
}

const add = (a : number, b : number, c? : number | string)=> {
    console.log(a + b)
}

add (3, 4);

type StringOrNum = string | number

const sub = (a : number, b : number, c? : StringOrNum) : number=> {
    return (a + b)
}

let message : (a : String, b : String) => void;

message = (name : String, greeting : String) => {
        console.log(`${name} says ${greeting}`)
} 