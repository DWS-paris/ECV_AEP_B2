/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        Créer un tableau contenant des objets :
        - content: Accueil
        - content: A propos
        - content: Portfolio
        - content: Contacts
        */
            let myCollection = [
                {
                    content: "Accueil",
                    component: "accueil.html"
                },
                {
                    content: "A propos",
                    component: "a-propos.html"
                },
                {
                    content: "Portfolio",
                    component: "portfolio.html"
                },
                {
                    content: "Contacts",
                    component: "contacts.html"
                }
            ];
        //

        /* 
        Créer un lien dans la NAV avec chaque objet du tableau
        - Faire une boucle sur le tableau
        - Ajouter une balise LI>A dans le NAV
        */
            for( let nav of myCollection ){
                // Sélectionner la balise NAV UL pour modifier le contenu HTML
                document.querySelector('nav ul').innerHTML += `
                    <li>
                        <a href="${nav.component}">${nav.content}</a>
                    </li>
                `;

                // Sélectionner toutes les balises A de la NAV
                let navLink = document.querySelectorAll('nav a');

                // Faire une boucle pour extrairre chaque balise A de la NAV
                for( let link of navLink ){
                    // Capter le clic sur chaque balisee A de la NAV
                    link.addEventListener('click', (event) => {
                        // Bloquer l'événement
                        event.preventDefault();

                        // Supprimer la class .active de toutes les balise A de la NAV
                        for( let inactive of navLink ){
                            // Supprimer la class .active
                            inactive.classList.remove('active');
                        };

                        // Ajouter la class active sur la balise
                        link.classList.add('active');

                        // Récupérer la valeur de l'attribut HREF de la balise
                        let pageContent = link.getAttribute('href');
                        
                        // Charger le contenu de la page dans la balise MAIN
                        fetch(pageContent)
                        .then( (response) => {
                            // Extraire les données du fetch
                            return response.text();
                        })
                        .then( (text) => {
                            console.log(text)
                            // Ajouter le contenu dans le DOM
                            document.querySelector('main').innerHTML = text;
                        })
                        .catch( (err) => {
                            // Capter l'erreur de fetch
                            console.error(err);
                        });
                    });
                };
            };
        //

    });
//