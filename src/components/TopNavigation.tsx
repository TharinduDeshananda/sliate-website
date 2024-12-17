import Link from "next/link";
import React from "react";

export default function TopNavigation() {
  return (
    <div className="hidden w-full sm:flex flex-row items-center absolute top-full left-0 text-xs z-20">
      <NavItem link="#" title="Home" />
      <NavItem link="#" title="About" />
      <NavItem link="#" title="News" />
      <NavItem
        link="#"
        title="Courses"
        items={[
          { link: "", title: "Science" },
          { link: "", title: "Maths" },
          { link: "", title: "English" },
          { link: "", title: "History" },
        ]}
      />
      <NavItem link="#" title="Institutions" />
      <NavItem link="#" title="Contact" />
      <NavItem link="#" title="Internal Circulars" />
      <NavItem link="#" title="FAQ" />
      <NavItem link="#" title="Vacancies" />
    </div>
  );
}

type NavItemType = {
  title: string;
  link: string;
  active?: boolean;
  items?: NavItemType[];
};

function NavItem({ link, title, active = false, items = [] }: NavItemType) {
  return (
    <div className="relative group overflow-hidden">
      <Link href={link} className="relative group ">
        <div className="px-5 py-3 w-full h-full text-transparent bg-transparent text-nowrap">
          {title}
        </div>
        {/* Default content. Moves down on hover exit */}
        <div className="absolute w-full h-full bg-blue-700 text-white px-5 py-3 top-0 transition-all duration-300 group-hover:top-full">
          {title}
        </div>
        {/* Hidden content. Moves up on hover */}
        <div className="absolute w-full h-full bg-white text-blue-700 px-5 py-3 top-full transition-all duration-300 group-hover:top-0">
          {title}
        </div>
      </Link>
      {items.length > 0 && (
        <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg border">
          {items.map((i) => (
            <NavItem
              link={i.link}
              title={i.title}
              active={i.active}
              items={i.items}
              key={i.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
