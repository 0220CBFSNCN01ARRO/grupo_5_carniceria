window.onload = () => {
  function obtenerTotal() {
    let precioTotal = 0;
    const subTotales = document.querySelectorAll(".precio");
    subTotales.forEach((subTotal) => {
      precioTotal += Number(subTotal.innerHTML);
    });

    return precioTotal;
  }

  const tr = document.querySelectorAll(".item");
  console.log(tr);

  if (tr != null) {
    const total = document.querySelector(".precio-total");
    const subTotales = document.querySelectorAll(".precio");

    subTotales.forEach((precio) => {
      console.log(precio.innerHTML);

      total.innerHTML = Number(total.innerHTML) + Number(precio.innerHTML);

      tr.forEach((cant) => {
        const cantidad = cant.querySelector(".cart-type");
        const subTotal = cant.querySelector(".precio");

        cantidad.onchange = () => {
          const precio = cant.querySelector(".title p");
          subTotal.innerHTML =
            Number(precio.innerHTML) * Number(cantidad.value);
          document.querySelector(".precio-total").innerHTML = obtenerTotal();
        };
      });
    });
  }

  const botonEliminar = document.querySelectorAll(".eliminar");

  botonEliminar.forEach((boton) => {
    boton.onclick = () => {
      let id = boton.getAttribute("data-id");
      document.getElementById(`${id}`).innerHTML = "";
      const subTotales = document.querySelectorAll(".precio");
      const total = document.querySelector(".precio-total");

      subTotales.forEach(precio => {
          console.log(precio.innerHTML)
        total.innerHTML = 0
        total.innerHTML = Number(total.innerHTML) + Number(precio.innerHTML);
      });
    };
  });
};
