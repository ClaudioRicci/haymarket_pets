import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";

let container: any = null;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

beforeEach(() => {
  // Setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
