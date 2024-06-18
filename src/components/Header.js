import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState('Login');
    const onlineStatus= useOnlineStatus();
    // console.log(onlineStatus);
    return (<div className="flex justify-between m-2 bg-indigo-100 shadow-md">
    <div >
        <img className="m-1 w-13 h-20" src= {LOGO_URL}></img>
    </div>
    <div className="flex items-center">
        <ul className="flex  p-5 m-2">
            <li className="px-3">Online: {onlineStatus==true? "✅":"🔴"}</li>
            <li className="px-3"><Link to={"/"}>Home</Link></li>
            <li className="px-3"><Link to={"/about"}>AboutUs</Link></li>
            <li className="px-3"><Link to={"/contact"}>ContactUs</Link></li>
            <li className="px-3"><Link to={"/Grocery"}>Grocery</Link></li>
            <li className="px-3">Cart</li>
            <button className="rounded-lg px-3 border-2 bg-indigo-400" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
            }}>{btnName}</button>

        </ul>
        
    </div>
    {/* <div className="login">
        <button className="login-button">Login</button>
    </div> */}
</div>)}
export default Header;