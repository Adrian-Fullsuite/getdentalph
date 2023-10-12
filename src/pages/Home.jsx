import Tooth from "../components/Tooth";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "../App.css";
import { ModelPlaceHolder } from "../components/ModelPlaceHolder";

function Home() {
  return (
    <>
      <section
        id="home"
        className="mx-7 mt-10 md:mt-0 pb-10 text-center md:flex md:justify-between md:mx-36 md:pb-28 md:pt-20"
      >
        <div className="mt-20 mb-16 md:w-2/4 md:text-left">
          <div className="mt-5 mb-5 md:mb-10 mx-5 md:ml-0">
            <h1 className="font-bold text-4xl md:text-6xl">
              Lorem ipsum dolor sit
            </h1>
          </div>
          <div className="text-[#787878] mx-2.5 mb-5 md:ml-0">
            <p className="md:w-3/4 md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Integer turpis nisi in
              sapien. Erat purus pretium a nulla aliquam faucibus ut blandit
              dui. Gravida volutpat egestas risus dolor elit elit consectetur
            </p>
          </div>
          <button className="mt-2 rounded-md border border-[#5D93F0] py-2 px-3.5 text-[#5D93f0] text-md hover:bg-[#5D93F0] transition hover:text-white duration-300">
            Book Now
          </button>
        </div>

        <div className="m-auto">
          <Suspense fallback={<ModelPlaceHolder />}>
            <Canvas id="canvas">
              <Tooth />
            </Canvas>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Home;
