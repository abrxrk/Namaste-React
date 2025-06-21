const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from React");
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "i'm an h1 tag"),
    React.createElement("h2", {}, "i'm an h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=Episode 01.84e39746.js.map
