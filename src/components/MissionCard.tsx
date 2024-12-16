"use client";
import React, { useState } from "react";
import Image from "next/image";

type DataType = {
  title: string;
  message: string;
  image: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
};

const data: DataType[] = [
  {
    title: "Mission",
    image: "/mission.png",
    message: `Our mission is to empower students with knowledge, skills, and values
          to excel in an ever-evolving world. We are committed to fostering a
          culture of innovation, inclusivity, and lifelong learning, nurturing
          future leaders who inspire change and contribute to the betterment of
          society.`,
    borderColor: "#f97316",
    bgColor: "#fff7ed",
    textColor: "#f97316",
  },
  {
    title: "Vision",
    image: "/vision.png",
    message: `Our vision is to create a transformative educational ecosystem that
          inspires individuals to reach their fullest potential. We strive to be
          a global leader in education by promoting creativity, collaboration,
          and critical thinking, shaping a brighter future for all.`,
    borderColor: "#10b981", // Green
    bgColor: "#f0fdf4", // Light green background
    textColor: "#047857", // Darker green for text
  },
];

export default function MissionCard() {
  const [show, setShow] = useState(0);
  const [cards, setCards] = useState(data);
  return (
    <div
      className="max-w-3xl  mx-auto  border-2  rounded-xl px-2 py-5 pb-20  relative mb-10"
      style={{
        backgroundColor: data[show].bgColor,
        borderColor: data[show].borderColor,
      }}
    >
      <div className="flex flex-row items-center justify-end gap-x-3">
        {cards.map((i, index) => (
          <button
            key={i.title}
            onClick={() => setShow(index)}
            className="w-4 h-4 rounded-full outline outline-offset-2 outline-2"
            style={{
              backgroundColor: index == show ? i.borderColor : i.bgColor,
              outlineColor: i.borderColor,
            }}
          ></button>
        ))}
      </div>
      <div>
        <div className="mx-auto w-1/4 min-w-[60px] max-w-[120px] aspect-square relative">
          <Image
            objectFit="contain"
            fill
            src={data[show].image}
            alt="mission logo"
          />
        </div>
        <h1
          className="text-2xl text-center font-bold"
          style={{ color: data[show].textColor }}
        >
          Our Mission
        </h1>
        <p className="text-center " style={{ color: data[show].textColor }}>
          {data[show].message}
        </p>
      </div>
    </div>
  );
}
