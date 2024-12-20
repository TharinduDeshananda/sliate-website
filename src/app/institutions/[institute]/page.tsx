"use client";

import Image from "next/image";
import React, { useState } from "react";

const SingleInstitutePage = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="w-full mx-auto  ">
        <div className="w-full rounded-lg h-64 relative ">
          <Image
            alt="Institute banner"
            fill
            src={"/main.jpg"}
            className="z-0"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>
        </div>
        {/* Branch Title and Description */}
        <div className="mb-8 z-20">
          <h2 className="text-3xl font-semibold text-blue-500 dark:text-gray-500 mb-4">
            About Our Institute
          </h2>
          <p className="text-gray-700 dark:text-gray-400">
            Welcome to the [Branch Name] branch of our institute. We are
            dedicated to providing quality education and resources to our
            community. Our branch is equipped with state-of-the-art facilities
            and a passionate team of educators to help you succeed.
          </p>
        </div>

        {/* Tabs Section */}
        <div>
          <div className="flex border-b border-gray-300 dark:border-gray-600 mb-4">
            {[
              { id: "contact", label: "Contact" },
              { id: "courses", label: "Courses" },
              { id: "facilities", label: "Facilities" },
              { id: "events", label: "Events" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium focus:outline-none ${
                  activeTab === tab.id
                    ? "text-blue-500 border-b-2 border-blue-500 dark:text-gray-300 dark:border-gray-300"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
            {activeTab === "contact" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  Address: [Branch Address]
                </p>
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  Phone: [Branch Phone Number]
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Email: [Branch Email]
                </p>
              </div>
            )}

            {activeTab === "courses" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
                  Available Courses
                </h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-2">
                  <li>Course 1</li>
                  <li>Course 2</li>
                  <li>Course 3</li>
                </ul>
              </div>
            )}

            {activeTab === "facilities" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
                  Institute Facilities
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  Our institute offers modern classrooms, a fully equipped
                  library, computer labs, and more.
                </p>
              </div>
            )}

            {activeTab === "events" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-4">
                  Upcoming Events
                </h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-2">
                  <li>Event 1: Description and date</li>
                  <li>Event 2: Description and date</li>
                  <li>Event 3: Description and date</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInstitutePage;
