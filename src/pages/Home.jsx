import Tooth from "../components/Tooth";
import { Canvas } from "@react-three/fiber";
import "../App.css";

function Home() {
  return (
    <>
      <div
        id="home"
        className="mx-7 mt-8 text-center md:flex md:justify-between md:mx-36 md:py-32"
      >
        <div className="my-12 md:w-2/4 md:text-left">
          <div className="mt-5 mb-10 mx-5 md:mb-5 md:ml-0">
            <h1 className="font-bold text-4xl">Lorem ipsum dolor sit</h1>
          </div>
          <div className="text-[#787878] mx-2.5 mb-5 md:ml-0">
            <p className="md:w-3/4">
              Lorem ipsum dolor sit amet consectetur. Integer turpis nisi in
              sapien. Erat purus pretium a nulla aliquam faucibus ut blandit
              dui. Gravida volutpat egestas risus dolor elit elit consectetur
            </p>
          </div>
          <button className="mt-2 rounded-md border border-[#5D93F0] py-2 px-3.5 text-[#5D93f0] text-md">
            Book Now
          </button>
        </div>

        <div className="m-auto">
          <Canvas id="canvas">
            <Tooth />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Home;
