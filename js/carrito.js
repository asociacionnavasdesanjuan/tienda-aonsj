// ======================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// ======================================

const TELEFONO_WHATSAPP = "34640868527";

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ELEMENTOS
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

const listaCarrito = document.getElementById("listaCarrito");
const contador = document.getElementById("contador");
const totalCarrito = document.getElementById("totalCarrito");
const btnWhatsapp = document.getElementById("btnWhatsapp");
const vaciarCarrito = document.getElementById("vaciarCarrito");

//======================================

function guardarCarrito(){
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

//======================================

if (botonCarrito && panelCarrito) {

    botonCarrito.addEventListener("click", () => {
        panelCarrito.classList.add("abierto");
    });

}

if (cerrarCarrito && panelCarrito) {

    cerrarCarrito.addEventListener("click", () => {
        panelCarrito.classList.remove("abierto");
    });

}

//======================================

function agregarAlCarrito(producto){

    const existe=carrito.find(p=>p.id===producto.id);

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

//======================================

function actualizarCarrito(){

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
<img src="${producto.imagen}" class="fotoCarrito">
</div>

<h4>${producto.nombre}</h4>

<div class="cantidad">

<button class="menos" data-id="${producto.id}">➖</button>

<strong>${producto.cantidad}</strong>

<button class="mas" data-id="${producto.id}">➕</button>

</div>

<p>Precio: ${producto.precio.toFixed(2)} €</p>

<p><strong>Subtotal:
${(producto.precio*producto.cantidad).toFixed(2)} €
</strong></p>

<button class="eliminar" data-id="${producto.id}">
🗑 Eliminar
</button>

</div>

`;

    });

    contador.textContent=totalArticulos;
    totalCarrito.textContent=total.toFixed(2)+" €";

    // MÁS

    document.querySelectorAll(".mas").forEach(boton=>{

        boton.onclick=()=>{

            const id=Number(boton.dataset.id);

            const producto=carrito.find(p=>p.id===id);

            producto.cantidad++;

            guardarCarrito();

            actualizarCarrito();

        }

    });

    // MENOS

    document.querySelectorAll(".menos").forEach(boton=>{

        boton.onclick=()=>{

            const id=Number(boton.dataset.id);

            const producto=carrito.find(p=>p.id===id);

            producto.cantidad--;

            if(producto.cantidad<=0){

                carrito=carrito.filter(p=>p.id!==id);

            }

            guardarCarrito();

            actualizarCarrito();

        }

    });

    // ELIMINAR

    document.querySelectorAll(".eliminar").forEach(boton=>{

        boton.onclick=()=>{

            const id=Number(boton.dataset.id);

            carrito=carrito.filter(p=>p.id!==id);

            guardarCarrito();

            actualizarCarrito();

        }

    });

}

//======================================
// VACIAR CARRITO
//======================================

if(vaciarCarrito){

    vaciarCarrito.onclick=()=>{

        if(confirm("¿Vaciar todo el carrito?")){

            carrito=[];

            guardarCarrito();

            actualizarCarrito();

        }

    }

}

//======================================
// WHATSAPP
//======================================

if(btnWhatsapp){

    btnWhatsapp.onclick=()=>{

        if(carrito.length===0){

            alert("El carrito está vacío.");

            return;

        }

        let mensaje="*PEDIDO TIENDA AONSJ*%0A%0A";

        carrito.forEach(producto=>{

            mensaje+=`${producto.nombre} x${producto.cantidad}%0A`;

        });

        mensaje+=`%0ATotal: ${totalCarrito.textContent}`;

        window.open(
            `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`,
            "_blank"
        );

    }

}

actualizarCarrito();
