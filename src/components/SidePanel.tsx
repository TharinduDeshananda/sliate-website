import Image from "next/image";
import React from "react";

export default function SidePanel() {
  return (
    <div className="w-full flex flex-col  gap-y-4">
      <SidePanelMenuContainer
        title="Quick Links"
        visible={true}
        items={[
          {
            backgroundImage: "/lms-image.jpg",
            link: "",
            title: "LMS",
          },
          {
            backgroundImage: "/library.jpg",
            link: "",
            title: "Library",
          },
          {
            backgroundImage: "/counselling.jpg",
            link: "",
            title: "Counselling",
          },
        ]}
      />
      <SidePanelMenuContainer
        title="Exams"
        visible={true}
        items={[
          {
            backgroundImage: "/level1.jpg",
            link: "",
            title: "Year one",
          },
          {
            backgroundImage: "/level2.jpg",
            link: "",
            title: "Year two",
          },
          {
            backgroundImage: "/lab.jpg",
            link: "",
            title: "Laboratory",
          },
        ]}
      />
    </div>
  );
}

type SlidePanelItemType = {
  title: string;
  link: string;
  backgroundImage: string;
};

type MenuContainerType = {
  title: string;
  visible: boolean;
  items: SlidePanelItemType[];
};
function SidePanelMenuContainer(prop: MenuContainerType) {
  return (
    <div className="w-full rounded-xl overflow-hidden gap-y-1 flex flex-col">
      <h1 className="bg-blue-500 dark:bg-gray-600 text-white text-center w-full py-2 ">
        {prop.title}
      </h1>
      <div className="w-full flex flex-col gap-y-1">
        {prop?.items?.map((i) => (
          <SlidePanelItem {...i} key={i.title} />
        ))}
      </div>
    </div>
  );
}

function SlidePanelItem(prop: SlidePanelItemType) {
  return (
    <div className="shadow-lg card-hover cursor-pointer  w-full overflow-ellipsis relative px-2 py-5  overflow-hidden animate-staggered-slide-in">
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
