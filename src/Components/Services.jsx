import React from "react";
import {Baby,HeartPulse,Brain,Accessibility} from "lucide-react";

const services = [
  {
    title: "Elderly Care",
    description:
      "Assistance with daily living activities, medication management, and companionship.",
    icon: <Accessibility />,
  },
  {
    title: "Post-Op Nursing",
    description:
      "Specialized medical care and wound management for patients recovering from surgery.",
    icon: <HeartPulse />,
  },
  {
    title: "Babysitting",
    description:
      "Professional childcare services for infants and children of all ages.",
    icon: <Baby />,
  },
  {
    title: "Dementia Care",
    description:
      "Specially trained caregivers focusing on cognitive stimulation and safety.",
    icon: <Brain />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">

      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold tracking-wide uppercase">
          Our Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Comprehensive Care Services
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We provide professional assistance tailored to every stage of life,
          ensuring safety and comfort in your own home.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >

            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-lg text-xl mb-4">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {service.description}
            </p>

            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-4 inline-block hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;