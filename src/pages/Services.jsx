import Card from "../components/Card";

function Services() {
  const services = [
    {
      title: "Online Booking",
      description:
        "Easily secure your dental appointment through our intuitive online booking system.",
    },
    {
      title: "Multi-Location Availability",
      description:
        "Choose from a network of trusted dentists across various convenient locations.",
    },
    {
      title: "Customizable Service Selection",
      description:
        "Select from a range of services tailored to your specific oral health needs, ensuring a personalized and comprehensive dental experience.",
    },
  ];

  return (
    <>
      <div id="services" className="md:mx-36 md:py-28">
        <div className="text-center mb-10">
          <h6 className="text-[#3758F9] font-semibold text-lg">Services</h6>
          <h1 className="text-4xl mb-2.5 font-bold">What We Offer</h1>
          <p className="w-10/12 md:w-2/5 mx-auto text-[#787878] text-md">
            Our services encompass a wide range of dental care options,
            including but not limited to:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {services.map((service, id) => {
            return (
              <Card
                key={id}
                id={id}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
