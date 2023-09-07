
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
  .then(response => response.json())
  .then(data => data.results)
  .then(pokemonsList => pokemonsList.map(pokemon => pokemon.url))
  .catch(error => console.log(error));