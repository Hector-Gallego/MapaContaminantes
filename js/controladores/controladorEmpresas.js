import {serviciosEmpresa} from "../servicios/servicioEmpresas.js";

const contEmpresas = document.querySelector("#cont-empresas");
const botonModal = document.querySelector("#botonModal");
const modal = document.querySelector("#modal");
const buscador = document.querySelector("#buscador");
const imgErrorBusqueda = document.querySelector("#imgErrorBusqueda");
const botonSiguiente = document.querySelector("#botonSiguiente");
const botonAnterior = document.querySelector("#botonAnterior");

// iconos de carga
const iconoCarga = document.querySelector("#icono-carga");


async function cargarEmpresas(){

    try{
        iconoCarga.classList.remove("d-none");
        const empresas =  await serviciosEmpresa.listarEmpresas();

        empresas.forEach((empresa)=>{
            const tarjeta = crearTarjetaEmpresa(empresa);
            contEmpresas.appendChild(tarjeta);
        });

        iconoCarga.classList.add("d-none");

    }catch (error){
        iconoCarga.classList.add("d-none");
        modal.classList.add("modal--show");
    }

}

async  function filtrarEmpresas(nombre){

    let  empresas;
    try{

        iconoCarga.classList.remove("d-none");
        imgErrorBusqueda.classList.add("d-none");
        empresas =  await serviciosEmpresa.filtrarEmpresas(nombre);


        empresas.forEach((empresa)=>{
            const tarjeta = crearTarjetaEmpresa(empresa);
            contEmpresas.appendChild(tarjeta);
        });

        if(empresas.length === 0){
            imgErrorBusqueda.classList.remove("d-none");
        }

        iconoCarga.classList.add("d-none");

    }catch (error){
        iconoCarga.classList.add("d-none");
        modal.classList.add("modal--show");
    }


}

function crearTarjetaEmpresa(empresa){

    const div = document.createElement("div");
    div.classList.add("bg-blue-primary","max-w-20","m-1","bc-blue-primary","br-10");
    let tarjeta = `
                <div class=" p-1 fs-14">
                    <h1 class="c-white " >${empresa.nombre}</h1>
                </div>
                <div class="bg-white br-lb-30 br-rt-30 p-1 ">
                    <div class="d-flex ai-center mt-1">
                        <img class="mr-1" src="../assets/iconos/iconoEdificio.svg" alt="">
                        <p>Actividad: Industrial</p>
                    </div>
                    <div class="d-flex ai-center mt-1">
                        <img class="mr-1" src="../assets/iconos/iconoMapa.svg" alt="">
                        <p>Dirección: ${empresa.direccion[0]} - ${empresa.direccion[1]}</p>
                    </div>
                    <div class="d-flex ai-center mt-1 mb-1">
                        <img class="mr-1" src="../assets/iconos/iconoLlave.svg" alt="">
                        <p>Sector: ${empresa.sector}</p>
                    </div>
                    

                </div>
                <div class="p-1 d-flex jc-center ai-center">

                    <button id="${empresa.id}" class="pt-small pb-small pl-3 pr-3 ff-raleway bg-blue-primary bc-white c-white bg-white_h c-blue-primary_h br-5" >
                        detalles
                    </button>
                </div>`
    ;



    div.innerHTML = tarjeta;

    const botonEmpresa = div.querySelector("button");

    botonEmpresa.addEventListener("click",()=>{
        document.location.href = `detalleEmpresa.html?id=${botonEmpresa.id}`;
    });

    return div;
}

cargarEmpresas();

botonModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
    window.location.reload();

});

buscador.addEventListener("input",()=>{

    botonAnterior.classList.add("d-none");
    botonSiguiente.classList.add("d-none");

    let nombre = buscador.value;
    contEmpresas.innerHTML = "";

    if(nombre.length === 0){
        botonAnterior.classList.remove("d-none");
        botonSiguiente.classList.remove("d-none");
        location.reload();

    }
    filtrarEmpresas(nombre);



});