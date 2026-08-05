document.addEventListener("DOMContentLoaded", () => {

    const tabla = document.querySelector("#tablaProductos tbody");

    fetch("data/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos => {

            tabla.innerHTML = "";

            productos.forEach(producto => {

                tabla.innerHTML += `

<tr>

<td>
<img src="${producto.imagen}" width="60">
</td>

<td>${producto.nombre}</td>

<td>${producto.precio.toFixed(2)} €</td>

<td>${producto.stock ?? "-"}</td>

<td>${producto.stock > 0 ? "🟢 Disponible" : "🔴 Agotado"}</td>

<td>

<button>✏️</button>

<button>🗑️</button>

</td>

</tr>

`;

            });

        })

        .catch(error => {

            console.error(error);

            tabla.innerHTML = `
                <tr>
                    <td colspan="6">
                        Error al cargar los productos.
                    </td>
                </tr>
            `;

        });

});
// =====================================
// VENTANA NUEVO PRODUCTO
// =====================================

const botonNuevoProducto = document.getElementById("nuevoProducto");
const ventanaProducto = document.getElementById("ventanaProducto");
const cerrarVentanaProducto = document.getElementById("cerrarVentanaProducto");

if (botonNuevoProducto) {

    botonNuevoProducto.onclick = () => {

        ventanaProducto.style.display = "flex";

    };

}

if (cerrarVentanaProducto) {

    cerrarVentanaProducto.onclick = () => {

        ventanaProducto.style.display = "none";

    };

}
