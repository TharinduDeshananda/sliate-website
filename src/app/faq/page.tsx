"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is SLIATE?",
    answer:
      "SLIATE stands for Sri Lanka Institute of Advanced Technological Education. It is a leading institute for higher education in Sri Lanka, offering diploma and higher diploma courses.",
  },
  {
    question: "How can I apply for a course?",
    answer:
      "You can apply for courses through our official website or visit the nearest SLIATE center for more details.",
  },
  {
    question: "What are the available facilities at SLIATE?",
    answer:
      "SLIATE provides various facilities including libraries, student hostels, canteens, sports, and counseling services.",
  },
  {
    question: "How do I contact the SLIATE head office?",
    answer:
      "You can contact the SLIATE head office at 320, T B Jayah Mawatha, Colombo, Sri Lanka. Phone: (+94) 112 691307 / 112 691572. Email: contact@sliate.lk",
  },
  {
    question: "What are the research opportunities available?",
    answer:
      "SLIATE encourages research by providing platforms like research symposiums, research allowances, and publishing research papers.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold text-blue-500 dark:text-gray-300 flex justify-between">
                  {faq.question}
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </h2>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700 dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
