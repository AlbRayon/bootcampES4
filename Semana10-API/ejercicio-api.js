async function obtenerPokemon(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const data = await response.json();
        console.log(data);
        const nombrePokemon = `El nombre del Pokémon es: ${data.name} es el numero ${data.id} y pesa ${data.height} kg `;
        const pokemonDiv = document.getElementById("pokemon");
        pokemonDiv.innerHTML = nombrePokemon;
    } catch (error) {
        console.error(error);
        const pokemonDiv = document.getElementById("pokemon");
        pokemonDiv.innerHTML = "Hubo un error, por favor intenta nuevamente.";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        const numero = document.getElementById('numero').value;
        if (numero) {
            obtenerPokemon(numero);
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    });
});
