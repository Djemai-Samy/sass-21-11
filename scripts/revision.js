// 1- Les variables: 

// 1.1- Type nombre / number:
let sam = 50;

//Opérateurs mathematiques:
let a = 100;
let b = 200;

console.log(a * b);

// 1.2- Type chaine de caractères/Strings:
let prenom = "Samy";

//Opérateur de concatenation:
let nom = "Djemai";
console.log(prenom + ' ' + nom + ", comment allez vous?");
console.log(`Bonjour! ${prenom} ${nom}, comment allez-vous!`);

//1.3- Type boolean:
let isPermis = true;
let isMajeur = false;

//Opérateurs logiques:
//Le ET
console.log(isPermis && isMajeur);

// true && true = true
// true && false = false
// false && true = false
// false && false = false

//Le OU:
console.log(isPermis || isMajeur);
// true || true = true
// true || false = true
// false || true = true
// false || false = false

//Le xor / OU exclusif:
console.log((isPermis && !isMajeur) || (!isPermis && isMajeur))
// true xor true = false
// true xor false = true
// false xor true = true
// false || false = false


//1.4- Type tableau/ Arrays:
let cours = ['HTML', 'CSS',"JS"];

console.log(cours);

let numbers = [2, 10, 22, 15, 0, 1, 36];

let filterNumbers = numbers.filter((nombre)=>{
    return nombre >= 10;
});
