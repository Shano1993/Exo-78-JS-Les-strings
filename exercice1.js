let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let span = document.getElementById('position');
let chaineMaj = document.getElementById('chaineMaj');

alert(monTexte.indexOf('i'));

span.innerHTML = monTexte.indexOf('i').toString();

let nouveauTexte = monTexte.toUpperCase();

chaineMaj.innerHTML = nouveauTexte;








