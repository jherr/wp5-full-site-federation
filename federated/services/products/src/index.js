const express = require("express");

const pokemon = require("./pokemon");

const getPokemonPrice = ({ base }) =>
  Math.round(Object.values(base).reduce((a, n) => a + n) / 6);

const pokemonWithPrices = pokemon.map((p) => ({
  ...p,
  price: getPokemonPrice(p),
}));

const app = express();
const port = 7000;

app.use(require("body-parser").json());
app.use(require("cors")());
app.use("/images", express.static("public"));

app.get("/api/getById", function (req, res) {
  const qId = parseInt(req.query.id);
  res.send(pokemonWithPrices.find(({ id }) => id === qId) || null);
});

app.get("/api/search", function (req, res) {
  const q = (req.query.q || "").toLowerCase();
  res.send(
    pokemonWithPrices
      .filter(({ name: { english } }) => english.toLowerCase().includes(q))
      .map((pokemon) => ({
        ...pokemon,
      }))
      .slice(0, 20)
  );
});

app.get("/api/cart", function (req, res) {
  res.send(cart);
});

app.listen(port, () =>
  console.log(`Product service listening at http://localhost:${port}`)
);
