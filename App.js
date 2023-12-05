import React from "react";
import ReactDOM from "react-dom/client";

// React Element --> Object --> Renders element on the DOM, it becomes an HTML Element.
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX --> JSX is a HTML like Syntax --> It is transpiled before it reaches to JavaScript Engine by Babel --> It converts into React.createElement() --> It converts into object.
const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);

// React Component

// Class Based Components
// Functional Based Components

const HeadingComponentOne = () => {
  return <h1>Namaste React Functional Component One</h1>;
};
const HeadingComponentTwo = () => (
  <h1>Namaste React Functional Component Two </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// root.render(<HeadingComponentOne />);
root.render(<HeadingComponentTwo />);
