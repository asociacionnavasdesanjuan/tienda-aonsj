// =====================================
// SISTEMA DE PAGOS ASOCIACIÓN AONSJ
// =====================================

async function cargarPagos(){

    try{

        const respuesta = await fetch("data/pagos.json");

        const pagos = await respuesta.json();

        console.log("PAGOS CARGADOS:", pagos);

        return pagos;

    }catch(error){

        console.error("Error cargando pagos:", error);

        return [];

    }

}


// =====================================
// BUSCAR PAGOS DE UN SOCIO
// =====================================

async function pagosSocio(numeroSocio){

    const pagos = await cargarPagos();


    return pagos.filter(pago => 
        pago.socio === numeroSocio
    );

}
