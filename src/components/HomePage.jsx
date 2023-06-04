import Navbar from "./Navbar";
import "../Styles/HomPage.css";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default HomePage;
