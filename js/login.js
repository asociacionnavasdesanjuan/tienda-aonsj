document.getElementById("entrar").addEventListener("click", entrar);

async function entrar() {

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    try {

        const respuesta = await fetch("data/socios.json");
        const socios = await respuesta.json();

        const socio = socios.find(s =>

            s.numero === usuario &&
            s.password === password

        );

        if (socio) {

            localStorage.setItem("socio", JSON.stringify(socio));

            window.location.href = "tienda.html";

        } else {

            mensaje.style.color = "red";
            mensaje.textContent = "Número de socio o contraseña incorrectos.";

        }

    } catch (error) {

        mensaje.style.color = "red";
        mensaje.textContent = "Error al comprobar los datos.";

        console.error(error);

    }

}
