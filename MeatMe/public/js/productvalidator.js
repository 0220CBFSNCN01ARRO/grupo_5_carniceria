window.addEventListener("load", () => {
    let form = document.querySelector("form");
    let errorSec = document.querySelector("#errors");
    let name = document.querySelector("#name");
    let type = document.querySelector("#type");
    let weight = document.querySelector("#weight");
    let price = document.querySelector("#price");
    let image = document.querySelector("#image");


    form.addEventListener("submit", (e) => {
        let errors = [];

        if (name.value.trim() == "") {
            errors.push("El nombre es obligatorio")
        }
        if (type.value.trim() == "") {
            errors.push("La categoria es obligatoria")
        }
        if (weight.value.trim() == "") {
            errors.push("Debe ingresar el peso")
        }
        if (price.value.trim() == "") {
            errors.push("Debe ingresar el Precio")
        }
        if (image.value.trim() == "") {
            errors.push("Debe ingresar una imagen del producto")
        }


        if (errors.length != 0) {
            e.preventDefault();

            errors.forEach(error => {
                errorSec.innerHTML += "<li>" + error + "</li>";
            })
        }
    })
});