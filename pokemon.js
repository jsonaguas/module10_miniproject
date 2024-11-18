async function getPokemon() {
    try {
        const search = document.getElementById('search').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        if (!response.ok) {
            throw new Error('Pokemon not found. Please check spelling or if ID exists.');
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById('pokemonImage');
        pokemonImage.src = pokemonSprite;

        const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const addPkmn = document.getElementById('addPkmn');
        addPkmn.textContent = pokemonName;

        const pokemonDisplay = document.getElementById('pokemonCard');
        pokemonDisplay.style.display = 'block';

        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'none';

        console.log(data);
    } catch (error) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        console.error(`Unable to locate: ${error}`);
    }
}

function moreDetails() {
    const pokemonName = document.getElementById('addPkmn').textContent;
    localStorage.setItem('pokemonName', pokemonName);
    window.location.href = 'details.html';
}