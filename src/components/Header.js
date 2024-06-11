import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [btnName,setBtnName]=useState('Login');
    return (<div className="headContainer">
    <div className= "logo-container">
        <img className="logo" src= {LOGO_URL}></img>
    </div>
    <div className="nav-items">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>AboutUs</Link></li>
            <li><Link to={"/contact"}>ContactUs</Link></li>
            <li>Cart</li>
            <button className="login-button" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
            }}>{btnName}</button>

        </ul>
        
    </div>
    {/* <div className="login">
        <button className="login-button">Login</button>
    </div> */}
</div>)}
export default Header;