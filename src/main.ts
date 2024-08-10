//hover over these to see their types
let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
// stringArr[0] = 42; // it will not because its an string array

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Hallen");

//Tuple (used to specify specific data type at specific index and and fixed length )
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

mixed = myTuple;

// myTuple = mixed; // that is not same because mixed can have less or more elements than tuple but tuple can only have 3

//Objects
//Since array is a type of object
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

//exampleObj.prop1 = 42 // cannot be done because it is a string

interface Guitarist {
  name?: string;
  active?: boolean; //? makes the property optional either boolean or undefined
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}; // if we miss any of the key-value pair of type Guitarist then typeScript will show an error

let jp: Guitarist = {
  name: "Jimmy",
  //   active: false,
  albums: ["I", "II", "III"],
};
evh = jp;

// evh.years = 40; // we cannot add any key like this because it does not exist on Guitarist

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}`; // because name can be undefined thats why adding optional operator
};

console.log(greetGuitarist(jp));

//Enums
//Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but smoething added to the language and runtime;

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);
