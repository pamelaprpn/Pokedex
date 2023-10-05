const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`


const fetchPokemon = () => {
    const pokemonPromisses = [];

      
    
    for (let i=1; i<=151; i++){
        pokemonPromisses.push(
            fetch(getPokemonUrl(i)).then((resp) => resp.json())
        );
    }

    

    Promise.all(pokemonPromisses).then(( pokemons) => {
        const listPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

            
            accumulator += `
            <li class = "card-${types[0]}">
            <img class = "card-image" alt = "${pokemon.name}" 
            src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
            <h2 class = "card-title">${pokemon.name}</h2>
            <p class = "card-type-${types[0]}">${types.join(" <br> ")}</p>
            </li>`;

            return accumulator;

        },

        "");

        const ul = document.querySelector('#listaPokemon')
        ul.innerHTML = listPokemons;
        

        
        
    });
};

fetchPokemon();

