/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        
        /* 
        Déclarations
        */
            let productList = document.querySelector('#productList');
            let myForm = document.querySelector('form');
            let productType = document.querySelector('#productType');
            let productName = document.querySelector('#productName');
            let productComment = document.querySelector('#productComment');
            let cboxPetitDej = document.querySelector('#cboxPetitDej');
            let cboxDejeune = document.querySelector('#cboxDejeune');
            let cboxDiner = document.querySelector('#cboxDiner');
            let cboxReserve = document.querySelector('#cboxReserve');
            let productOption = 'null';
        //
        
        /* 
        Fonctions
        */
            const getFormSubmit = () => {

                // Capter l'événement 'subbmit' dur formulaire
                myForm.addEventListener('submit', (event) => {
                    // Bloquer l'événement 'submit'
                    event.preventDefault();

                    // Récupérer la valeur de l'option
                    if( cboxPetitDej.checked ){ 
                        productOption = cboxPetitDej.value 
                    }
                    else if( cboxDejeune.checked ){ 
                        productOption = cboxDejeune.value 
                    }
                    else if( cboxDiner.checked ){ 
                        productOption = cboxDiner.value 
                    }
                    else if( cboxReserve.checked ){ 
                        productOption = cboxReserve.value 
                    }
                    else{
                        productOption = 'null'
                    };

                    // Vérifier les champs du formulaire
                    if(
                        productType.value !== 'null' &&
                        productName.value.length >= 2 &&
                        productComment.value.length >= 5 &&
                        productOption !== 'null'
                    ){
                        console.log('Fomulaire OK');

                        // Ajouter le produit dans la liste
                        displayProduct(
                            productType.value,
                            productName.value,
                            productComment.value,
                            productOption
                        );
                    }
                    else{
                        console.log('Formulaire pas OK');
                    };
                });
            };

            const displayProduct = ( type, name, comment, option ) => {
                // Modifier le contenu HTML de la balise #productList
                productList.innerHTML += `
                    <li>
                        <img src="img/${type}.svg" alt="Picto ${type}">
                        <p>${name} : ${comment}</p>
                        <p>${option}</p>
                    </li>
                `;

                // Vider les champs du formulaire
                myForm.reset();
            }
        //

        /* 
        Lanceer l'IHM
        */
            getFormSubmit();
        //
    });
//