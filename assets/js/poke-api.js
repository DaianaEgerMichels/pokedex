const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeApiDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeApiDetail.order;
  pokemon.name = pokeApiDetail.name;

  const types = pokeApiDetail.types.map(typeSlot => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeApiDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

const getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(convertPokeApiDetailToPokemon);
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
