const getImage = (pokemon) =>
  `http://localhost:7000/images/${pokemon.name.english
    .toLowerCase()
    .replace(" ", "-")}.jpg`;

const searchPokemon = (_, { q }) =>
  fetch(`http://localhost:7000/api/search?q=${escape(q)}`).then((resp) =>
    resp.json()
  );

const getPokemonById = (_, { id }) =>
  fetch(`http://localhost:7000/api/getById?id=${id}`).then((resp) =>
    resp.json()
  );

module.exports = {
  getImage,
  searchPokemon,
  getPokemonById,
};
