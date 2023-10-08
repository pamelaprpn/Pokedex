const getPokemonUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`


function fetchPokemon(){
    fetch(getPokemonUrl, {method: "GET"})
    .then(response => response.json())
    .then(function(allPokemon){
        allPokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })

}

fetchPokemon();

function fetchPokemonData(pokemon){
    let urlPoke = pokemon.url
    fetch(urlPoke, {method: "GET"})
    .then(response => response.json())
    .then(function(pokemonData){
        populatePokemon(pokemonData)
    })
}

function populatePokemon(pokemonData){

    let allPokemon = document.getElementById('listaPokemon');


    let card = document.createElement("li")
    card.setAttribute("id", "cardPokemon")


    let pokeImg = document.createElement("img")
    pokeImg.setAttribute("id", "imgPokemon")
    pokeImg.innerHTML = pokemonData.sprites.front_default

    
    let pokeName = document.createElement("h2")
    pokeName.setAttribute("id", "idPokemon")
    pokeName.innerHTML = pokemonData.name

    let pokeType = document.createElement('p');
    pokeType.setAttribute("id", "typePokemon")

    populateTypes(pokemonData.types, pokeType);
    
    card.append(pokeImg, pokeName, pokeType);

    allPokemon.appendChild(card);
      
    //console.log(typeP)
}

    
      


function populateTypes(types, p){
    types.forEach(function(typeInfo){
        const dataType = typeInfo.type.name
        p.append (dataType)
        //console.log(p)
    })
}


