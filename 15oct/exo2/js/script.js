/* 
- Créer une variable pour capter la balise UL du DOM
- Créer un tableau conntenant 3 compétences
- Faire une boucle sur le tableau
- Pour chaque compétence ajouter une balise LI contenant la compétence
*/

/* 
Déclarations
*/
    let myList = document.querySelector('ul');
    let mySkills = ['HTML', 'CSS', 'Javascript'];
//

console.log( mySkills.length );
console.log( mySkills );
console.log( mySkills[0] );

/* 
Boucle sur une collection de données : FOR...OF
*/
    for( let item of mySkills ){
        console.log(item);

        myList.innerHTML += `<li>${item}</li>`;
    };
//

/* 
Boucle sur une collection de données : FOR
*/
    for( let i = 0; i < mySkills.length; i++ ){
        console.log( i, mySkills[i] );

        myList.innerHTML += `<li>${mySkills[i]}</li>`;
    };
//