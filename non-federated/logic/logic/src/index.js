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

const getCartItems = () =>
  fetch("http://localhost:7001/api/cart").then((resp) => resp.json());

const addToCart = (pokemon) =>
  fetch("http://localhost:7001/api/add", {
    method: "POST",
    body: JSON.stringify({
      pokemon,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

const checkout = () =>
  fetch("http://localhost:7001/api/checkout", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

module.exports = {
  getImage,
  checkout,
  searchPokemon,
  getPokemonById,
  getCartItems,
  addToCart,
};
