document.addEventListener("DOMContentLoaded", async () => {

    let datos = null;

    // Primero intenta cargar los datos guardados localmente
    const datosGuardados = localStorage.getItem("configuracionAONSJ");

    if (datosGuardados) {

        datos = JSON.parse(datosGuardados);

    } else {

        // Si no existen, carga configuracion.json
        const respuesta = await fetch("data/configuracion.json");
        datos = await respuesta.json();

    }

    document.getElementById("nombre").value = datos.asociacion.nombre || "";
    document.getElementById("direccion").value = datos.asociacion.direccion || "";
    document.getElementById("localidad").value = datos.asociacion.localidad || "";
    document.getElementById("provincia").value = datos.asociacion.provincia || "";
    document.getElementById("cp").value = datos.asociacion.codigoPostal || "";
    document.getElementById("nif").value = datos.asociacion.nif || "";
    document.getElementById("telefono").value = datos.asociacion.telefono || "";
    document.getElementById("whatsapp").value = datos.asociacion.whatsapp || "";
    document.getElementById("email").value = datos.asociacion.email || "";
    document.getElementById("web").value = datos.asociacion.web || "";


    document.getElementById("guardarDatos").addEventListener("click", () => {

        datos.asociacion.nombre = document.getElementById("nombre").value;
        datos.asociacion.direccion = document.getElementById("direccion").value;
        datos.asociacion.localidad = document.getElementById("localidad").value;
        datos.asociacion.provincia = document.getElementById("provincia").value;
        datos.asociacion.codigoPostal = document.getElementById("cp").value;
        datos.asociacion.nif = document.getElementById("nif").value;
        datos.asociacion.telefono = document.getElementById("telefono").value;
        datos.asociacion.whatsapp = document.getElementById("whatsapp").value;
        datos.asociacion.email = document.getElementById("email").value;
        datos.asociacion.web = document.getElementById("web").value;

        localStorage.setItem(
            "configuracionAONSJ",
            JSON.stringify(datos)
        );

        alert("✅ Datos guardados correctamente.");

    });

});
