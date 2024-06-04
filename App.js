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
const App=()=>(<div id ="container">
<Header></Header>
<Body/>
</div>
);

const Header=()=>(<div className="headContainer">
    <div className= "logo-container">
        <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
            <li>Cart</li>
        </ul>
    </div>
</div>)

const RestroCard= ()=> {
    return (<div className="restro-card">
                <img className="logo" src="https://www.ruchifoodline.com/recipes//cdn/recipes/Best-Mutton-Biryani-Recipe.jpg"></img>
                <h1>Daspalla</h1>
                <h2>Biryani, Indian, Asian</h2>
                <h2>4.3 stars</h2>
                <h2>40 minutes</h2>
            </div>)
}

const Body= ()=>(<div className="body-container"> 
<div className="search">Search</div>
<div className="restro-bar">
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>

    
</div>

</div>)
// const heading= React.createElement("h1",{id:"heading",xyz:"just a attribute"},"hello React from react");
console.log(heading);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);