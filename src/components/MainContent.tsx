import React from "react";
import NewsCard, { NewsCardDataType } from "./NewsCard";

export default function MainContent() {
  return (
    <div className="main-content">
      <NewsCard {...getData()[0]} />
    </div>
  );
}

function getData() {
  const dummyData: NewsCardDataType[] = [
    {
      newsType: "Announcement",
      image: "/main.jpg",
      title: "New Library Opening Hours",
      message:
        "Starting next week, the library will be open from 8 AM to 10 PM to accommodate student schedules.",
      date: "2024-12-15",
      link: "/news/library-hours",
    },
    {
      newsType: "Event",
      image: "/main.jpg",
      title: "Annual Science Fair 2024",
      message:
        "Join us for the Annual Science Fair featuring innovative projects by our talented students. Don’t miss it!",
      date: "2024-12-20",
      link: "/events/science-fair",
    },
    {
      newsType: "Update",
      image: "/main.jpg",
      title: "Campus Renovation Progress",
      message:
        "The renovation of the main hall is progressing as planned. It is expected to be completed by January 2025.",
      date: "2024-12-10",
      link: "/updates/campus-renovation",
    },
  ];
  return dummyData;
}
