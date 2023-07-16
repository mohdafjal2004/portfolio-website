/* eslint-disable react/no-unescaped-entities */
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about__section">
      <h1 className="about_name" id="about">
        About
      </h1>
      <p>
        Hello! I'm <span className="bio__name">Mohd Afjal</span> , an
        experienced developer specializing in React. I've crafted multiple
        projects that showcase my mastery in front-end development. Now, I'm
        eager to conquer the backend realm, diving into Express.js, MongoDB, and
        Node.js. With React, I've created stunning user interfaces and
        interactive web applications. I excel at writing clean, efficient code
        for an exceptional user experience.
      </p>
      <br />
      <p>
        Driven by curiosity and a hunger for full-stack proficiency, I'm
        venturing into backend technologies. Combining my React expertise with
        Express.js, MongoDB, and Node.js, I'll deliver robust, scalable web
        solutions.
      </p>
      <br />
      <p>
        Exciting opportunities await as I merge front-end and back-end
        functionalities. Let's collaborate and unleash the potential of
        innovative web experiences.
      </p>
    </div>
  );
};

export default About;
