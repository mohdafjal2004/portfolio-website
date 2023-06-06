import Navbar from "./Navbar";
import "../Styles/HomPage.css";
import Hero from "./Hero";
import Test from "./Test";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero/>
      {/* <Test /> */}
    </div>
  );
};

export default HomePage;
