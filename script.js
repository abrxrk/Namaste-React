import React from "react";
import ReactDOM from "react-dom/client";
//JSX under the hood works exactly like react.createElement
const jsxHeading = <h1>Hello world from React 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);