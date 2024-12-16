import Image from "next/image";
import React from "react";

export default function SidePanel() {
  return (
    <div className="w-full flex flex-col  gap-y-2">
      <SlidePanelItem
        title="LMSdsfkdpsfk ksfkpskdfpoksd fpkspfkpskfpskdfpks fksdpfkpd kfpkf"
        backgroundImage="/main.jpg"
        link=""
      />
      <SlidePanelItem title="LMS" backgroundImage="/main.jpg" link="" />
      <SlidePanelItem title="LMS" backgroundImage="/main.jpg" link="" />
      <SlidePanelItem title="LMS" backgroundImage="/main.jpg" link="" />
      <SlidePanelItem title="LMS" backgroundImage="/main.jpg" link="" />
    </div>
  );
}

type SlidePanelItemType = {
  title: string;
  link: string;
  backgroundImage: string;
};
function SlidePanelItem(prop: SlidePanelItemType) {
  return (
    <div className="shadow-lg card-hover cursor-pointer w-full overflow-ellipsis relative px-2 py-5 rounded-xl overflow-hidden animate-staggered-slide-in">
      <Image
        fill
        alt={`${prop.title} image`}
        src={prop.backgroundImage}
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>
      <h1 className="relative  z-20 text-white  text-xs text-center">
        {prop.title}
      </h1>
    </div>
  );
}
