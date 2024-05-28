import React from "react";
import ReactDOM from "react-dom/client";
// create jsx which creates react element
// Parcel uses Babel which is js compiler which converts jsx to react create element , which is converted to js object => HTML element(while rendering)

const heading = <h1 id ="head" className="heading">hello react from jsx💥</h1>
// const heading= React.createElement("h1",{id:"heading",xyz:"just a attribute"},"hello React from react");
console.log(heading);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);