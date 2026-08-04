document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscarProducto");
    if (!contenedor) return;
const modal = document.getElementById("modalProducto");
const cerrarModal = document.getElementById("cerrarModal");

const modalImagen = document.getElementById("modalImagen");
const modalNombre = document.getElementById("modalNombre");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const modalComprar = document.getElementById("modalComprar");
   fetch("data/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos => {

            contenedor.innerHTML = "";

            productos.forEach(producto => {

                contenedor.innerHTML += `
                   <div class="producto">

    ${producto.nuevo ? '<div class="etiqueta nuevo">NUEVO</div>' : ''}

    ${producto.oferta ? '<div class="etiqueta oferta">OFERTA</div>' : ''} 

                        <img src="${producto.imagen}" alt="${producto.nombre}" width="200">

                        <h3>${producto.nombre}</h3>

                        <p>${producto.descripcion}</p>

                        <strong>${producto.precio.toFixed(2)} €</strong>

                        <br><br>

                       <button
    class="btnCarrito"
    data-id="${producto.id}"
    data-nombre="${producto.nombre}"
    data-descripcion="${producto.descripcion}"
    data-precio="${producto.precio}"
    data-imagen="${producto.imagen}">
                            Añadir al carrito
                        </button>

                    </div>
                `;

            });

            // =====================================
            // ACTIVAR BOTONES DEL CARRITO
            // =====================================

            const botones = document.querySelectorAll(".btnCarrito");

            botones.forEach(boton => {

            boton.addEventListener("click", () => {

    modal.style.display = "flex";

    modalImagen.src = boton.dataset.imagen;
    modalNombre.textContent = boton.dataset.nombre;
    modalDescripcion.textContent = boton.dataset.descripcion;
    modalPrecio.textContent = boton.dataset.precio + " €";

    modalComprar.onclick = () => {

        agregarAlCarrito({

            id: Number(boton.dataset.id),
            nombre: boton.dataset.nombre,
            precio: Number(boton.dataset.precio),
            imagen: boton.dataset.imagen

        });

        modal.style.display = "none";

    };

});
            });

        })

        .catch(error => {

            console.error(error);

        });
cerrarModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
});
