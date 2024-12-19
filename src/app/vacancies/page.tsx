"use client";
import React, { useState } from "react";

const vacancies = [
  {
    id: 1,
    title: "Senior Lecturer in Computer Science",
    description:
      "We are looking for a highly motivated individual with expertise in Computer Science to join our faculty as a Senior Lecturer.",
    deadline: "2025-01-15",
  },
  {
    id: 2,
    title: "Junior Lecturer in Mathematics",
    description:
      "Join our Mathematics Department as a Junior Lecturer. Fresh graduates are encouraged to apply.",
    deadline: "2025-02-01",
  },
  {
    id: 3,
    title: "Administrative Assistant",
    description:
      "The university is hiring an Administrative Assistant to support various administrative tasks across departments.",
    deadline: "2025-01-30",
  },
];

export default function VacanciesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVacancies = vacancies.filter((vacancy) =>
    vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          Current Vacancies
        </h1>

        {/* Search Field */}
        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title..."
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
          />
        </div>

        {/* Vacancies List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-2">
                {vacancy.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Deadline: {vacancy.deadline}
              </p>
              <p className="text-gray-800 dark:text-gray-200 line-clamp-3 mb-4">
                {vacancy.description}
              </p>
              <button className="bg-blue-500 text-white dark:bg-gray-500 dark:text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-400 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* No Vacancies Message */}
        {filteredVacancies.length === 0 && (
          <p className="text-gray-700 dark:text-gray-400 text-center mt-8">
            No vacancies found matching your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}
