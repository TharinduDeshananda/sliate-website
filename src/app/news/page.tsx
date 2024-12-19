"use client";
import PaginationComp from "@/components/Pagination";
import React, { useState } from "react";

type NewsType = {
  title: string;
  content: string;
  date: string;
  id: number;
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState<NewsType[]>(getData());

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = getData().filter((news) =>
      news.title.toLowerCase().includes(query)
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          University News
        </h1>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search news by title..."
            className="w-full sm:w-2/3 lg:w-1/3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
          />
        </div>
        <PaginationComp />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-500 dark:text-gray-300 mb-2">
                {news.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {news.date}
              </p>
              <p className="text-gray-800 dark:text-gray-200 line-clamp-3 mb-4">
                {news.content}
              </p>
              <a
                href={`/news/${news.id}`}
                className="text-blue-500 dark:text-gray-300 hover:underline font-medium"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getData(): NewsType[] {
  const newsData: NewsType[] = [
    {
      id: 1,
      title: "University Hosts Annual Science Fair",
      date: "2024-12-10",
      content:
        "Students from various departments showcased their innovative projects at the annual science fair, drawing a large crowd from the community.",
    },
    {
      id: 2,
      title: "Guest Lecture on Artificial Intelligence",
      date: "2024-12-05",
      content:
        "Dr. John Doe, a leading AI expert, delivered an insightful lecture on the future of artificial intelligence and its applications.",
    },
    {
      id: 3,
      title: "New Library Wing Opens",
      date: "2024-11-30",
      content:
        "The university inaugurated a new library wing, equipped with modern facilities and a larger collection of resources for students.",
    },
    {
      id: 4,
      title: "University Hosts Annual Science Fair",
      date: "2024-12-10",
      content:
        "Students from various departments showcased their innovative projects at the annual science fair, drawing a large crowd from the community.",
    },
    {
      id: 5,
      title: "Guest Lecture on Artificial Intelligence",
      date: "2024-12-05",
      content:
        "Dr. John Doe, a leading AI expert, delivered an insightful lecture on the future of artificial intelligence and its applications.",
    },
    {
      id: 6,
      title: "New Library Wing Opens",
      date: "2024-11-30",
      content:
        "The university inaugurated a new library wing, equipped with modern facilities and a larger collection of resources for students.",
    },
  ];
  return newsData;
}
