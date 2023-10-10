import Card from "../components/Card";

function Services() {
  const services = [
    {
      title: "Tooth Extraction",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu fringilla tortor arcurisus.",
    },
    {
      title: "Tooth Extraction",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu fringilla tortor arcurisus.",
    },
    {
      title: "Tooth Extraction",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu fringilla tortor arcurisus.",
    },
  ];
  return (
    <>
      <div id="#services" className="md:mx-36 md:py-32">
        <div className="text-center mb-10">
          <h6 className="text-[#3758F9] font-semibold">Services</h6>
          <h1 className="text-3xl mb-2.5 font-semibold">What We Offer</h1>
          <p className="w-10/12 md:w-2/5 mx-auto text-[#787878] text-sm">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tortor arcu
            risus. Bibendum amet accumsan massa nisl nunc bibendum egestas
            maecenas neque.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {services.map((service, id) => {
            return (
              <Card
                key={id}
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
