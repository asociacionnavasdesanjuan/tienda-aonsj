document.addEventListener("DOMContentLoaded", () => {


const tabla = document.querySelector("#tablaPedidos tbody");


if(!tabla){
    return;
}



fetch("./data/pedidos.json")


.then(respuesta => respuesta.json())


.then(pedidos => {


    tabla.innerHTML = "";


    if(pedidos.length === 0){


        tabla.innerHTML = `
        <tr>
            <td colspan="6">
            No hay pedidos registrados.
            </td>
        </tr>
        `;


        return;

    }



    pedidos.forEach(pedido => {


        tabla.innerHTML += `

        <tr>

            <td>${pedido.numero || ""}</td>

            <td>${pedido.socio || ""}</td>

            <td>${pedido.fecha || ""}</td>

            <td>${pedido.estado || "PENDIENTE"}</td>

            <td>${pedido.total || "0"} €</td>

            <td>
                <button>
                Ver
                </button>
            </td>

        </tr>

        `;


    });



})


.catch(error => {


console.error(
"Error cargando pedidos:",
error
);


tabla.innerHTML = `

<tr>

<td colspan="6">

Error al cargar los pedidos.

</td>

</tr>

`;

});


});
