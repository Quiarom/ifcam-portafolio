import { useState } from "react";
import Accordion from "./ServiceItem";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Diseño Web",
      answer: "Creamos sitios web a medida, optimizados para el rendimiento y la experiencia del usuario.",
      price: "800",
    },
    {
      title: "Diseño de App",
      answer: "Diseñamos y desarrollamos aplicaciones móviles intuitivas para iOS y Android.",
      price: "600",
    },
    {
      title: "Consultoría",
      answer: "Ofrecemos asesoramiento estratégico para optimizar tus productos y procesos digitales.",
      price: "300",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-16 w-full text-white my-6">
      <h1
        id="accordion-title"
        className="text-4xl font-bold tracking-wide text-white mb-4 py-5"
      >
        Services
      </h1>
      {services.map((service, index) => (
        <Accordion
          key={index}
          title={service.title}
          answer={service.answer}
          price={service.price}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
