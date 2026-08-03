// =============================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// =============================================

// Número de WhatsApp
const TELEFONO_WHATSAPP = "34640868527";

// Cargar carrito guardado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos de la página
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

const listaCarrito = document.getElementById("listaCarrito");
const contador = document.getElementById("contador");
const totalCarrito = document.getElementById("totalCarrito");
const btnWhatsapp = document.getElementById("btnWhatsapp");

// Guardar carrito
function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}
