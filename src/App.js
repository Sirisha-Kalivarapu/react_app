import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//component composition ,react element in component 
const App=()=>(<div id ="container">
<Header></Header>
<Body/>
</div>
);



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);