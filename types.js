var isWinter = false;
//generate an error
// isWinter = 123;
//Type in typescript is inferred on variable creation, 
//so in most cases you don't have to do this:
var count = 5;
var myName = "Megan";
var myNames = ['Megan', 'Mo', 'Jess'];
//enum
var Pets;
(function (Pets) {
    Pets[Pets["Cat"] = 0] = "Cat";
    Pets[Pets["Dog"] = 1] = "Dog";
    Pets[Pets["Mouse"] = 2] = "Mouse";
    Pets[Pets["Rat"] = 3] = "Rat";
})(Pets || (Pets = {}));
;
var kitty = Pets.Cat;
//functions
function getName(name) {
    console.log("the name is " + name);
}
;
getName("Megan");
