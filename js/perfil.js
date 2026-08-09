document.addEventListener("DOMContentLoaded", () => {
    
console.log("PERFIL JS CARGADO");
    
    const socio = JSON.parse(localStorage.getItem("socio"));
    
console.log("SOCIO CARGADO:", socio);
    
    if (!socio) {

        window.location.href = "login.html";
        return;

    }

    document.getElementById("nombre").value = socio.nombre || "";
    document.getElementById("numero").value = socio.numero || "";
    document.getElementById("telefono").value = socio.telefono || "";
    document.getElementById("direccion").value = socio.direccion || "";
    document.getElementById("cp").value = socio.cp || "";
    document.getElementById("poblacion").value = socio.poblacion || "";
    document.getElementById("provincia").value = socio.provincia || "";
    
const añoActual = new Date().getFullYear();

let estadoCuota = "";

if (socio.cuotas) {

    estadoCuota = socio.cuotas[añoActual] || "PENDIENTE";

} else {

    estadoCuota = socio.cuota || "PENDIENTE";

}

document.getElementById("cuota").value = estadoCuota;
    // ===============================
// ESTADO DEL SOCIO
// ===============================

const estadoSocio = document.getElementById("estadoSocio");
const serviciosSocio = document.getElementById("serviciosSocio");


if (estadoCuota === "PAGADA") {


    estadoSocio.textContent =
    "🟢 Socio al corriente";


    serviciosSocio.textContent =
    "✅ Tienda disponible | ✅ Solicitud de anillas disponible";


} else {


    estadoSocio.textContent =
    "🟠 Cuota pendiente";


    serviciosSocio.textContent =
    "⚠️ Algunas funciones estarán bloqueadas hasta regularizar la cuota";


}
const botonCarnet = document.querySelector('a[href="mi-carnet.html"]');

if(botonCarnet){

    botonCarnet.href = "carnets/" + socio.carnet;

}
    
});
