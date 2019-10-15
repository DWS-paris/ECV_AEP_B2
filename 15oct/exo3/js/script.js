/* 
Délcaration d'un tableau d'objets
*/
    let myList = document.querySelector('ul');
    let users = [
        {
            name: 'Chuck Norris',
            isHuman: false
        },
        {
            name: 'Donald Trump',
            isHuman: true
        },
        {
            name: 'Jonhnny Five',
            isHuman: false
        },
        {
            name: 'Elon Musk',
            isHuman: true
        }
    ];
//

/* 
Les conditions
*/
    if( 1 + 1 === 2 ){
        console.log('Vrai');
    }
    else{
        console.log('Faux');
    };

    1 + 1 === 4 ? console.log('Vrai') : console.log('Faux');
//

/* 
Boucle sur une collection de données
*/
    for( let item of users ){
        console.log( item.name );

        if( item.isHuman && item.name !== 'Donald Trump' ){
            console.log('Humain');
            myList.innerHTML += `
                <li>
                    <i class="far fa-smile"></i> ${item.name}
                </li>
            `;
        }
        else if( item.name === 'Donald Trump' ){
            console.log('Asshole');
            myList.innerHTML += `
                <li>
                    <i class="fas fa-poop"></i> ${item.name}
                </li>
            `;
        }
        else{
            console.log('Non humain');
            myList.innerHTML += `
                <li>
                    <i class="fas fa-robot"></i> ${item.name}
                </li>
            `;
        }
    };
//