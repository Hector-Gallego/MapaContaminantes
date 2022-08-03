

function listarEmpresas() {
    return fetch("https://624c52f8d71863d7a8084eb9.mockapi.io/api/empresas").then((respuesta)=>{

        return respuesta.json();
    });
}

function listarEmpresa(id){

    return fetch(`https://624c52f8d71863d7a8084eb9.mockapi.io/api/empresas/${id}`).then((respuesta)=>{
        return respuesta.json();
    });
}

function filtrarEmpresas(nombre){

    return fetch(`https://624c52f8d71863d7a8084eb9.mockapi.io/api/empresas/?search=${nombre}`).then((respuesta)=>{
        return respuesta.json();
    });

}

export const serviciosEmpresa = {
    listarEmpresas,
    listarEmpresa,
    filtrarEmpresas
};