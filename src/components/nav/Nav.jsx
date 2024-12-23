
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
const Nav = () =>{
    return (
       <nav className="nav">
         <div className="logo">
            <h3>$Life</h3> 
         </div>
         <ul className="nav__list">
            <li className="nav__item"><Link to = "#">About-us</Link></li>
            <li className="nav__item"><Link to = "#">Tokenomics</Link></li>
            <li className="nav__item"><Link to = "#">Community</Link></li>
         </ul>
         <div className="socials">
        <a href="https://twitter.com" target="_blank" >
          <i className="socials-icon"><FaXTwitter /></i>
        </a>
        <a href="https://telegram.org" target="_blank">
          <i className="socials-icon"><LiaTelegramPlane /></i>
        </a>
      </div>
       </nav> 
    )
}

export default Nav;
