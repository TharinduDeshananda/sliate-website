"use client";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

export default function TopNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  function changeShowState() {
    setShowMenu((c) => !c);
  }
  return (
    <div>
      {showMenu && <FloatingMenu onClick={changeShowState} />}
      <div className="absolute top-full left-0 z-50 sm:hidden">
        <button
          className="bg-blue-500 dark:bg-gray-500 p-2 rounded-full card-hover text-white"
          onClick={changeShowState}
        >
          <Bars4Icon className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden w-full sm:flex flex-row items-center absolute top-full left-0 text-xs z-20">
        <NavItem link="/" title="Home" />
        <NavItem link="/about" title="About" />
        <NavItem link="/news" title="News" />
        <NavItem link="/courses" title="Courses" />
        <NavItem link="/institutions" title="Institutions" />
        <NavItem link="/contact" title="Contact" />
        <NavItem link="/reports" title="Reports" />
        <NavItem link="/faq" title="FAQ" />
        <NavItem link="/vacancies" title="Vacancies" />
      </div>
    </div>
  );
}

type NavItemType = {
  title: string;
  link: string;
  active?: boolean;
  items?: NavItemType[];
};

function NavItem({ link, title, items = [] }: NavItemType) {
  return (
    <div className="relative group overflow-hidden">
      <Link href={link} className="relative group ">
        <div className="px-5 py-3 w-full h-full text-transparent bg-transparent text-nowrap">
          {title}
        </div>
        {/* Default content. Moves down on hover exit */}
        <div className="absolute w-full h-full bg-blue-700 dark:bg-gray-500 text-white px-5 py-3 top-0 transition-all duration-300 group-hover:top-full">
          {title}
        </div>
        {/* Hidden content. Moves up on hover */}
        <div className="absolute w-full h-full bg-white text-blue-700 dark:text-gray-500 px-5 py-3 top-full transition-all duration-300 group-hover:top-0">
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

function FloatingMenu({ onClick = () => {} }: { onClick: () => void }) {
  return (
    <div className="w-full flex flex-col gap-y-2 z-[100] fixed bg-blue-700 dark:bg-gray-500">
      <XMarkIcon
        onClick={onClick}
        className="rounded-full card-hover text-white w-8 h-8 cursor-pointer card-hover hover:bg-white hover:text-purple-500"
      />

      <div>
        <NavItem link="/" title="Home" />
        <NavItem link="/about" title="About" />
        <NavItem link="/news" title="News" />
        <NavItem link="/courses" title="Courses" />
        <NavItem link="/institutions" title="Institutions" />
        <NavItem link="/contact" title="Contact" />
        <NavItem link="/reports" title="Reports" />
        <NavItem link="/faq" title="FAQ" />
        <NavItem link="/vacancies" title="Vacancies" />
      </div>
    </div>
  );
}
