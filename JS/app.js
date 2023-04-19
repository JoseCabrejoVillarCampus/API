

document.addEventListener("DOMContentLoaded",()=>{
    mostrarDatos();
})

async function mostrarDatos() {
    const ws = new Worker("../storage/ws.js");
    ws.postMessage(677);//enviamos la informacion al worker
    ws.addEventListener("message",(e)=>{//retorna el proceso con los datos ya puestos del worker
        document.querySelector("#content").insertAdjacentHTML("beforeend",e.data)
    });
}