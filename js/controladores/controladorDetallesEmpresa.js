import {serviciosEmpresa} from "../servicios/servicioEmpresas.js";

// recuperar id de la url

// recupero el id de la empresa
const url = new URL(window.location);
const id = url.searchParams.get("id");

const botonModal = document.querySelector("#botonModal");
const modal = document.querySelector("#modal");

// obtengo los elementoa modificables del DOM

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const direccion = document.querySelector("#direccion");
const actividad = document.querySelector("#actividad");
const sector = document.querySelector("#sector");

// contenedores de tarjeta
const contProducto = document.querySelector("#cont-productos");
const contMateria = document.querySelector("#cont-materias");
const contResiduos = document.querySelector("#cont-residuos");
const contAfectacion = document.querySelector("#cont-afectaciones");

// iconos de carga
const iconoCargaProducto = document.querySelector("#icono-carga-producto");
const iconoCargaMateria = document.querySelector("#icono-carga-materia");
const iconoCargaResiduo = document.querySelector("#icono-carga-residuo");
const iconoCargaAfectacion = document.querySelector("#icono-carga-afectacion");

async function cargarEmpresa() {

    try {

        // se activan los iconos de carga
        iconoCargaProducto.classList.remove("d-none");
        iconoCargaMateria.classList.remove("d-none");
        iconoCargaResiduo.classList.remove("d-none");
        iconoCargaAfectacion.classList.remove("d-none");

        const empresa = await serviciosEmpresa.listarEmpresa(id);
        const productos = empresa.productos;
        const materias = empresa.materias;
        const  residuos = empresa.residuos;
        const  afectaciones = empresa.afectaciones;

        cargarDetallesEmpresa(empresa);

        // creo una tarjeta por cada producto de la lista
        productos.forEach((producto)=>{
           let tarjeta =  crearTarjetaProducto(producto);
           contProducto.appendChild(tarjeta);
        });
        iconoCargaProducto.classList.add("d-none");


        // creo una tarjeta por cada materia prima de la lista
        materias.forEach((materia)=>{
            let tarjeta = crearTarjetaMateria(materia);
            contMateria.appendChild(tarjeta);

        });
        iconoCargaMateria.classList.add("d-none");

        // creo una tarjeta por cada residuo de la lista
        residuos.forEach((residuo)=>{
            let tarjeta = crearTarjetaResiduo(residuo);
            contResiduos.appendChild(tarjeta);

        });
        iconoCargaResiduo.classList.add("d-none");

        // creo una tarjeta por cada afectacion de la lista
        afectaciones.forEach((afectacion)=>{
            let tarjeta = crearTarjetaAfectacion(afectacion);
            contAfectacion.appendChild(tarjeta);

        });
        iconoCargaAfectacion.classList.add("d-none");

    } catch (error) {
        console.log("ha ocurrido un errror")
        console.log(error);
        modal.classList.add("modal--show");
    }

}

cargarEmpresa();

function cargarDetallesEmpresa(empresa) {

    nombre.textContent = empresa.nombre;
    descripcion.textContent = empresa.descripcion;
    direccion.textContent = `Dirección: lat: ${empresa.direccion[0]} lgt: ${empresa.direccion[1]}`;
    actividad.textContent = `Actividad: ${empresa.actividad}`;
    sector.textContent = `Sector: ${empresa.sector}`;

}


function crearTarjetaProducto(producto) {


    const div = document.createElement("div");
    div.classList.add("bg-blue-primary", "max-w-20","m-1","bc-blue-primary","br-10");

    let tarjeta = `
         
                    <div class=" p-1 fs-14">
                        <h1 class="c-white " >${producto.nombre}</h1>
                    </div>
                    
                    <div class="bg-white br-lb-30 br-rt-30 p-1">
                       
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoCategoria.svg" alt="">
                            <p>Categoria: ${producto.categoria}</p>
                        </div>
                        <h3 class="mt-2 mb-1 fs-12 fw-600 ">Descripción</h3>
                        <p class="lh-15 mb-2">${producto.descripcion}</p>

                    </div>
                    <div class="p-2"></div> `



    div.innerHTML = tarjeta;
    return div;

}

function crearTarjetaMateria(materia) {


    const div = document.createElement("div");
    div.classList.add("bg-green-primary", "max-w-20","m-1","bc-green-primary","br-10");

    let tarjeta = `
         
                    <div class=" p-1 fs-14">
                        <h1 class="c-white " >${materia.nombre}</h1>
                    </div>
                    <div class="bg-white br-lb-30 br-rt-30 p-1">
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/icinoArbol.svg" alt="">
                            <p>Origen: ${materia.origen}</p>
                        </div>
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoReciclaje.svg" alt="">
                            <p>Abundancia: ${materia.abundancia}</p>
                        </div>
                        <h3 class="mt-2 mb-1 fs-12 fw-600 ">Descripción</h3>
                        <p class="lh-15 mb-2">${materia.descripcion}</p>

                    </div>
                    <div class="p-2">
                    </div>`
    ;



    div.innerHTML = tarjeta;
    return div;

}


function crearTarjetaResiduo(residuo) {


    const div = document.createElement("div");
    div.classList.add("bg-red-primary", "max-w-20","m-1","bc-red-primary","br-10");

    let tarjeta = `
                    <div class=" p-1 fs-14">
                        <h1 class="c-white " >${residuo.nombre}</h1>
                    </div>
                    <div class="bg-white br-lb-30 br-rt-30 p-1">
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoPregunta.svg" alt="">
                            <p>Tipo Afectación: ${residuo.tipoAfectacion}</p>
                        </div>
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoCalavera.svg" alt="">
                            <p>Peligrosidad: ${residuo.peligrosidad}</p>
                        </div>
                        <h3 class="mt-2 mb-1 fs-12 fw-600 ">Descripción</h3>
                        <p class="lh-15 mb-2">${residuo.descripcion}</p>

                    </div>
                    <div class="p-2">
                    </div>`
    ;



    div.innerHTML = tarjeta;
    return div;

}


function crearTarjetaAfectacion(afectacion) {


    const div = document.createElement("div");
    div.classList.add("bg-purple-primary", "max-w-20","m-1","bc-purple-primary","br-10");

    let tarjeta = `
                    <div class=" p-1 fs-14">
                        <h1 class="c-white " >${afectacion.nombre}</h1>
                    </div>
                    <div class="bg-white br-lb-30 br-rt-30 p-1">
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoPregunta.svg" alt="">
                            <p>Tipo Afectación: ${afectacion.tipoAfectacion}</p>
                        </div>
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoPersona.svg" alt="">
                            <p>Población afectada: ${afectacion.poblacionAfectada}</p>
                        </div>
                        <div class="d-flex ai-center mt-1">
                            <img class="mr-1" src="../assets/iconos/iconoCalavera.svg" alt="">
                            <p>Ecosistemas Afectados: ${afectacion.ecosistemasAfectados}</p>
                        </div>
                        <h3 class="mt-2 mb-1 fs-12 fw-600 ">Descripción</h3>
                        <p class="lh-15 mb-2">${afectacion.descripcion}</p>

                    </div>
                    <div class="p-2">
                    </div>`
    ;



    div.innerHTML = tarjeta;
    return div;

}


botonModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
    window.location.href = "empresas.html";

});
