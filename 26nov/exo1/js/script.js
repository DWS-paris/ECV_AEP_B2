/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        // La fonction $ de jQuery
        const _$ = (selector) => {
            return document.querySelector(selector);
        }
        
        // Le sélecteur de balise HTML jQuery
        let myTitle = $('#myTitle');
        let myTitleBis = _$('h1');

        console.log(myTitle);
        console.log(myTitleBis);

        // Gestion d'événment
        /* document.querySelector('h2').addEventListener('click', ()=> {
            // Do something
        }) */

        let isOpen = false;

        $('h2').click( () => {
            if(isOpen) {
                $('#content').css('display', 'none')
                isOpen = false
            }
            else{
                $('#content').css('display', 'block')
                isOpen = true
            }
        });

    });
//