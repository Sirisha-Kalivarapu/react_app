import { LOGO_URL } from "../utils/constants";
const Header=()=>(<div className="headContainer">
    <div className= "logo-container">
        <img className="logo" src= {LOGO_URL}></img>
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
export default Header;