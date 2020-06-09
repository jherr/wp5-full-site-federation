import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Frame from "nf-ecomm-frame";
import store from "nf-ecomm-store";

import CheckoutContent from "./CheckoutContent";

import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutPage = () => {
  return (
    <Provider store={store}>
      <Frame page="checkout">
        <CheckoutContent />
      </Frame>
    </Provider>
  );
};

ReactDOM.render(<CheckoutPage />, document.getElementById("app"));
