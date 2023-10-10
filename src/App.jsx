import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import circle from "./assets/bluecircle.svg";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <img
          src={circle}
          alt=""
          className="hidden md:block absolute top-[-10px] left-[45%] z-[-1] 2xl:left-[50%]"
        />
        <Navbar />
        <Home />
        <Services />
        <img
          src={circle}
          alt=""
          className="hidden md:block absolute z-[-1] bottom-[0] left-[-45%]"
        />
        <AboutUs />
        <Footer/>
      </div>
    </>
  );
}

export default App;
