import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import circle from "./assets/bluecircle.svg";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth" });
      setScrollTarget(null); // Reset the target after scrolling
    }
  }, [scrollTarget]);

  const handleClick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      setScrollTarget(targetElement);
    }
  };
  return (
    <>
      <div className="relative overflow-hidden ">
        <img
          src={circle}
          alt=""
          className="hidden md:block absolute top-[-10px] left-[45%] z-[-1] 2xl:left-[50%]"
        />
        <Navbar scrollToMethod={handleClick} />
        <Home />
        <Services />
        <img
          src={circle}
          alt=""
          className="hidden md:block absolute z-[-1] bottom-[0] left-[-45%]"
        />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
