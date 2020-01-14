document.addEventListener('DOMContentLoaded', () => {
    /* 
    Déclarations
    */
        const myForm = document.querySelector('form');
        const userEmail = document.querySelector('#userEmail');
        const userPassword = document.querySelector('#userPassword');
        const passBtn = document.querySelector('#passBtn');
        let passIsVisible = false;
    //

    /* 
    Fonctions
    */
        const getFormSubmit = () => {
            myForm.addEventListener('submit', (event) => {
                event.preventDefault();

                // Vérifier al valeur des inputs
                if( userEmail.value === 'test@test.com' && userPassword.value === 'azertyuiop' ){
                    console.log('Utilsteur connecté');
                    myForm.reset()
                }
                else{
                    console.log('Utilisateur inconnu');
                }
            })
        }

        const togglePassword = () => {
            passBtn.addEventListener('click', () =>  {
                if( passIsVisible){
                    userPassword.setAttribute('type', 'password')
                }
                else{
                    userPassword.setAttribute('type', 'text')
                }

                passIsVisible = !passIsVisible;
            })
        }
    //

    /* 
    Lancer IHM
    */
        getFormSubmit();
        togglePassword();
    //
})