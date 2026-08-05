document.addEventListener("DOMContentLoaded", () => {

    const socio = JSON.parse(localStorage.getItem("socio"));

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

});
