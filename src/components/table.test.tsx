import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";
import { unmountComponentAtNode } from "react-dom";

let container: any = null;
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table />, div);
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
