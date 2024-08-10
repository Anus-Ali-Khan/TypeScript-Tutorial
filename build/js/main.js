"use strict";
//hover over these to see their types
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
// stringArr[0] = 42; // it will not because its an string array
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Hallen");
//Tuple (used to specify specific data type at specific index and and fixed length )
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// myTuple = mixed; // that is not same because mixed can have less or more elements than tuple but tuple can only have 3
//Objects
//Since array is a type of object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
}; // if we miss any of the key-value pair of type Guitarist then typeScript will show an error
let jp = {
    name: "Jimmy",
    //   active: false,
    albums: ["I", "II", "III"],
};
evh = jp;
// evh.years = 40; // we cannot add any key like this because it does not exist on Guitarist
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; // because name can be undefined thats why adding optional operator
};
console.log(greetGuitarist(jp));
//Enums
//Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but smoething added to the language and runtime;
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
