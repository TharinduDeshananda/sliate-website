import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  CalendarIcon,
  MusicalNoteIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function NavComps() {
  return (
    <div className="w-full main-content flex gap-6 flex-wrap justify-center">
      {navData?.map((item, index) => (
        <NavComp {...item} key={index} />
      ))}
    </div>
  );
}

type NavCompType = {
  title: string;
  bgColor: string;
  link: string;
  description: string;
  icon: React.ReactNode;
};

function NavComp({ title, bgColor, link, description, icon }: NavCompType) {
  return (
    <a
      href={link}
      className="relative w-[300px] aspect-square rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        {icon}
      </div>

      {/* Front Title */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold z-10">
        {title}
      </div>

      {/* Back Description */}
      <div className="absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
        <p className="mb-3 text-lg font-medium text-center">{description}</p>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200">
          View <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </a>
  );
}

const navData: NavCompType[] = [
  {
    title: "Event Calendar",
    bgColor: "#3498db", // Blue
    link: "/home",
    description: "Stay updated with upcoming events and activities.",
    icon: <CalendarIcon className="h-48 w-48 text-white" />,
  },
  {
    title: "SLIATE Anthem",
    bgColor: "#e74c3c", // Red
    link: "/about",
    description: "Listen to the anthem that defines our institution.",
    icon: <MusicalNoteIcon className="h-48 w-48 text-white" />,
  },
  {
    title: "Facilities",
    bgColor: "#2ecc71", // Green
    link: "/services",
    description: "Discover the facilities available to all students.",
    icon: <CogIcon className="h-48 w-48 text-white" />,
  },
  {
    title: "Student Counselling",
    bgColor: "#9b59b6", // Purple
    link: "/portfolio",
    description: "Access counselling services for student support.",
    icon: <ChatBubbleBottomCenterTextIcon className="h-48 w-48 text-white" />,
  },
  {
    title: "Sports & Games",
    bgColor: "#f1c40f", // Yellow
    link: "/contact",
    description: "Engage in sports and recreational activities.",
    icon: <TrophyIcon className="h-48 w-48 text-white" />,
  },
];
