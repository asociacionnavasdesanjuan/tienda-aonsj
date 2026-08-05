document.getElementById("entrarAdmin").addEventListener("click", entrarAdmin);

function entrarAdmin() {

    const usuario = document.getElementById("usuarioAdmin").value.trim();
    const password = document.getElementById("passwordAdmin").value.trim();
    const mensaje = document.getElementById("mensajeAdmin");

    if (usuario === "ADMIN" && password === "AONSJ2026") {

        localStorage.setItem("admin", "SI");

        window.location.href = "admin.html";

    } else {

        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos.";

    }

}
