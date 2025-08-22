import Accordion from "./ServiceItem";

const FAQ = () => {
  return (
    <div className="px-16 w-full text-white my-6">
      <h1
        id="accordion-title"
        class="text-4xl font-bold tracking-wide text-white mb-4 py-5"
      >
        Services
      </h1>
      <Accordion
        title="Diseño Web"
        answer="Lorem Ipsum dolor sit amet, consectetur adipiscing elit."
        price="800"
      />
      <Accordion
        title="Diseño de App"
        answer="Lorem Ipsum dolor sit amet, consectetur adipiscing elit."
        price="600"
      />
      <Accordion
        title="Consultoría"
        answer="Lorem Ipsum dolor sit amet, consectetur adipiscing elit."
        price="300"
      />
    </div>
  );
};

export default FAQ;
