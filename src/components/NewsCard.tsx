import Image from "next/image";
import React from "react";

export type NewsCardDataType = {
  newsType: string;
  image: string;
  title: string;
  message: string;
  date: string;
  link: string;
};

export default function NewsCard(prop: Partial<NewsCardDataType>) {
  return (
    <div className="w-full max-w-[200px] flex flex-col card overflow-hidden  dark:shadow-gray-500 border-transparent hover:border-blue-500 dark:hover:border-gray-500">
      {/* image container */}
      <div className="w-full aspect-square relative">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>
        <h1 className="absolute left-2 top-2 z-20 text-white font-bold text-xs">
          {prop.newsType}
        </h1>
        <Image
          alt={`${prop.title ?? ""} image`}
          src={prop.image ?? ""}
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <p className="text-small">{prop.date ?? "Date NA"}</p>
        <h1 className="text-small font-bold">{prop.title}</h1>
        <p className="text-normal"></p>
        <a href={prop.link} className="sub-link hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
}
