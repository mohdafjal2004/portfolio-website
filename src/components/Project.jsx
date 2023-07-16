import streamFlix from "../assets/gifNetflix.gif";
import safeXBlog from "../assets/gifBlog.gif";
import weather from "../assets/gifWeather.gif";
import "../Styles/Project.css";
import gh from "../assets/github.png";
import live from "../assets/play-button.png";

const Project = () => {
  return (
    <div className="projects__body">
      <div className="projects_container">
        <div className="project_card">
          <img src={streamFlix} alt="" height="100px" width="100px" />
          <h3>Streamflix</h3>
          <div className="toggle_desc">
            <p>A Netflix clone built using React, Tailwind CSS and TMDB API</p>
            <div className="tech_wrapper">
              <span className="tech">React</span>
              <span className="tech">TMDB API</span>
              <span className="tech">Tailwind CSS</span>
            </div>
          </div>
          <div className="project_redirect">
            <a href="https://streamflix-neon.vercel.app/">
              <img src={live} alt="" className="socials" />
            </a>
            <a href="https://github.com/mohdafjal2004/Streamflix">
              <img src={gh} alt="" className="socials" />
            </a>
          </div>
        </div>
        <div className="project_card">
          <img src={safeXBlog} alt="" height="100px" width="100px" />
          <h3>SafeXBlog</h3>
          <div className="toggle_desc">
            <p>
              A Blogging app where user after authentication can perform CRUD
              operation
            </p>
            <div className="tech_wrapper">
              <span className="tech">React</span>
              <span className="tech">Redux</span>
              <span className="tech">REST API</span>
              <span className="tech">Express</span>
              <span className="tech">MongoDB</span>
              <span className="tech">Node</span>
              <span className="tech">JWT </span>
            </div>
          </div>
          <div className="project_redirect">
            <a href="https://safe-x-blog-mohdafjal2004.vercel.app/">
              <img src={live} alt="" className="socials" />
            </a>
            <a href="https://github.com/mohdafjal2004/SafeX-Blog">
              <img src={gh} alt="" className="socials" />
            </a>
          </div>
        </div>

        <div className="project_card">
          <img src={weather} alt="" height="100px" width="100px" />
          <h3>Weather App</h3>
          <div className="toggle_desc">
            <p>
              A totally reponsive app with dynamic background theme based on day
              time
            </p>
            <div className="tech_wrapper">
              <span className="tech">React</span>
              <span className="tech">Open Weather API</span>
              <span className="tech">Vercel</span>
            </div>
          </div>
          <div className="project_redirect">
            <a href="https://afjal-weather-app-786.vercel.app/">
              <img src={live} alt="" className="socials" />
            </a>
            <a href="https://github.com/mohdafjal2004/Open-Weather-app">
              <img src={gh} alt="" className="socials" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
