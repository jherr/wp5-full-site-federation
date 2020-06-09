import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";

const AddToCart = React.lazy(() => import("checkout/AddToCart"));
import { getImage, getPokemonById } from "search/products";

const PokemonCard = ({ id, children, right }) => {
  const { data: pokemon } = useQuery(
    ["getPokemonById", { id }],
    getPokemonById
  );

  return (
    <div
      style={{
        marginTop: "1em",
        padding: "1em",
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      <Row>
        {pokemon && (
          <>
            {!right && (
              <Col xs={3}>
                <img src={getImage(pokemon)} style={{ width: "100%" }} />
              </Col>
            )}
            <Col xs={9}>
              <h1>{pokemon.name.english}</h1>
              {children}
              <Row>
                <Col xs={{ span: 1, offset: 8 }} style={{ fontWeight: "bold" }}>
                  ${pokemon.price}
                </Col>
                <Col xs={{ span: 3 }}>
                  <React.Suspense fallback={<span />}>
                    <AddToCart pokemon={pokemon} />
                  </React.Suspense>
                </Col>
              </Row>
            </Col>
            {right && (
              <Col xs={3}>
                <img src={getImage(pokemon)} style={{ width: "100%" }} />
              </Col>
            )}
          </>
        )}
      </Row>
    </div>
  );
};

const HomeContent = () => (
  <>
    <PokemonCard id={10}>
      <p>
        Caterpie is a Pokémon that resembles a green caterpillar with a yellow
        underside and teardrop-shaped tail. There are yellow ring-shaped
        markings down the sides of its segmented body, which resemble its eyes
        and are meant to scare off predators.
      </p>
    </PokemonCard>
    <PokemonCard id={20} right>
      <p>
        Raticate is a large rodent Pokémon. Although it is often depicted on its
        hind legs, it is a quadruped. It is primarily tawny-colored with a cream
        underside. It has narrow black eyes, ears with ragged edges and dark
        insides, and large incisors that grow constantly. There are three
        whiskers on each side of its face, which it uses to maintain balance. It
        has short arms with three-fingered hands and webbed feet with three
        toes. The webbing on its feet allows it to swim. Its tail is long and
        scaly. A female will have shorter whiskers and lighter fur.
      </p>
    </PokemonCard>
    <PokemonCard id={30}>
      <p>
        Nidorina is a quadruped, light blue Pokémon with darker blue patches. It
        has red eyes, large, spiny ears, and has two pointed teeth protruding
        from its upper jaw. It possesses large poison spikes, which it retracts
        whenever it is with a group or while resting in its burrow. Its paws
        have three claws each, and it is able to stand on its hind legs. The
        hind legs are longer and thicker than its forelegs. It has a stubby
        tail. Nidorina is a female-only species.
      </p>
    </PokemonCard>
  </>
);

export default HomeContent;
