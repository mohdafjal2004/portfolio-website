import Navbar from "./Navbar";
import "../Styles/HomPage.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import HomeBlog from "./HomeBlog";
import Contact from "./Contact";
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/> 
      {/* <HomeBlog/> */}
       <Contact/>
       <Footer/>
    </div>
  );
};

export default HomePage;
