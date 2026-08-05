// ======================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// ======================================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contador = document.getElementById("contador");
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
//======================================

function guardarCarrito(){

    localStorage.setItem("carrito", JSON.stringify(carrito));

}

//======================================

function actualizarContador(){

    if(!contador) return;

    let total = 0;

    carrito.forEach(producto=>{

        total += producto.cantidad;

    });

    contador.textContent = total;

}

//======================================

function agregarAlCarrito(producto){

    const existe = carrito.find(p=>p.id===producto.id);

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
    actualizarContador();
actualizarCarrito();
    //======================================
// MOSTRAR CARRITO
//======================================

const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

function actualizarCarrito(){

    if(!listaCarrito || !totalCarrito) return;

    listaCarrito.innerHTML = "";

    let total = 0;

    if(carrito.length===0){

        listaCarrito.innerHTML="<p>Tu carrito está vacío.</p>";
        totalCarrito.textContent="0.00 €";

        return;

    }

    carrito.forEach(producto=>{

        total += producto.precio * producto.cantidad;

        listaCarrito.innerHTML += `

<div class="itemCarrito">

<h4>${producto.nombre}</h4>

<p>Cantidad: ${producto.cantidad}</p>

<p>Precio: ${producto.precio.toFixed(2)} €</p>

<hr>

</div>

`;

    });

    totalCarrito.textContent = total.toFixed(2)+" €";

}
    actualizarContador();

    alert(producto.nombre + " añadido al carrito.");

}
//======================================
// ABRIR Y CERRAR CARRITO
//======================================

if(botonCarrito && panelCarrito){

    botonCarrito.onclick = ()=>{

        panelCarrito.classList.add("abierto");

    };

}

if(cerrarCarrito && panelCarrito){

    cerrarCarrito.onclick = ()=>{

        panelCarrito.classList.remove("abierto");

    };

}
actualizarContador();
