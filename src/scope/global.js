//Variables

var a; //Declarando

var b = 'b'; //Declarando y asignando

b = 'bb'; //Reasignación

var a = 'aa'; //Redeclaración


//Global Scope

var fruit = 'Apple'; //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; //Global
    console.log(country);
}

countries();
console.log(country);
