window.addEventListener("load", () => {
    let form = document.querySelector("form");
    let name = document.querySelector("#inputNombreProducto");
    let weight = document.querySelector("#inputKgPorUnidad");
    let price = document.querySelector("#inputPrecioPorKg");
    let image = document.querySelector("#file");


    form.addEventListener("submit", (e) => {
        let errors = [];

        if (name.value.trim() == "") {
            name.classList.add("is-invalid");
            errors.push("name","El nombre es obligatorio")
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
});
