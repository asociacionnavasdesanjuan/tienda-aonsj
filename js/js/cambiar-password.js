document.getElementById("guardar").addEventListener("click", guardarPassword);

function guardarPassword() {

    const nueva = document.getElementById("nuevaPassword").value.trim();
    const repetir = document.getElementById("repetirPassword").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (nueva.length < 6) {

        mensaje.style.color = "red";
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;

    }

    if (nueva !== repetir) {

        mensaje.style.color = "red";
        mensaje.textContent = "Las contraseñas no coinciden.";
        return;

    }

    let socio = JSON.parse(localStorage.getItem("socio"));

    socio.password = nueva;
    socio.cambiarPassword = false;

    localStorage.setItem("socio", JSON.stringify(socio));

    mensaje.style.color = "green";
    mensaje.textContent = "Contraseña actualizada correctamente.";

    setTimeout(() => {

        window.location.href = "tienda.html";

    }, 1500);

}
