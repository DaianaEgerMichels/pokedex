const pokeApi = {};

const getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then(response => response.json());
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(pokemonsList => pokemonsList.map(getPokemonDetails))
    .then(pokemonsDetails => Promise.all(pokemonsDetails))
    .catch(error => console.log(error));
}
