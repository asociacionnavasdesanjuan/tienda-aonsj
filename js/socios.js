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
// =============================
// GUARDAR NUEVO SOCIO
// =============================

const guardarNuevo = document.getElementById("guardarNuevoSocio");


if(guardarNuevo){


    guardarNuevo.onclick = async ()=>{


        const nombre = document.getElementById("nuevoNombre").value.trim();

        const dni = document.getElementById("nuevoDni").value.trim();

        const telefono = document.getElementById("nuevoTelefono").value.trim();

        const email = document.getElementById("nuevoEmail").value.trim();

        const direccion = document.getElementById("nuevaDireccion").value.trim();

        const cp = document.getElementById("nuevoCp").value.trim();

        const poblacion = document.getElementById("nuevoPoblacion").value.trim();

        const provincia = document.getElementById("nuevoProvincia").value.trim();



        if(!nombre || !dni){

            alert("El nombre y el DNI son obligatorios.");

            return;

        }



        const respuesta = await fetch("./data/socios.json");

        const socios = await respuesta.json();



        let numeros = socios.map(s => Number(s.numero));


        let siguiente = Math.max(...numeros) + 1;



        let numeroNuevo = String(siguiente).padStart(3,"0");



        const nuevoSocio = {


            id: siguiente,

            numero: numeroNuevo,

            nombre: nombre,

            dni: dni,

            password: dni,

            telefono: telefono,

            email: email,

            direccion: direccion,

            cp: cp,

            poblacion: poblacion,

            provincia: provincia,

            cambiarPassword: true,

            estado: "ACTIVO",

            cuota: "PENDIENTE",

            rol: "SOCIO"


        };



        console.log("Nuevo socio preparado:", nuevoSocio);



        alert(
            "Socio creado correctamente: Nº " + numeroNuevo
        );


        ventana.style.display="none";


    };


}
