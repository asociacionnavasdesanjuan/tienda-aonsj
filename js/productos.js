document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("productos"); 
const buscador = document.getElementById("buscarProducto");
    if (!contenedor) return;

    fetch("data/productos.json")
    .then(respuesta => {
        console.log("Respuesta:", respuesta.status);
        return respuesta.json();
    })
    .then(productos => {

        console.log("Productos cargados:", productos);


            contenedor.innerHTML = "";

           let listaProductos = productos;

mostrarProductos(listaProductos);

                contenedor.innerHTML += `
                    <div class="producto">

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

            activarBotones();

        })
        .catch(error => {

            console.error("Error cargando productos:", error);

        });

});


function activarBotones() {

    const botones = document.querySelectorAll(".btnCarrito");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            alert("Producto añadido al carrito (lo conectaremos en el siguiente bloque).");

        });

    });

}
function mostrarProductos(listaProductos){

    contenedor.innerHTML = "";

    listaProductos.forEach(producto=>{

        contenedor.innerHTML += `
            <div class="producto">

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

    activarBotones();

}
