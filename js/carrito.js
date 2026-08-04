// =============================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// =============================================

// Teléfono de WhatsApp
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

// =============================================
// GUARDAR CARRITO
// =============================================

function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}

// =============================================
// ABRIR CARRITO
// =============================================

if(botonCarrito){

    botonCarrito.addEventListener("click",()=>{

        panelCarrito.classList.add("abierto");

    });

}

// =============================================
// CERRAR CARRITO
// =============================================

if(cerrarCarrito){

    cerrarCarrito.addEventListener("click",()=>{

        panelCarrito.classList.remove("abierto");

    });

}

// =============================================
// ACTUALIZAR CARRITO
// =============================================

// =============================================
// ACTUALIZAR CARRITO
// =============================================

function actualizarCarrito() {

    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    let total = 0;
    let totalArticulos = 0;

    if (carrito.length === 0) {

        contador.textContent = "0";
        totalCarrito.textContent = "0.00 €";

        listaCarrito.innerHTML = `
            <p style="text-align:center;">
                Tu carrito está vacío.
            </p>
        `;

        return;

    }

    carrito.forEach(producto => {

        total += producto.precio * producto.cantidad;
        totalArticulos += producto.cantidad;

        listaCarrito.innerHTML += `

        <div class="itemCarrito">

            <h4>${producto.nombre}</h4>

            <p>

                ${producto.precio.toFixed(2)} €

            </p>

            <p>

                Cantidad:

                <strong>${producto.cantidad}</strong>

            </p>

            <hr>

        </div>

        `;

    });

    contador.textContent = totalArticulos;

    totalCarrito.textContent = total.toFixed(2) + " €";

}

    if(!listaCarrito) return;

    listaCarrito.innerHTML="";

    contador.textContent=carrito.length;

    let total=0;

    if(carrito.length===0){

        listaCarrito.innerHTML="<p>Tu carrito está vacío.</p>";

        totalCarrito.textContent="0.00 €";

        return;

    }

    carrito.forEach(producto=>{

        total+=producto.precio*producto.cantidad;

        listaCarrito.innerHTML+=`

        <div class="itemCarrito">

            <h4>${producto.nombre}</h4>

            <p>Cantidad: ${producto.cantidad}</p>

            <p>${producto.precio.toFixed(2)} €</p>

            <hr>

        </div>

        `;

    });

    totalCarrito.textContent=total.toFixed(2)+" €";

}

// =============================================
// AÑADIR PRODUCTO
// =============================================

function agregarAlCarrito(producto){

    const existe=carrito.find(item=>item.id===producto.id);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push({

            id:producto.id,

            nombre:producto.nombre,

            precio:producto.precio,

            imagen:producto.imagen,

            cantidad:1

        });

    }

    guardarCarrito();

    actualizarCarrito();

}

// =============================================
// INICIAR
// =============================================

actualizarCarrito();
