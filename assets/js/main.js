function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon">
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}" alt="${pokemon.name}">
  </div>
</li>`;
}

const elementList = document.getElementById('pokemonsList');

pokeApi.getPokemons()
  .then((pokemonsList = []) => {
    elementList.innerHTML += pokemonsList.map(convertPokemonToList).join('');  
  });