
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      <li class="type">grass</li>
      <li class="type">poison</li>
    </ol>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name}">
  </div>
</li>`;
}

const elementList = document.getElementById('pokemonsList');

pokeApi.getPokemons().then((pokemonsList = []) => {
    elementList.innerHTML += pokemonsList.map(convertPokemonToList).join('');  
  });