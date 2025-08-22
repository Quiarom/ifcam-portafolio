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
        answer="I like to use iOS products"
        price="800"
      />
      <Accordion
        title="Diseño de App"
        answer="I like to use Tailwind"
        price="600"
      />
      <Accordion
        title="Consultoría"
        answer="I am using Supabase!"
        price="300"
      />
    </div>
  );
};

export default FAQ;
