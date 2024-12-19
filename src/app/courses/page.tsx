"use client";
import Link from "next/link";
import React, { useState } from "react";

type CourseType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  years: number;
};

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(
    getCourses()
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = getCourses().filter((course) =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          Courses Offered
        </h1>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search courses by title..."
            className="w-full sm:w-2/3 lg:w-1/3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Duration: {course.years} years
              </p>
              <p className="text-gray-800 dark:text-gray-200 line-clamp-3 mb-4">
                {course.description}
              </p>
              <Link href={`/courses/${course.id}`}>
                <button className="bg-blue-600 text-white card-hover hover:bg-blue-500 px-5 py-2 rounded-lg">
                  View
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getCourses(): CourseType[] {
  return [
    {
      id: 1,
      title: "Computer Science",
      description:
        "Dive into the world of algorithms, data structures, and software development with our comprehensive Computer Science program.",
      imageUrl: "https://via.placeholder.com/400",
      years: 4,
    },
    {
      id: 2,
      title: "Business Administration",
      description:
        "Learn the fundamentals of business, management, and entrepreneurship in our dynamic Business Administration course.",
      imageUrl: "https://via.placeholder.com/400",
      years: 3,
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      description:
        "Explore the principles of mechanics, thermodynamics, and materials science in our Mechanical Engineering program.",
      imageUrl: "https://via.placeholder.com/400",
      years: 4,
    },
    {
      id: 4,
      title: "Psychology",
      description:
        "Understand the complexities of human behavior and mental processes with our insightful Psychology course.",
      imageUrl: "https://via.placeholder.com/400",
      years: 3,
    },
    {
      id: 5,
      title: "Architecture",
      description:
        "Design innovative structures and learn architectural principles in our creative Architecture program.",
      imageUrl: "https://via.placeholder.com/400",
      years: 5,
    },
  ];
}
