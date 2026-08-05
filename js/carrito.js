
// ======================================
// CARRITO DE LA TIENDA
// Asociación Ornitológica de Navas de San Juan
// ======================================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//======================================

function guardarCarrito(){

    localStorage.setItem("carrito", JSON.stringify(carrito));

}

//======================================

function agregarAlCarrito(producto){

    const existe = carrito.find(p => p.id === producto.id);

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

    alert(producto.nombre + " añadido al carrito.");

}
