import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Frame from "home/Frame";
import store from "checkout/store";

import "bootstrap/dist/css/bootstrap.min.css";

const SearchPage = () => (
  <Provider store={store}>
    <Frame page="search" />
  </Provider>
);

ReactDOM.render(<SearchPage />, document.getElementById("app"));
