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
// while(isNaN(leNombre)){
//     leNombre = prompt("Veuillez entrer un nombre");
// }

//Les fonctions:

//Déclaration de la fonction
function afficheBonjour(){
    console.log('Bonjour Samy!');
}

//Executer la fonction
afficheBonjour();

afficheBonjour();

// Déclaration de fonction paramétré
function disBonjour(nom, prenom){
    console.log(`Bonjour ${nom} ${prenom}!`);
}

disBonjour("Djemai", "Samy");
disBonjour('John', "Doe");

function returnBonjour(nom, prenom){
    return `Bonjour ${nom} ${prenom}!`;
}

console.log(returnBonjour("Fred", "Potter"));

//Exemple: Moyenne:

function moyenne(notes){
  let somme = 0;
  for(let i = 0; i < notes.length; i++ ){
    somme = somme + notes[i];
  }

  let laMoyenne = somme / notes.length;// 11
  
  return Math.round(laMoyenne * 100) / 100;
}

console.log(moyenne([15, 12, 7, 10, 13, 15, 6]));
console.log(moyenne([10, 8, 12, 13, 15]));

//les fonctions callbacks:
function nombrePairs(callback){
    for(let i = 0; i<=20; i= i + 2){
        callback(i);
    }
}

nombrePairs((leNombrePair)=>{
    console.log(leNombrePair)
})

nombrePairs((leNombrePair)=>{
    console.log("Le nombre pairs est "+ leNombrePair)
})

//Les objet et classes

//Manipulation du DOM

//Tuto Navbar Responsive


//CSS:
// Les animations et la 3D.
// Les media query: Site responsive.

// SASS:
//Les bases
//Exemple Bootstrap
