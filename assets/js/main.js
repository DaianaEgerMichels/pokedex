
function convertPokemonTypesToList(pokeminTypes) {
  return pokeminTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`).join('');
}

function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon">
  <span class="number">#${pokemon.order}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      ${convertPokemonTypesToList(pokemon.types)}
    </ol>
    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
  </div>
</li>`;
}

const elementList = document.getElementById('pokemonsList');

pokeApi.getPokemons()
  .then((pokemonsList = []) => {
    elementList.innerHTML += pokemonsList.map(convertPokemonToList).join('');  
  });