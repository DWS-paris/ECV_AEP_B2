/* 
Déclaration de variables
*/
    // Version ES5
    var userFirstname = 'Julien'; // => :String
    
    // Version ES6^
    let userLastname = 'Noyer'; // => :String
    const birthDate = 1979; // => :Integer | Number
//

/* 
Les types de variables
*/
    let myString = 'Du texte'; // => :String
    let myInteger = 1234567890; // :Integer | :Number
    let myFloat = 23.54; // :Float
    let myBoolean = true; // :Boolean (true | false)
    let myArray = [ 'Azertyuiop', false, 54, 88.22, myBoolean ]; // => :Array
    let myObject = {
        userName: 'Julien Noyer',
        isLogged: false,
        age: 40,
        skills: [ 'HTML', 'CSS', 'Javascript' ]
    }; // :Object
//

/* 
Sélectionner une balise du DOM
*/
    let myTitle = document.querySelector('h1');
    
    // Modifier le contenu textuel de la balise HTML
    myTitle.innerText = 'Hello Javascript';
//

/* 
La concaténation
*/
    let myContent = document.querySelector('#content');
    let myContentEs6 = document.querySelector('.contentEs6');

    // Modifier le contenu HTML de la balise HTML ES5
    myContent.innerHTML = 'Bonjour <em>' + userFirstname + ' ' + userLastname + '</em>, <b>bien ou bien ?</b>';

    // Modifier le contenu HTML de la balise HTML ES6
    myContentEs6.innerHTML = `
        Bonjour <em>${userFirstname} ${userLastname}</em>, <b>bien ou bien ?</b>
    `;
//