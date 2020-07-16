window.addEventListener("load", () => {

   
    //----------------------------------------------REGISTER---------------------------------------------------------//
    let formRegister = document.querySelector("form");

    if(formRegister){

    let first_name = document.querySelector("#inputName");
    let last_name = document.querySelector("#inputApellido");
    let email = document.querySelector("#inputEmail");
    let password = document.querySelector("#inputContraseña");
    let rePassword = document.querySelector("#inputConfirmarContraseña");
    // let avatar = document.querySelector("#inputAvatar");
    // console.log(avatar.files)
    let address = document.querySelector("#inputDireccion");
    let city = document.querySelector("#inputLocalidad");
    let state = document.querySelector("#inputProvincia");
    
   
    formRegister.addEventListener("submit", (e) => {
        
        let errors = [];

        if(first_name.value.trim() == ""){
            first_name.classList.add("is-invalid");
            errors.push("first_name","Debe ingresar un nombre")
        }
        if(first_name.value.trim().length < 3 || first_name.value.trim().length > 30){
            first_name.classList.add("is-invalid");
            errors.push("first_name","El nombre puede tener min. 3 letras y max. 30 letras")
        }
        if(last_name.value.trim() == ""){
            last_name.classList.add("is-invalid");
            errors.push("last_name","Debe ingresar un apellido")
        }
        if(last_name.value.trim().length < 3 || last_name.value.trim().length > 30){
            last_name.classList.add("is-invalid");
            errors.push("last_name","El apellido puede tener min. 3 letras y max. 30 letras")
        }
        if(email.value.trim() == ""){
            email.classList.add("is-invalid");
            errors.push("email","Debe ingresar un email")
        }
        if(password.value.trim().length < 8){
            password.classList.add("is-invalid");
            errors.push("password","La contraseña debe tener minimo 8 caracteres")
        }
        if(password.value.trim().indexOf("#") != -1 || password.value.trim().indexOf("!") != -1 || password.value.trim().indexOf("$") != -1 || password.value.trim().indexOf("%") != -1 || password.value.trim().indexOf("&") != -1 || password.value.trim().indexOf("/") != -1 || password.value.trim().indexOf("(") != -1 || password.value.trim().indexOf(")") != -1 || password.value.trim().indexOf("=") != -1 || password.value.trim().indexOf("?") != -1 || password.value.trim().indexOf("¡") != -1){
            password.classList.add("is-invalid");
            errors.push("password","La contraseña no puede tener los siguientes caracteres (!#$%&/()=?¡)")
        }
        if(rePassword.value.trim() != password.value.trim()){
            rePassword.classList.add("is-invalid");
            errors.push("repassword","Las contraseñas no son iguales")
        }

    
        if(errors.length) {

            e.preventDefault()
    
           for (let i = 0; i < errors.length; i=i+2) {
    
            document.querySelector(`.${errors[i]}.invalid-feedback`).innerHTML =`<p>${errors[(i+1)]}</p>`
    
           }
        }
        
        first_name.onkeydown = () => {
            if(first_name.value.trim() != ""){
                first_name.classList.remove("is-invalid");
            }
            first_name.onblur = () => {
                if(first_name.value.trim().length < 3 || first_name.value.trim().length > 30) {
                    first_name.classList.add("is-invalid");
             
                }
            }
        }
        last_name.onkeydown = () => {
            if(last_name.value.trim() != ""){
                last_name.classList.remove("is-invalid");
            }
            last_name.onblur = () => {
                if(last_name.value.trim().length < 3 || last_name.value.trim().length > 30) {
                    last_name.classList.add("is-invalid");
                }
            }
        }
        email.onkeydown = () => {
            if(email.value.trim() != ""){
                email.classList.remove("is-invalid");
            }
        }
        password.onkeydown = () => {
            if(password.value.trim() != ""){
                password.classList.remove("is-invalid");
            }
            password.onblur = () => {
                if(password.value.trim().length < 8) {
                    password.classList.add("is-invalid");
                }
            }
        }
    })
}
    //__________________________________________________________________________________________________________________//

    //---------------------------------------LOGIN--------------------------------------------------------------------//
    let formLogin = document.querySelector("form.container")

    if(formLogin){

    let email = document.querySelector("#inputEmail");
    let password = document.querySelector("#inputContraseña");

    formLogin.addEventListener("submit", (e) => {
    
        let errors = [];

        if(email.value.trim() == ""){
            email.classList.add("is-invalid");
            errors.push("email","Debe ingresar un email")
        }
        if(password.value.trim().length < 8){
            password.classList.add("is-invalid");
            errors.push("password","La contraseña debe tener minimo 8 caracteres")
        }
        if(password.value.trim().indexOf("#") != -1 || password.value.trim().indexOf("!") != -1 || password.value.trim().indexOf("$") != -1 || password.value.trim().indexOf("%") != -1 || password.value.trim().indexOf("&") != -1 || password.value.trim().indexOf("/") != -1 || password.value.trim().indexOf("(") != -1 || password.value.trim().indexOf(")") != -1 || password.value.trim().indexOf("=") != -1 || password.value.trim().indexOf("?") != -1 || password.value.trim().indexOf("¡") != -1){
            password.classList.add("is-invalid");
            errors.push("password","La contraseña no puede tener los siguientes caracteres (!#$%&/()=?¡)")
        }

        if(errors.length) {

            e.preventDefault()
    
           for (let i = 0; i < errors.length; i=i+2) {
    
            document.querySelector(`.${errors[i]}.invalid-feedback`).innerHTML = `<p>${errors[(i+1)]}</p>`
    
           }
        }
    
        email.onkeydown = () => {
            if(email.value.trim() != ""){
                email.classList.remove("is-invalid");
            }
            email.onblur = () => {
                if(email.value.trim().indexOf("@") != -1){
                    email.classList.add("is-invalid");
                    errors.push("email","Debe ingresar un email valido")
                }
            }
        }
        password.onkeydown = () => {
            if(password.value.trim() != "" ){
                password.classList.remove("is-invalid");
            }
            password.onblur = () => {
                if(password.value.trim().length < 8 ){
                    password.classList.add("is-invalid");
                    errors.push("password","La contraseña debe tener minimo 8 caracteres")
                }
            }

        }
    })
    }

    //________________________________________________________________________________________________________________//

   

});
