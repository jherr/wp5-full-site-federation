import React from "react";
import { Button, Row, Col, Table } from "react-bootstrap";

import { connect } from "react-redux";
import { getImage } from "search/products";

import { checkout } from "./checkout";

const Cart = ({ items }) => (
  <Table striped>
    <thead>
      <tr>
        <th colSpan="2">Pokemon</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ pokemon, count }) => (
        <tr key={pokemon.name.english}>
          <td width="5%">
            <img src={getImage(pokemon)} style={{ maxHeight: 50 }} />
          </td>
          <td width="50%">{pokemon.name.english}</td>
          <td width="15%">{count}</td>
          <td width="15%">${pokemon.price}</td>
          <td width="15%">${count * pokemon.price}</td>
        </tr>
      ))}
      <tr>
        <td colSpan="4">Grand Total</td>
        <td id="total">
          $
          {items.reduce(
            (a, { count, pokemon: { price } }) => a + count * price,
            0
          )}
        </td>
      </tr>
    </tbody>
  </Table>
);

const ConnectedCart = connect((state) => state)(Cart);

const CheckoutButton = ({ onReset }) => (
  <Button onClick={onReset} style={{ width: "100%" }}>
    Checkout
  </Button>
);

const runCheckout = () => (dispatch) =>
  checkout().then((payload) =>
    dispatch({
      type: "SET_ITEMS",
      payload,
    })
  );

const ConnectedCheckoutButton = connect(
  () => ({}),
  (dispatch) => ({
    onReset: () => dispatch(runCheckout()),
  })
)(CheckoutButton);

const CheckoutContent = () => {
  return (
    <>
      <h1>Pokemon in your cart</h1>
      <Row style={{ marginTop: "1em" }}>
        <Col xs={8}>
          <ConnectedCart />
        </Col>
        <Col xs={4}>
          <ConnectedCheckoutButton />
        </Col>
      </Row>
    </>
  );
};

export default CheckoutContent;
