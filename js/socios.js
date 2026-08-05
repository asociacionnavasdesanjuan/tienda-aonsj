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
