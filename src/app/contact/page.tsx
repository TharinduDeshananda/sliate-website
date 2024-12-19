import React from "react";

export default function ContactUsPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
              SLIATE Head Office
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              320, T B Jayah Mawatha, Colombo, Sri Lanka
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              Phone: (+94) 112 691307 / 112 691572
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Email:{" "}
              <a
                href="mailto:contact@sliate.lk"
                className="text-blue-500 dark:text-gray-300 underline"
              >
                contact@sliate.lk
              </a>
            </p>

            <h3 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-2">
              <li>Ministry of Higher Education</li>
              <li>University Grant Commission</li>
              <li>Model & Past Papers</li>
              <li>Student Centered Learning</li>
              <li>Life @ SLIATE</li>
              <li>Research Symposium</li>
              <li>Research Papers</li>
              <li>Annual Report</li>
            </ul>
          </div>

          {/* Send Message Form */}
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-400 mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-400 mb-1"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-400 mb-1"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white dark:bg-gray-500 dark:text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-400 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Section */}
        {/* <div className="mt-12"> */}
        {/* <h2 className="text-2xl font-semibold text-blue-500 dark:text-gray-300 mb-4"> */}
        {/* Frequently Asked Questions */}
        {/* </h2> */}
        {/* <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6"> */}
        {/* <p className="text-gray-700 dark:text-gray-400"> */}
        {/* For common queries, please refer to our FAQ section or contact our */}
        {/* support team for assistance. */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
