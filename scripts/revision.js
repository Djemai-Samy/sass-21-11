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
let isPermis = false;
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

//2- Les blocs:

//2.1- Les conditions:
//2.1.1- IF/ELSE
let isCssDone = true;
let isHtmlDone = true;
let isSassDone = true;

if(isCssDone && isHtmlDone && isSassDone){
    console.log("Vous avez fini le programme")
}else{
    console.log("Vous n'avez pas fini le programme")
}

//2.1.2- SWITCH/CASE
let couleur = 'rouge';

switch(couleur){
    case 'fraise':
    case 'rouge':
        console.log('red'); 
        break;
    case 'bleu':
        console.log('blue'); 
        break;
    default:
        console.log('Couleur inconnue'); 
}

//2.1.3- Op ternaire:
// condition ? Si vrai : Si faux

let isConduire = isPermis ? "vous pouvez conduire" : "vous ne pouvez pas conduire"

console.log(isPermis ? "vous pouvez conduire" : "vous ne pouvez pas conduire");

// 2.2- Les boucles:

//2.2.1- La boucle for:
for(let i = 0; i <= 20; i = i + 2 ){
    console.log('nombre pair: ' + i);
}

//2.2.2- La boucle while:
let j = 0;
while(j <= 20){
    console.log('nombre pair: ' + j);
    j = j + 2;
}

let leNombre;
while(isNaN(leNombre)){
    leNombre = prompt("Veuillez entrer un nombre");
}



