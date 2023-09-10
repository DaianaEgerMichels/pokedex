const elementList = document.getElementById('pokemonsList');
const loadMoreButton = document.getElementById('loadMore');

function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}" alt="${pokemon.name}">
  </div>
</li>`;
}


pokeApi.getPokemons()
  .then((pokemonsList = []) => {
    elementList.innerHTML += pokemonsList.map(convertPokemonToList).join('');  
  });

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit)
    .then((pokemonsList = []) => {
      elementList.innerHTML += pokemonsList.map(convertPokemonToList).join('');  
    });
}

loadMoreButton.addEventListener('click', () => {
  const LIMIT = 10;
  const OFFSET = elementList.children.length;
  loadPokemonItems(OFFSET, LIMIT);
})