document.getElementById("entrar").addEventListener("click", entrar);

function entrar() {

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    // Usuario de prueba
    if (usuario === "001" && password === "AONSJ2026") {

        window.location.href = "tienda.html";

    } else {

        mensaje.style.color = "red";
        mensaje.textContent = "Número de socio o contraseña incorrectos.";

    }

}
