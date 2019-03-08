import React from "react";
import Search from "./search";
import Reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Fetch from "./fetch";

export default function main() {
  const store = createStore(Reducer, []);
  return (
    <Provider store={store}>
      <Search store={store} />
      <Fetch />
    </Provider>
  );
}
