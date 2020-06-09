import React from "react";
import { FormControl, Row, Col, Card } from "react-bootstrap";
import { useQuery } from "react-query";

const AddToCart = React.lazy(() => import("checkout/AddToCart"));
import { getImage, searchPokemon } from "./products";

const SearchContent = () => {
  const [search, searchSet] = React.useState("");
  const { data } = useQuery(["searchPokemon", { q: search }], searchPokemon);

  return (
    <>
      <Row style={{ paddingTop: "1em" }}>
        <FormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(evt) => searchSet(evt.target.value)}
        />
      </Row>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 33%)",
          gridGap: "1em",
          paddingTop: "1em",
        }}
      >
        {data &&
          data.map((pokemon) => (
            <Card style={{ width: "18rem" }} key={pokemon.name.english}>
              <Card.Img
                variant="top"
                src={getImage(pokemon)}
                style={{
                  maxHeight: 200,
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>{pokemon.name.english}</Card.Title>
                <Card.Text>{pokemon.type.join(", ")}</Card.Text>
                <Row>
                  <Col xs={4}>${pokemon.price}</Col>
                  <Col xs={8}>
                    <React.Suspense fallback={<span />}>
                      <AddToCart pokemon={pokemon}>Add To Cart</AddToCart>
                    </React.Suspense>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default SearchContent;
