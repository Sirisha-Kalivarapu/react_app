import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
import { Suspense } from "react";

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
const Grocery= lazy(()=> import("./components/Grocery"));

const App=()=>(<div id ="container">
<Header></Header>
<Outlet />
</div>
);

const appRouter= createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={()=> <h1>Loading!!</h1>}> <Grocery></Grocery></Suspense>
    },
    {
      path:"/restaurants/:resId",
      element:<RestroMenu/>
    }
  ],
  errorElement:<Error/>
}
])



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);