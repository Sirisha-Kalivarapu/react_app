import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

//component composition ,react element in component 
const App=()=>(<div id ="container">
<Header></Header>
<Body/>
</div>
);

const appRouter= createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement:<Error/>
},
{
  path:"/about",
  element:<About/>
},
{
  path:"/contact",
  element:<ContactUs/>
}
])



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);