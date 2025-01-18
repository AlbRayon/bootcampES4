async function consultaAPI(){
    const URL = "https://rickandmortyapi.com/api/character"
    try{
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error(`Error en la consulta ${response.status}`);
        }
        const data = await response.json()
        console.log('Respuesta de la API:', data);

    }
    catch(error){
        console.error('Error al llamar a la API:', error.message);

    }
}

consultaAPI()