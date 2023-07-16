import { useState } from "react";
import "../Styles/Ham.css";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { Link } from "react-scroll";

const Ham = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="ham__body">
      <div className="ham_container">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="toggle_icons"
        >
          <img
            src={`${isMenuOpen ? close : menu}`}
            alt="toggle_icons"
            className="icons"
          />
        </button>

        <div className={`menu ${isMenuOpen ? "close" : "open"}`}>
          <div className="menu_items">
            <span>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </span>
            <span>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </span>
            {/* <span>
               <Link>Blog</Link> 
            </span> */}
            <span>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ham;
