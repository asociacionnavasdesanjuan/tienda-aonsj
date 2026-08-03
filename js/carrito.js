// ======================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// ======================================

let carrito = [];

// Elementos de la página
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const contador = document.getElementById("contador");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const btnWhatsapp = document.getElementById("btnWhatsapp");

// Abrir carrito
if (botonCarrito) {
    botonCarrito.addEventListener("click", () => {
        panelCarrito.classList.add("abierto");
    });
}

// Cerrar carrito
if (cerrarCarrito) {
    cerrarCarrito.addEventListener("click", () => {
        panelCarrito.classList.remove("abierto");
    });
}

// Actualizar carrito (de momento vacío)
function actualizarCarrito() {

    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    contador.textContent = carrito.length;

    totalCarrito.textContent = "0.00 €";

}

// Botón WhatsApp (de momento)
if (btnWhatsapp) {

    btnWhatsapp.addEventListener("click", () => {

        alert("En el siguiente paso enviaremos el pedido por WhatsApp.");

    });

}

// Inicializar
actualizarCarrito();
