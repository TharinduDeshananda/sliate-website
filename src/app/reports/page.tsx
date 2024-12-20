"use client";
import React, { useState } from "react";

type ReportType = {
  title: string;
  date: string;
  description: string;
  attachmentsLink: string;
};

const reports: ReportType[] = [
  {
    title: "Annual Report 2023",
    date: "2023-12-01",
    description: "Detailed insights into our institute's achievements in 2023.",
    attachmentsLink: "/reports/annual-2023.pdf",
  },
  {
    title: "Quarterly Report Q3 2023",
    date: "2023-09-30",
    description: "Performance highlights for the third quarter of 2023.",
    attachmentsLink: "/reports/q3-2023.pdf",
  },
  {
    title: "Sustainability Report 2023",
    date: "2023-08-15",
    description: "Our commitment and actions towards sustainable practices.",
    attachmentsLink: "/reports/sustainability-2023.pdf",
  },
];

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered reports based on the search term
  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-blue-500 dark:text-gray-500 text-center mb-8">
          Reports
        </h1>

        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" max-w-3xl w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
          />
        </div>

        {/* Report Cards */}
        <div className="space-y-8">
          {filteredReports.length > 0 ? (
            filteredReports.map((report, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-2 text-blue-500 dark:text-gray-500">
                  {report.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Date: {report.date}
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  {report.description}
                </p>
                <a
                  href={report.attachmentsLink}
                  className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-gray-500 dark:text-gray-100 rounded hover:bg-blue-600 dark:hover:bg-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Attachments
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No reports found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
