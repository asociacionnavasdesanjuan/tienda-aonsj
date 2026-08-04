document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos");
    const buscador = document.getElementById("buscarProducto");

    if (!contenedor) return;

    let listaProductos = [];

    // ==========================
    // CARGAR PRODUCTOS
    // ==========================

    fetch("data/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos => {

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

           <button
    class="btnCarrito"
    data-id="${producto.id}"
    data-nombre="${producto.nombre}"
    data-precio="${producto.precio}"
    data-imagen="${producto.imagen}">
    Añadir al carrito
</button>
            </div>

            `;

        });

    }

});
