import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div",{id:"parent",xyz:"just a attribute"},[
    React.createElement("h2",{id:"child1",xyz:"just a attribute"},[
        React.createElement("h3",{id:"heading",xyz:"just a attribute"},"learning React"),
        React.createElement("h3",{id:"heading",xyz:"just a attribute"},"from Namaste React")
    ]),
    React.createElement("h2",{id:"child2",xyz:"just a attribute"},[
        React.createElement("h3",{id:"heading",xyz:"just a attribute"},"child2 kid1"),
        React.createElement("h3",{id:"heading",xyz:"just a attribute"},"child2 kid2")
    ])]);
// const heading= React.createElement("h1",{id:"heading",xyz:"just a attribute"},"hello React from react");

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);