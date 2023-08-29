(async () => {

    const request = new Request('https://pokeapi.co/api/v2/pokemon/')
    const reqPokeFire = new Request('')
    //const config = {method: 'get'}

    const listPoke = await fetch(request, { method: 'get' })
        .then((data) => data.json()
        .then(data => data.results))    
        .catch((error) => {
            console.log(error)
        })

    //console.log(listPoke[0].url)


    for(let i = 0; i < listPoke.length; i++){
        
        const newP = document.createElement('p')
        const newA = document.createElement('a');
        
        console.log(newP)
        console.log(newA )
        newA.setAttribute('href', listPoke[i].url)
        newP.appendChild(newA)
   }


})()


