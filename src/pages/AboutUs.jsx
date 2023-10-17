import about from "../assets/about.svg";

function AboutUs() {
  return (
    <>
      <div id="aboutus" className="my-28 md:mx-36">
        <div className="text-center mb-10">
          <h6 className="text-[#3758F9] font-semibold text-lg">About Us</h6>
          <h1 className="text-4xl font-bold">Who are we</h1>
        </div>
        <div className="grid lg:grid-cols-2">
          <img
            src={about}
            alt=""
            className="w-[300px] mx-auto md:w-[700px] lg:order-last"
          />
          <div className="self-center text-center lg:text-left">
            <h1 className="m-5 font-semibold text-2xl xl:text-3xl">
              Providing flawless and seamless experience
            </h1>
            <p className="mx-5 text-lg">
              At getdental, we are dedicated to delivering a seamless and
              flawless experience when it comes to booking your dental
              appointments.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <img src={about} alt="" className="w-[300px] mx-auto md:w-[700px]" />
          <div className="self-center text-center lg:text-left">
            <h1 className="m-5 font-semibold text-2xl xl:text-3xl">
              Commited to give high quality care
            </h1>
            <p className="mx-5 text-lg">
              With a commitment to excellence and a focus on delivering
              high-quality care, you can trust that your dental health is in
              expert hands, ensuring you receive the finest level of service
              possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
