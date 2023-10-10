import Tooth from "../components/Tooth";
import { Canvas } from "@react-three/fiber";
import circle from "../assets/bluecircle.svg";
import "../App.css";

function Home() {
  return (
    <>
      <div className="mx-7 mt-8 text-center">
        <div className="w-10/12 mx-auto">
          <h1 className="font-bold text-4xl">Lorem ipsum dolor sit</h1>
        </div>
        <div className="mt-10 w-11/12 mx-auto text-[#787878]">
          <p>
            Lorem ipsum dolor sit amet consectetur. Integer turpis nisi in
            sapien. Erat purus pretium a nulla aliquam faucibus ut blandit dui.
            Gravida volutpat egestas risus dolor elit elit consectetur
          </p>
        </div>
        <button className="mt-8 rounded-md bg-[#5D93F0] py-1.5 px-3 text-white text-sm">
          Book Now
        </button>

        <div className="mt-10 w-40 mx-auto">
          <Canvas id="canvas">
            <Tooth />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Home;
