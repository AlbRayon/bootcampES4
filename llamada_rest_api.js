async function fetchApiData() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/1';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }
        const data = await response.json();
        console.log('Respuesta de la API:', data);
    } catch (error) {
        console.error('Error al llamar a la API:', error.message);
    }
}

fetchApiData()