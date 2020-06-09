const express = require("express");
const { getPokemonPrice } = require("nf-ecomm-logic");

const pokemon = require("./pokemon");

const app = express();
const port = 7000;

app.use(require("body-parser").json());
app.use(require("cors")());
app.use("/images", express.static("public"));

app.get("/api/getById", function (req, res) {
  const qId = parseInt(req.query.id);
  res.send(pokemon.find(({ id }) => id === qId) || null);
});

app.get("/api/search", function (req, res) {
  const q = (req.query.q || "").toLowerCase();
  res.send(
    pokemon
      .filter(({ name: { english } }) => english.toLowerCase().includes(q))
      .map((pokemon) => ({
        ...pokemon,
        price: getPokemonPrice(pokemon),
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
