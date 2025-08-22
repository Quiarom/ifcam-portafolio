import { useState } from "react";

const Accordion = ({ title, answer, price, isOpen, onClick }) => {
  return (
    <div className="py-2 border-b border-neutral-200/80">
      <button
        onClick={onClick}
        className="flex justify-between w-full py-4"
      >
        <span className="lg:text-3xl md:text-2xl sm:text-2xl leading-tight font-normal">{title}</span>
        <div className="flex flex-row items-center justify-center gap-0 ">
            <span className="lg:text-lg text-base whitespace-nowrap">desde ${price}</span>
            <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden motion-opacity-in-0 text-base">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;