import about from "../assets/about.svg";

function AboutUs() {
  return (
    <>
      <div id="#about" className="my-28 md:mx-36">
        <div className="text-center mb-10">
          <h6 className="text-[#3758F9] font-semibold text-lg">About Us</h6>
          <h1 className="text-4xl font-bold">Who are we</h1>
        </div>
        <div className="text-center md:flex md:flex-row-reverse md:text-left">
          <img src={about} alt="" className="w-[300px] mx-auto md:w-[700px]" />
          <div className="lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl my-3 font-bold w-9/12 mx-auto">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-lg w-9/12 mx-auto md:ml-0 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur. Commodo eu tempor aliquet
              ante magna ac hendrerit nunc. Lacus varius molestie mauris
              adipiscing nisl dictum enim.
            </p>
          </div>
        </div>
        <div className="text-center md:flex md:text-left md:py-5">
          <img src={about} alt="" className="w-[300px] mx-auto md:w-[700px]" />
          <div className="lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl my-3 font-bold w-9/12 mx-auto">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-lg w-9/12 mx-auto md:ml-0 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur. Commodo eu tempor aliquet
              ante magna ac hendrerit nunc. Lacus varius molestie mauris
              adipiscing nisl dictum enim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
