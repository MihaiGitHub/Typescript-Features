// type annotations
let apples: number = 5;

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

let now: Date = new Date();

// Classes with type annotations
class Car {}

let car: Car = new Car();

// Object literal with type annotations
// declaring a variable as an object with x and y properties of type number
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// annotation to tell typescript what values we are assigning to this variable
// (i: number) => void
//
// actual function implementation
// (i: number) => { console.log(i) }
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
