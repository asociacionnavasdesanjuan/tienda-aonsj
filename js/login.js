document.getElementById("entrar").addEventListener("click", entrar);


async function entrar() {

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");


    try {

        const respuesta = await fetch("./data/socios.json");

        const socios = await respuesta.json();


        const socio = socios.find(s =>
            s.numero === usuario &&
            s.password.toUpperCase() === password.toUpperCase()
        );


        if (!socio) {

            mensaje.style.color = "red";
            mensaje.textContent =
            "Número de socio o contraseña incorrectos.";

            return;
        }


        if (socio.estado !== "ACTIVO") {

            mensaje.style.color = "red";
            mensaje.textContent =
            "Este socio no tiene acceso activo.";

            return;
        }


        localStorage.setItem(
            "socio",
            JSON.stringify(socio)
        );


        if (
            socio.rol === "ADMIN" ||
            socio.rol === "ADMIN_PRINCIPAL"
        ) {

            window.location.href = "admin.html";

        } else {

            window.location.href = "tienda.html";

        }


    } catch (error) {

        console.error(error);

        mensaje.style.color = "red";

        mensaje.textContent =
        "Error al comprobar los datos.";

    }

}
