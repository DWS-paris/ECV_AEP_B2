/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        /* 
        Fonctions
        */
            // Créer une fonction pour charger le contenu de portfolio.json
            const fetchData = () => {
                // Utilisation de l'API fetch
                // => https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

                fetch( 'http://localhost:2789/api/portfolio/' )
                .then( (response) => { // Accès aux données
                    // Vérifier la requête
                    if( response.ok ){
                        // Renvoyer les données en JSON
                        return response.json();
                    }
                    else{
                        console.log('Problème lors de la requête');
                    };
                })
                .then( ( responseJson ) => { // Récupérer les données en JSON
                    // Afficher les portfolio
                    displayPortfolio(responseJson);
                })
                .catch( (err) => { // Erreur dee fetch
                    console.error(err);
                });
            };

            // Créer une fonction pour afficher la liste des portfolios
            const displayPortfolio = ( data ) => {
                // Faire une boucle sur data
                for( let portfolio of data ){
                    // Ajouter le portfolio dans le DOM
                    document.querySelector('main ul').innerHTML += `
                        <li>
                            <h2>${portfolio.title}</h2>
                            <button>Read more...</button>
                        </li>
                    `;
                };
            };
        //

        /* 
        Lancer l'IHM
        */
            fetchData();
        //
    });
//