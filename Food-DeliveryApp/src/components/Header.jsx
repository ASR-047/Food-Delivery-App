import { LOGO_URL } from "../Utils/utils";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="searchContainer"><input type="text" placeholder="search food and restaurants" /></div>
      <div className="navItems">
        
        <ul>
          <li>Offers</li>
          <li>sign in </li>
          <li>🛒cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
