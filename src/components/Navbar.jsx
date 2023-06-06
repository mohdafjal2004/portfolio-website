import "../Styles/Navbar.css";
import home from "../assets/home.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div>Logo</div>
      <div>
        <img src={home} alt="" className="socials" />
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Navbar;
