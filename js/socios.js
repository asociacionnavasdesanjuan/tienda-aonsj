document.addEventListener("DOMContentLoaded", () => {

    const tabla = document.querySelector("#tablaSocios tbody");

    fetch("data/socios.json")
        .then(respuesta => respuesta.json())
        .then(socios => {

            tabla.innerHTML = "";

            socios.forEach(socio => {

                tabla.innerHTML += `

<tr>

<td>${socio.numero}</td>

<td>${socio.nombre}</td>

<td>${socio.telefono}</td>

<td>🟢 Activo</td>

<td>

<button>✏️</button>

<button>🗑️</button>

</td>

</tr>

`;

            });

        });

});
// =====================================
// VENTANA NUEVO SOCIO
// =====================================

const botonNuevo = document.getElementById("nuevoSocio");
const ventana = document.getElementById("ventanaSocio");
const cerrar = document.getElementById("cerrarVentana");

if (botonNuevo) {

    botonNuevo.onclick = () => {

        ventana.style.display = "flex";

    };

}

if (cerrar) {

    cerrar.onclick = () => {

        ventana.style.display = "none";

    };

}
