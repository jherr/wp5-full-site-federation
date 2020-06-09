import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getCartItems } from "./checkout";

const reducer = (state = { items: [] }, { type, payload }) => {
  switch (type) {
    case "SET_ITEMS":
      return {
        state,
        ...payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch((dispatch) =>
  getCartItems().then(({ items }) =>
    dispatch({
      type: "SET_ITEMS",
      payload: {
        items,
      },
    })
  )
);

export default store;
