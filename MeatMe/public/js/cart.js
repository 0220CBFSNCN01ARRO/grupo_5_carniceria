const total = document.querySelectorAll("td .precio")
const subTotal = total.forEach(precio => {
console.log(precio.innerText)
    return Number(precio.innerText)+Number(precio.innerText);
});
console.log(subTotal)

// const precioTotal = subTotal.forEach(precio => {
//     return precio+precio
// })