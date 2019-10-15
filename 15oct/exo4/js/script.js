// Attendre le chargement du DOM
document.addEventListener( 'DOMContentLoaded', () => {

    /* 
    Capter le click sue la balise #burgerMenu
    - Créer une variable qui capte la balise #burgerMenu
    - Créer une variable qui capte la balise nav
    - Créer une variable pour connaitre l'état de la nav
    */
        let burgerMenu = document.querySelector('#burgerMenu');
        let burgerIcone = document.querySelector('#burgerIcone');
        let myNav = document.querySelector('nav');
        let navIsOpen = false;

        console.log(burgerMenu);
        console.log(myNav);

        // $('#burgerMenu').click( function(){ ... } )
        burgerMenu.addEventListener('click', () => {
            console.log('click');

            // Vérifier l'état de la nav
            if(navIsOpen){
                // Supprimer la class open sur la nav
                myNav.classList.remove('open');
                burgerIcone.classList.add('fa-bars');
                burgerIcone.classList.remove('fa-times');
            }
            else{
                // Ajouter la class open sur la nav
                myNav.classList.add('open');
                burgerIcone.classList.remove('fa-bars');
                burgerIcone.classList.add('fa-times');
            }

            // Inverser la valeur de navIsOpen
            navIsOpen = !navIsOpen;
        });
    //

});


