window.addEventListener("load", () => {
    let formCreate = document.querySelector(".create");
    let category = document.querySelector("#inputTipoProducto");
    console.log(category.innerText)
    let name = document.querySelector("#inputNombreProducto");
    let type = document.querySelector("#inputTipoProducto");
    let weight = document.querySelector("#inputKgPorUnidad");
    let price = document.querySelector("#inputPrecioPorKg");


    formCreate.addEventListener("submit", (e) => {
        let errors = [];

        if (category.value.trim() == "") {
            category.classList.add("is-invalid");
            errors.push("category","Debe seleccionar una categoria")
        }
        if (name.value.trim() == "") {
            name.classList.add("is-invalid");
            errors.push("name","El nombre es obligatorio")
        }
        if (type.value.trim() == "") {
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
    })
    
})