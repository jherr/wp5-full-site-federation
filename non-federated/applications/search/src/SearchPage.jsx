import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Frame from "nf-ecomm-frame";
import store from "nf-ecomm-store";

import "bootstrap/dist/css/bootstrap.min.css";

import SearchContent from "./SearchContent";

const SearchPage = () => (
  <Provider store={store}>
    <Frame page="search">
      <SearchContent />
    </Frame>
  </Provider>
);

ReactDOM.render(<SearchPage />, document.getElementById("app"));
