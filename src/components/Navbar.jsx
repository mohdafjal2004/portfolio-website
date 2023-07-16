import "../Styles/Navbar.css";
import home from "../assets/home.png";
import Ham from "./Ham";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo_image" className="logo_image" />
      </div>
      <div >
        <img src={home} alt="ham_menu" className="socials" />
      </div>
      <div className="three">
        <Ham />
      </div>
    </div>
  );
};

export default Navbar;
