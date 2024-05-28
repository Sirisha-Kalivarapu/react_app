import React from "react";
import ReactDOM from "react-dom/client";
// create jsx which creates react element
// Parcel uses Babel which is js compiler which converts jsx to react create element , which is converted to js object => HTML element(while rendering)

// react element
const heading = <h1 id ="heading" className="heading">hello react from jsx💥</h1>
const elem= <span>React Element</span>

//react functional component
const NameComponent= ()=>{
    return <h2 id="heading">Sirisha {elem}</h2>;
}

//component composition ,react element in component 
const Heading=()=>(<div id ="container"><h1 id="heading" className="header">Functional Component</h1>
{heading}
{NameComponent()}
<NameComponent/>
<NameComponent></NameComponent>
</div>
);

// const heading= React.createElement("h1",{id:"heading",xyz:"just a attribute"},"hello React from react");
console.log(heading);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);