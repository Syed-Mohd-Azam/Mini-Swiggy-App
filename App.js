import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "First Heading Tag!"),
    React.createElement("h1", {}, "Second Heading Tag!"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  "Hello World from React!"
);
console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
