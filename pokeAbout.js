(async () => {

    const request = new Request('https://pokeapi.co/api/v2/pokemon/')
    const config = {method: 'get'}
    const dfrag = document.createDocumentFragment()
    const ul = document.getElementById('listaPokemon')
   

    const listPoke = await fetch(request, config)
        .then((data) => data.json()
        .then(data => data.results))    
        .catch((error) => {
            console.log(error)
        })

    listPoke.map(function(pokemon){
        let li = document.createElement('li')
        let ancora = document.createElement('a')
        console.log(li)
        console.log(ancora)

        ancora.setAttribute('href', `${pokemon.url}`)
        ancora.innerHTML = `${pokemon.name}` 

        li.appendChild(ancora)  
        
        dfrag.appendChild(li)

    })

    document.getElementById('listaPokemon').appendChild(dfrag)
    

})()


