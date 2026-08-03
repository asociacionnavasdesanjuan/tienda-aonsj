document.addEventListener("DOMContentLoaded", () => {

    let carrito = [];

    const botonCarrito = document.getElementById("botonCarrito");
    const panelCarrito = document.getElementById("carrito");
    const cerrarCarrito = document.getElementById("cerrarCarrito");
    const contador = document.getElementById("contador");
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    const btnWhatsapp = document.getElementById("btnWhatsapp");

    function actualizarCarrito() {

        contador.textContent = carrito.length;
        listaCarrito.innerHTML = "";
        totalCarrito.textContent = "0.00 €";

    }

    botonCarrito.addEventListener("click", () => {

        panelCarrito.classList.add("abierto");

    });

    cerrarCarrito.addEventListener("click", () => {

        panelCarrito.classList.remove("abierto");

    });

    btnWhatsapp.addEventListener("click", () => {

        alert("WhatsApp se configurará en el siguiente paso.");

    });

    actualizarCarrito();

});
