import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Frame from "nf-ecomm-frame";
import store from "nf-ecomm-store";

import "bootstrap/dist/css/bootstrap.min.css";

import HomeContent from "./HomeContent";

const HomePage = () => (
  <Provider store={store}>
    <Frame page="home">
      <HomeContent />
    </Frame>
  </Provider>
);

ReactDOM.render(<HomePage />, document.getElementById("app"));
