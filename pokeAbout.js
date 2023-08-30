(async () => {

    const request = new Request('https://pokeapi.co/api/v2/pokemon/')
    const config = {method: 'get'}
    const dfrag = document.createDocumentFragment()
    
   

    const listPoke = await fetch(request, config)
        .then((data) => data.json()
        .then(data => data.results))    
        .catch((error) => {
            console.log(error)
        })

    listPoke.map(function(pokemon){
        let li = document.createElement('li')
        let ancora = document.createElement('a')

        ancora.setAttribute('href', 'pokeAbout.html')
        ancora.innerHTML = `${pokemon.name}` 

        li.appendChild(ancora)  
        
        dfrag.appendChild(li)

    })

    document.getElementById('listaPokemon').appendChild(dfrag)

    for(let i = 1; i <= listPoke.length; i++){
       let teste = `https://pokeapi.co/api/v2/pokemon/${[i]}`;
       console.log(teste)

       const listAboutPokemon = await fetch(teste, config)
       .then((data) => data.json() 
       .then(data => data.results))
       .catch((err) => {
        console.log(err)
       })

       listAboutPokemon.map(function(aboutPokemon){
        let liPokemon = document.createElement('li')
        

        console.log(liPokemon)
        

       })
    }
    

})()


