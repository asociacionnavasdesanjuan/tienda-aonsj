document.addEventListener("DOMContentLoaded", () => {


const usuario = JSON.parse(localStorage.getItem("socio"));


const boton = document.getElementById("guardarPassword");

const mensaje = document.getElementById("mensaje");



if(!usuario){

    window.location.href = "login.html";

    return;

}



boton.addEventListener("click", async ()=>{


const nueva = document.getElementById("nuevaPassword").value.trim();

const repetir = document.getElementById("repetirPassword").value.trim();



if(!nueva || !repetir){

    mensaje.style.color="red";

    mensaje.textContent="Rellena todos los campos.";

    return;

}



if(nueva !== repetir){

    mensaje.style.color="red";

    mensaje.textContent="Las contraseñas no coinciden.";

    return;

}



try{


    const respuesta = await fetch("data/socios.json");


    const socios = await respuesta.json();



    const indice = socios.findIndex(s =>

        s.numero === usuario.numero

    );



    if(indice === -1){

        mensaje.style.color="red";

        mensaje.textContent="Socio no encontrado.";

        return;

    }



    socios[indice].password = nueva;

    socios[indice].cambiarPassword = false;



    localStorage.setItem(
        "socio",
        JSON.stringify(socios[indice])
    );



    mensaje.style.color="green";

    mensaje.textContent=
    "Contraseña cambiada correctamente.";



    setTimeout(()=>{


        if(
        socios[indice].rol === "ADMIN" ||
        socios[indice].rol === "ADMIN_PRINCIPAL"
        ){

            window.location.href="admin.html";


        }else{


            window.location.href="tienda.html";


        }


    },1500);



}

catch(error){


    console.error(error);


    mensaje.style.color="red";

    mensaje.textContent=
    "Error al cambiar contraseña.";


}



});


});
