import "../Styles/Hero.css";
import gh from "../assets/github.png";
import li from "../assets/linkedin.png";
import twt from "../assets/twitter.png";
import front from "../assets/frontImg3.png";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroLeft">
        <h1>Mohd Afjal</h1>
        <p className="dev">React Developer</p>
        <p className="bio">
          Hey there, I am Afjal from Jaipur. Want to get in touch? Find me here.
        </p>
        <div className="social-parent">
          <a href="https://github.com/mohdafjal2004">
            <img src={gh} alt="" className="socials" />
          </a>
          <a href="https://www.linkedin.com/in/mohd-afjal-9772941b8/">
            <img src={li} alt="" className="socials" />
          </a>
          <a href="https://twitter.com/afjal07071998">
            <img src={twt} alt="" className="socials" />
          </a>
        </div>
      </div>
      <div className="heroRight">
        <img src={front} alt="" height="100px"className="frontImg"/>
      </div>
    </div>
  );
};

export default Hero;
