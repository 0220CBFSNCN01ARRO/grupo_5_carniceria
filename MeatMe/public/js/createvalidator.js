window.addEventListener("load", () => {
    let formCreate = document.querySelector(".create");
    let category = document.querySelector("#inputCategoriaProducto");
    let name = document.querySelector("#inputNombreProducto");
    let type = document.querySelector("#inputTipoProducto");
    let weight = document.querySelector("#inputKgPorUnidad");
    let price = document.querySelector("#inputPrecioPorKg");
    

    formCreate.addEventListener("submit", (e) => {
        let errors = [];

        if (category.value.trim() == "0") {
            category.classList.add("is-invalid");
            errors.push("category","Debe seleccionar una categoria")
        }
        if (name.value.trim() == "") {
            name.classList.add("is-invalid");
            errors.push("name","Debe ingresar un nombre")
        }
        if (type.value.trim() == "0") {
            type.classList.add("is-invalid");
            errors.push("type","Debe seleccionar Unidad o Kg")
        }
        if (weight.value.trim() == "") {
            weight.classList.add("is-invalid");
            errors.push("weight","Debe ingresar el peso")
        }
        if (price.value.trim() == "") {
            price.classList.add("is-invalid");
            errors.push("price","Debe ingresar el Precio")
        }
        if (errors.length != 0) {
            e.preventDefault()

            for (let i = 0; i < errors.length; i=i+2) {
    
                document.querySelector(`.${errors[i]}.invalid-feedback`).innerHTML = `<p>${errors[(i+1)]}</p>`
            }
        }
        category.onchange = () => {
            if(category.value != 0){
                category.classList.remove("is-invalid")
            }
        }
        type.onchange = () => {
            if(type.value != 0){
                type.classList.remove("is-invalid")
            }
        }
        name.onkeydown = () => {
            if(name.value != ""){
                name.classList.remove("is-invalid")
            }
        }
        price.onkeydown = () => {
            if(price.value != ""){
                price.classList.remove("is-invalid")
            }
        }
    })
    
})