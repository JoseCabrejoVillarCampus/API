const url = `https://pokeapi.co/api/v2/pokemon`;//trasemos la informacionde la api

const getAllPokemons = async(id)=>{
    try {
        const data = await fetch(`${url}/${id}`);
        const result = await data.json();
        return result;   
    } catch (error) {     
        console.log(error);
    }
}


let ws = {  
    show(data){
        let html= `
            <div class="card" style="width: 18rem;">
                <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.id}</p>
                <a href="#" class="btn btn-primary" data-poke="${data.id}">Details</a>
                </div>
            </div>
            `

        return html;
    }
}

self.addEventListener("message", async (e)=>{
    console.log(e.data);
    const esto = await getAllPokemons(e.data);
    console.log("esto",esto.name);
    const retorno = ws.show(esto);
    postMessage(retorno)
})