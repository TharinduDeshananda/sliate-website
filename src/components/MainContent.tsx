import React from "react";
import NewsCard, { NewsCardDataType } from "./NewsCard";
import PaginationComp from "./Pagination";
import SidePanel from "./SidePanel";

export default function MainContent() {
  return (
    // <div className="main-content">
    //   <NewsCard {...getData()[0]} />
    // </div>
    <div className="main-content flex flex-row flex-wrap lg:flex-nowrap justify-center">
      <div className="flex-1">
        <h1 className="text-subheading text-center my-5">Latest Events</h1>
        <div className="w-full flex flex-row gap-2 flex-wrap justify-center min-w-[250px]">
          <NewsCard {...getData()[0]} />
          <NewsCard {...getData()[0]} />
          <NewsCard {...getData()[0]} />
          <NewsCard {...getData()[0]} />
          <NewsCard {...getData()[0]} />
          <NewsCard {...getData()[0]} />
        </div>
        <PaginationComp />
      </div>
      <div className="min-w-[250px]  min-h-[300px] max-w-[260px]">
        <SidePanel />
      </div>
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
