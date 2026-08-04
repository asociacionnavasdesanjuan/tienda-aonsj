// ======================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// ======================================

// Número de WhatsApp
const TELEFONO_WHATSAPP = "34640868527";

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

const listaCarrito = document.getElementById("listaCarrito");
const contador = document.getElementById("contador");
const totalCarrito = document.getElementById("totalCarrito");
const btnWhatsapp = document.getElementById("btnWhatsapp");

// ======================================
// GUARDAR
// ======================================

function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}

// ======================================
// ABRIR
// ======================================

botonCarrito.addEventListener("click",()=>{

    panelCarrito.classList.add("abierto");

});

// ======================================
// CERRAR
// ======================================

cerrarCarrito.addEventListener("click",()=>{

    panelCarrito.classList.remove("abierto");

});
