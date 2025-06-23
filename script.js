import React from "react";
import ReactDOM from "react-dom/client";
//JSX under the hood works exactly like react.createElement
const jsxHeading = () => <h1>Hello world from React 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h1>This is the title component wrapped in container</h1>;
const Heading = () => (
  <div className="container">
    <Title />
    <h1 className="heading">Hello world from React Functional component</h1>
  </div>
);

root.render(<Heading />);
