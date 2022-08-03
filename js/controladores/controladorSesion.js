console.log("hola mundo");


let botonSesion = document.querySelector("#botonSesion");

botonSesion.addEventListener("click",(e)=>{
    e.preventDefault();

    document.location.href="pages/empresas.html";
})