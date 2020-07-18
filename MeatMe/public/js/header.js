window.onload = () => {
    let url = location.href.slice(21, );

    switch (url) {
        case "/":
            document.querySelector(`.nav-item.inicio`).classList.add("active");
            break;
        case "/product":
            document.querySelector(`.nav-item.productos`).classList.add("active");
            break;
        case "/empresa":
            document.querySelector(`.nav-item.empresa`).classList.add("active");
            break;
        case "/recetas":
            document.querySelector(`.nav-item.recetas`).classList.add("active");
            break;
        case "/product/cart":
            document.querySelector(`.nav-item.carrito`).classList.add("active");
            break;
        case "/users/register":
            document.querySelector(`.nav-item.registrarse`).classList.add("active");
            break;
        case "/users/login":
            document.querySelector(`.nav-item.loguearse`).classList.add("active");
            break;
        default:
            document.querySelector(".nav-item.active").classList.remove("active")
            break;
    }

}