"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  
  {
    question: "Does it Sound Human-Like?",
    answer: "Absolutely! Our AI is designed to provide natural and human-like responses for a seamless experience.",
  },
  {
    question: "Can You Trust The AI?",
    answer: "Yes, our AI is built with security and reliability in mind, ensuring safe and ethical operations.",
  },
  {
    question: "How Long Does Development Take?",
    answer: "It depends on your requirements, but typically, deployment takes between 2 to 6 weeks.",
  },
  {
    question: "Do You Offer Support?",
    answer: "Yes! We offer 24/7 support and ongoing maintenance to ensure smooth operations.",
  },
  {
    question: "Can You Make Edits to the Agents?",
    answer: "Yes, our AI voice agents can be fully customized and updated as needed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="text-center max-w-3xl mx-auto">
      <div className="inline-block px-4 py-1 m-auto text-center text-sm font-medium text-black bg-purple-100 rounded-full">
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 ">
          Everything you need to know.
        </h2>
        <p className="text-gray-600 mt-3 max-w-[600px] m-auto">
          Got questions? We’ve got answers. Here’s everything you need to know before getting started.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 rounded-lg cursor-pointer overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between cursor-pointer rounded-3xl items-center px-6 py-4 text-left text-lg font-medium"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>

            <div
              className={`px-6 text-gray-700 text-base transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
