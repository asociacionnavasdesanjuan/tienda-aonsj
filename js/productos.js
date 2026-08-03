document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    fetch("data/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos => {

            contenedor.innerHTML = "";

            productos.forEach(producto => {

                contenedor.innerHTML += `
                    <div class="producto">

                        <img src="${producto.imagen}" alt="${producto.nombre}" width="200">

                        <h3>${producto.nombre}</h3>

                        <p>${producto.descripcion}</p>

                        <strong>${producto.precio.toFixed(2)} €</strong>

                        <br><br>

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

        });

});
