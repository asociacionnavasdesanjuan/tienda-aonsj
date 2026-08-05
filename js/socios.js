document.addEventListener("DOMContentLoaded", () => {

    const tabla = document.querySelector("#tablaSocios tbody");
    const buscar = document.getElementById("buscarSocio");

    let listaSocios = [];


    cargarSocios();


    function cargarSocios(){

      fetch("./data/socios.json")

        .then(respuesta => respuesta.json())

        .then(socios => {

            listaSocios = socios;

            mostrarSocios(listaSocios);

        })

        .catch(error => {

            console.error("Error cargando socios:", error);

        });

    }



    function mostrarSocios(socios){


        tabla.innerHTML = "";


        socios.forEach(socio => {


            tabla.innerHTML += `

<tr>

<td>${socio.numero}</td>

<td>${socio.nombre}</td>

<td>${socio.telefono || "-"}</td>

<td>
${socio.estado === "ACTIVO" ? "🟢 Activo" : "🔴 Inactivo"}
</td>


<td>

<button onclick="verSocio('${socio.numero}')">
👁️
</button>


<button onclick="editarSocio('${socio.numero}')">
✏️
</button>


<button onclick="eliminarSocio('${socio.numero}')">
🗑️
</button>


</td>

</tr>

`;

        });


    }



    // BUSCADOR

    if(buscar){

        buscar.addEventListener("input",()=>{


            const texto = buscar.value.toLowerCase();


            const filtrados = listaSocios.filter(socio =>

                socio.numero.includes(texto) ||

                socio.nombre.toLowerCase().includes(texto)

            );


            mostrarSocios(filtrados);


        });

    }



});




// =============================
// FUNCIONES PREPARADAS
// =============================


function verSocio(numero){

window.location.href =
"ficha-socio.html?numero=" + numero;

}



function editarSocio(numero){

    alert(
        "Editar socio Nº " + numero
    );

}



function eliminarSocio(numero){

    const confirmar = confirm(
        "¿Eliminar definitivamente el socio Nº " + numero + "?"
    );


    if(confirmar){

        alert(
            "Preparado para eliminar socio Nº " + numero
        );

    }

}



// =============================
// NUEVO SOCIO
// =============================

const botonNuevo = document.getElementById("nuevoSocio");

const ventana = document.getElementById("ventanaSocio");

const cerrar = document.getElementById("cerrarVentana");


if(botonNuevo){

    botonNuevo.onclick = ()=>{

        ventana.style.display="flex";

    };

}



if(cerrar){

    cerrar.onclick = ()=>{

        ventana.style.display="none";

    };

}
