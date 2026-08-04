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
// ======================================
// AÑADIR PRODUCTO
// ======================================

function agregarAlCarrito(producto){

    const existe = carrito.find(item => item.id === producto.id);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push({

            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1

        });

    }

    guardarCarrito();
actualizarCarrito();
    console.log(carrito);

}
// ======================================
// ACTUALIZAR CARRITO
// ======================================

function actualizarCarrito(){

    if(!listaCarrito) return;

    listaCarrito.innerHTML="";

    let total=0;
    let totalArticulos=0;

    if(carrito.length===0){

        contador.textContent="0";

        totalCarrito.textContent="0.00 €";

        listaCarrito.innerHTML="<p>Tu carrito está vacío.</p>";

        return;

    }

    carrito.forEach(producto=>{

        total+=producto.precio*producto.cantidad;

        totalArticulos+=producto.cantidad;

        listaCarrito.innerHTML+=`

        <div class="itemCarrito">

<div class="fotoProducto">

    <img src="${producto.imagen}" class="fotoCarrito" alt="${producto.nombre}">

</div>

<h4>${producto.nombre}</h4>

<p>

<button class="menos" data-id="${producto.id}">➖</button>

<strong style="margin:0 10px;">
${producto.cantidad}
</strong>

<button class="mas" data-id="${producto.id}">➕</button>

</p>

<p>${producto.precio.toFixed(2)} €</p>

<button class="eliminar" data-id="${producto.id}">
🗑 Eliminar
</button>

<hr> 

        </div>

        `;

    });

    contador.textContent=totalArticulos;

    totalCarrito.textContent=total.toFixed(2)+" €";
    // ======================================
    // BOTONES ELIMINAR
    // ======================================

    document.querySelectorAll(".eliminar").forEach(boton => {

        boton.addEventListener("click", () => {

            const id = Number(boton.dataset.id);

            carrito = carrito.filter(producto => producto.id !== id);

            guardarCarrito();

            actualizarCarrito();

        });

    });
}
// ======================================
// INICIAR
// ======================================

actualizarCarrito();
