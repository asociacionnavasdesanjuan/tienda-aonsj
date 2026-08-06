document.addEventListener("DOMContentLoaded", () => {


    const datos = document.getElementById("datosSocio");


    const parametros = new URLSearchParams(window.location.search);


    const numero = parametros.get("numero");



    fetch("./data/socios.json")


    .then(res => res.json())


    .then(socios => {



        const socio = socios.find(s => s.numero === numero);



        if(!socio){


            datos.innerHTML =
            "<h3>Socio no encontrado</h3>";

            return;

        }



        datos.innerHTML = `

        <h3>🪪 Número de socio: ${socio.numero}</h3>

        <p><strong>Nombre:</strong> ${socio.nombre || "-"}</p>

        <p><strong>DNI:</strong> ${socio.dni || "-"}</p>

        <p><strong>Teléfono:</strong> ${socio.telefono || "-"}</p>

        <p><strong>Email:</strong> ${socio.email || "-"}</p>

        <p><strong>Dirección:</strong> ${socio.direccion || "-"}</p>

        <p><strong>Código Postal:</strong> ${socio.cp || "-"}</p>

        <p><strong>Población:</strong> ${socio.poblacion || "-"}</p>

        <p><strong>Provincia:</strong> ${socio.provincia || "-"}</p>


        <hr>


        <p><strong>Estado:</strong> ${socio.estado || "-"}</p>

        <p><strong>Cuota:</strong> ${socio.cuota || "-"}</p>

        <p><strong>Rol:</strong> ${socio.rol || "SOCIO"}</p>

        <p><strong>Contraseña pendiente:</strong> 
        ${socio.cambiarPassword ? "Sí" : "No"}
        </p>


        <hr>


      <h3>🪪 Carné del socio</h3>

<a href="carnets/${socio.carnet}" target="_blank">

<button>
📄 Ver mi carné
</button>

</a> 


        `;


    })


    .catch(error => {

        console.error(error);

        datos.innerHTML =
        "<h3>Error cargando datos</h3>";

    });



});



function volver(){

    window.history.back();

}
