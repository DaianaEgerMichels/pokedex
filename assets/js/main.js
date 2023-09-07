
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

fetch(url)
  .then(response => response.json())
  .then(data => data.results)
  .then(pokemonsList => {
    for (let i=0; i<pokemonsList.length; i++) {
      const pokemon = pokemonsList[i];
      document.querySelector('#pokemonsList').innerHTML += convertPokemonToList(pokemon);
    }
  })
  .catch(error => console.log(error));