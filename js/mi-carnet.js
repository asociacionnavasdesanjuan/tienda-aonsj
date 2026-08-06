document.addEventListener("DOMContentLoaded", () => {


    const contenedor = document.getElementById("carnetSocio");


    const socioGuardado = localStorage.getItem("socio");


    if(!socioGuardado){


        contenedor.innerHTML = `
        <h3>No hay sesión iniciada</h3>
        <p>Debe entrar como socio para ver su carné.</p>
        `;


        return;

    }



    const socio = JSON.parse(socioGuardado);



    contenedor.innerHTML = `

    <h3>👤 ${socio.nombre}</h3>

    <p>
    Número de socio: <strong>${socio.numero}</strong>
    </p>


    <br>


    <iframe

src="carnets/${socio.nombre.toUpperCase()}.pdf"

    width="100%"

    height="600px">

    </iframe>


    `;


});



function volver(){

    window.history.back();

}
