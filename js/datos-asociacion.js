document.addEventListener("DOMContentLoaded", async () => {

    try {

        const respuesta = await fetch("data/configuracion.json");
        const datos = await respuesta.json();

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

    } catch (error) {

        console.error("Error cargando la configuración:", error);

    }

});
