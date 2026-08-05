document.addEventListener("DOMContentLoaded",()=>{


const datos = document.getElementById("datosSocio");


const parametros = new URLSearchParams(window.location.search);


const numero = parametros.get("numero");



fetch("data/socios.json")


.then(res=>res.json())


.then(socios=>{


const socio = socios.find(s=>s.numero === numero);



if(!socio){

datos.innerHTML = 
"<h3>Socio no encontrado</h3>";

return;

}



datos.innerHTML = `


<p><strong>Número de socio:</strong> ${socio.numero}</p>

<p><strong>Nombre:</strong> ${socio.nombre}</p>

<p><strong>DNI:</strong> ${socio.dni || "-"}</p>

<p><strong>Teléfono:</strong> ${socio.telefono || "-"}</p>

<p><strong>Estado:</strong> ${socio.estado}</p>

<p><strong>Rol:</strong> ${socio.rol}</p>

<p><strong>Cuota:</strong> ${socio.cuota}</p>

<p><strong>Cambio contraseña:</strong> ${socio.cambiarPassword ? "Pendiente" : "Realizado"}</p>


<hr>


<h3>🪪 Carné</h3>

<p>
Pendiente de enlazar documento del socio.
</p>


<h3>📦 Pedidos</h3>

<p>
Pendiente de módulo pedidos.
</p>


`;


});


});



function volver(){

window.history.back();

}
