async function obtenerPokemones() {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      let data = await response.json();
      
      const container = document.getElementById('pokemon-container');
      
      for (let pokemon of data.results) {
        let pokemonDetails = await fetch(pokemon.url);
        let pokemonData = await pokemonDetails.json();
        pokemonData.name = "Juan CARLOO"
        let pokemonDiv = document.createElement('div');
        pokemonDiv.innerHTML = `
          <p><strong>ID:</strong> ${pokemonData.id}</p>
          <p><strong>Nombre:</strong> ${pokemonData.name}</p>
          <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        `;
        
        container.appendChild(pokemonDiv);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  obtenerPokemones();
  