let isWinter: boolean = false;
//generate an error
// isWinter = 123;

//Type in typescript is inferred on variable creation, 
//so in most cases you don't have to do this:
let count: number = 5;
let myName: string = "Megan";

let myNames: string[] = ['Megan', 'Mo', 'Jess'];

//enum
enum Pets {Cat, Dog, Mouse, Rat};

let kitty: Pets = Pets.Cat;

//functions
function getName(name: string){
console.log("the name is " + name);
};

getName("Megan");