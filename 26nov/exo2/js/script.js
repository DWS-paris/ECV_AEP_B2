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
            let homeBtn = $('#homeBtn');
            let aboutBtn = $('#aboutBtn');
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
                homeBtn.click( () => {
                    // Récupérer la valeur d'un attribut HTML
                    let attrValue =  homeBtn.attr('data-to-load');
                    // Charger le contenu
                    loadContent( attrValue );
                });

                aboutBtn.click( () => {
                    // Récupérer la valeur d'un attribut HTML
                    let attrValue =  aboutBtn.attr('data-to-load');
                    // Charger le contenu
                    loadContent( attrValue );
                });
            //

            /* 
            Chrager le page d'accueil
            */
                loadContent('home');
            //
        //
    });
//