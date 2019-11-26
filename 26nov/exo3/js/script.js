/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
            - Déclarer les boutons
            - déclarer le main
            - créer une fonction pour charger le contenu
            - capter le clic
            - charger les contenu
        */

        /* 
        Déclartions
        */
            let myButtons = $('button');
            let mainContent = $('#mainContent');
        //

        /* 
        Fonctions/Méthodes
        */
            // Fonction pour charger le contenu
            let loadContent = (content) => {
                // Utilisation de la fonction $.get()
                // => https://api.jquery.com/jQuery.get/
                $.get( content + '.html', (contentHtml) => {
                    // Modifier le HTML de mainContent
                    mainContent.html( contentHtml );
                });
            };
        //
        
        /* 
        Lancer l'IHM
        */
            /* 
            Capter le clic sur les boutons
            */
                // Faire une boutcle sur le tableau de boutons
                for( let button of myButtons ){
                    // Capter le lcic sur le boutonn
                    $(button).click( () => {
                        // Récupérer la valeur d'un attribut HTML
                        let attrValue =  $(button).attr('data-to-load');
                        // Charger le contenu
                        loadContent( attrValue );
                    });
                };
            //

            /* 
            Chrager le page d'accueil
            */
                loadContent('home');
            //
        //
    });
//