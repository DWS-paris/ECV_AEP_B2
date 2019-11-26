/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        Déclaration
        */
            let postList = $('#postList');
        //

        /* 
        Créer une fonction pour charger du contenu en AJAX
        */
            const AJAXrequest = (routeUrl) => {
                // Utilisation de la méthode Ajax
                $.ajax({
                    url: routeUrl,
                    method: 'GET',

                    success: (data) => {
                        // Boucle sur la collection de données (tableau d'objets)
                        for( let post of data ){
                            // Ajouter un post dans postList
                            postList.html( postList.html() + '<li><h2>'+ post.id +') '+ post.title +'</h2><p>'+ post.body +'</p></li>' )
                        }
                    },
                    error: (err) => {
                        console.error(err);
                    },
                    complete: () => {
                        // Faire une boucle sur les balises H2
                        for( let title of $('h2') ){
                            // Capter le clic sur la balise
                            $(title).click( () => {
                                // Ouvrir/fermer la balise p
                                $(title).next().slideToggle();
                            });
                        };
                    }
                });
            }
        //

        /* 
        Lancer l'IHM
        */
            AJAXrequest('https://jsonplaceholder.typicode.com/posts');
        //
    });
//