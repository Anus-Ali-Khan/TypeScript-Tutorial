let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
// let album: any;
let album2: string | number; // Union type

myName = "John";
meaningOfLife = 42;
isLoading = true;
// album = 1984;
album2 = 54;

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
