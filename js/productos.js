document.addEventListener("DOMContentLoaded", () => {
// ===============================
// SOCIO CONECTADO
// ===============================

const socio = JSON.parse(localStorage.getItem("socio"));

if (!socio) {

    window.location.href = "login.html";
    return;

}

const bienvenida = document.getElementById("bienvenidaSocio");

if (bienvenida) {

    bienvenida.innerHTML = `
        👤 Bienvenido, <strong>${socio.nombre}</strong><br>
        Nº de socio: ${socio.numero}
    `;

}
    // ===============================
// CERRAR SESIÓN
// ===============================

const salir = document.getElementById("cerrarSesion");

if (salir) {

    salir.addEventListener("click", () => {

        localStorage.removeItem("socio");

        window.location.href = "login.html";

    });

}
    const contenedor = document.getElementById("productos");
    const buscador = document.getElementById("buscarProducto");
// ==========================
// FILTRO POR CATEGORÍAS
// ==========================

document.querySelectorAll(".categoria").forEach(boton => {

    boton.addEventListener("click", () => {

        const categoria = boton.dataset.categoria;

        if(categoria === "todos"){

            mostrarProductos(listaProductos);

        } else {

            const filtrados = listaProductos.filter(producto =>
                producto.categoria === categoria
            );

            mostrarProductos(filtrados);

        }


    });

});
    if (!contenedor) return;

    let listaProductos = [];

    // ==========================
    // CARGAR PRODUCTOS
    // ==========================

    fetch("data/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos => {
console.log("PRODUCTOS CARGADOS");
            listaProductos = productos;

            mostrarProductos(listaProductos);

            // ==========================
            // BUSCADOR
            // ==========================

            if (buscador) {

                buscador.addEventListener("keyup", () => {

                    const texto = buscador.value.toLowerCase();

                    const filtrados = listaProductos.filter(producto =>

                        producto.nombre.toLowerCase().includes(texto) ||

                        producto.descripcion.toLowerCase().includes(texto)

                    );

                    mostrarProductos(filtrados);

                });

            }

        })

        .catch(error => console.error(error));



    // ==========================
    // MOSTRAR PRODUCTOS
    // ==========================

    function mostrarProductos(productos) {

        contenedor.innerHTML = "";

        productos.forEach(producto => {

            contenedor.innerHTML += `

            <div class="producto">

                ${producto.nuevo ? '<div class="etiqueta nuevo">NUEVO</div>' : ''}

                ${producto.oferta ? '<div class="etiqueta oferta">OFERTA</div>' : ''}

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <strong>${producto.precio.toFixed(2)} €</strong>
<p class="stock">
    ${
        producto.stock > 0
            ? `🟢 Disponible (${producto.stock} uds.)`
            : `🔴 Agotado`
    }
</p>
${
    producto.stock > 0
    ?
`
<button
    class="btnCarrito"
    data-id="${producto.id}"
    data-nombre="${producto.nombre}"
    data-precio="${producto.precio}"
    data-imagen="${producto.imagen}">
    🛒 Añadir al carrito
</button>
`
    :
`
<button disabled class="agotado">
    ❌ AGOTADO
</button>
`
}
            </div>

            `;

        });
document.querySelectorAll(".btnCarrito").forEach(boton => {

    boton.addEventListener("click", () => {

        console.log("BOTÓN PULSADO");

        agregarAlCarrito({

            id: Number(boton.dataset.id),
            nombre: boton.dataset.nombre,
            precio: Number(boton.dataset.precio),
            imagen: boton.dataset.imagen

        });

    });

});
    }

});
