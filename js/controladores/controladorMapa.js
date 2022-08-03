import {serviciosEmpresa} from "../servicios/servicioEmpresas.js";


//insercion del mapa en en el contenedor
const map = new maplibregl.Map({
    container: 'mapa', // container id
    style: 'https://api.maptiler.com/maps/bright/style.json?key=qNdmIZ9m64rdBiZYgR5v', // style URL
    center: [-75.51737512557814, 10.412220001555916], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

// cargar marcadores
async function cargarMapa() {

    try {

        const empresas = await serviciosEmpresa.listarEmpresas();
        agregarMarcadores(empresas);


    } catch (error) {
        console.log(error)
    }

}

cargarMapa();


function agregarMarcadores(empresas) {
    empresas.forEach((empresa) => {

        let marcador = new maplibregl.Marker()
            .setLngLat([empresa.direccion[1], empresa.direccion[0]])
            .addTo(map);

        agregarTarjeta(marcador, empresa)

    });
}

function agregarTarjeta(marcador, empresa) {

    let div =  crearTarjeta(empresa);



    let popup = new maplibregl.Popup().setDOMContent(div);
    marcador.setPopup(popup);

}

function crearTarjeta(empresa) {

    let div = document.createElement("div");
    div.classList.add("bg-blue-primary","max-w-20","bc-blue-primary","br-10");

    let tarjeta =
        `
                <div class=" p-1 fs-14">
                    <h1 class="c-white " >${empresa.nombre}</h1>
                </div>
                <div class="bg-white br-lb-30 br-rt-30 p-1 ">
                    <div class="d-flex ai-center mt-1">
                        <img class="mr-1" src="../assets/iconos/iconoEdificio.svg" alt="">
                        <p>Actividad: ${empresa.actividad}</p>
                    </div>
                    <div class="d-flex ai-center mt-1">
                        <img class="mr-1" src="../assets/iconos/iconoMapa.svg" alt="">
                        <p>Direccioón: lat: ${empresa.direccion[0]} lng: ${empresa.direccion[1]}</p>
                    </div>
                    <div class="d-flex ai-center mt-1 mb-1">
                        <img class="mr-1" src="../assets/iconos/iconoLlave.svg" alt="">
                        <p>Sector: ${empresa.sector}</p>
                    </div>

                </div>
                <div class="p-2 d-flex jc-center ai-center">

                    <button id="${empresa.id}" class="pt-small pb-small pl-3 pr-3 ff-raleway bg-blue-primary bc-white c-white bg-white_h c-blue-primary_h br-5" >
                        detalles
                    </button>
                </div>
            `

    div.innerHTML=tarjeta;

    // funcion para ir a la pagina detalles de empresa

    let botonDetalles = div.querySelector("button");
    console.log(botonDetalles.id);

    botonDetalles.addEventListener("click",(e)=>{
        console.log(botonDetalles.id);
        window.location.href = `detalleEmpresa.html?id=${botonDetalles.id}`


    });


    return div;
}




