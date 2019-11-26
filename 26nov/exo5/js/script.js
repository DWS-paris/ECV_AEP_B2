/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        
        // Capter le submit du formulaire
        $('form').submit( (event) => {
            // Bloquer le comportement par default du formulaire
            event.preventDefault();

            /* 
            Vérifier que les champs du formulaires ne sont pas vides
            */
                if(
                    $('#userId').val().length > 0 &&
                    $('#title').val().length > 0 &&
                    $('#body').val().length > 0
                ){
                    // Créer une requête AJAX en type POST
                    $.ajax({
                        url: 'https://jsonplaceholder.typicode.com/posts',
                        methode: 'POST',
                        data: {
                            userId: $('#userId').val(),
                            title: $('#title').val(),
                            body: $('#body').val()
                        },

                        success: (data) => {
                            console.log(data);
                        },
                        error: (err) => {
                            console.error(err);
                        }
                    });
                }
            //
        });

    });
//