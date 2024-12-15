"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import lightImage from "../../public/light-mode.png";
import darkImage from "../../public/dark-mode.png";
import Image from "next/image";
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);
  console.log(resolvedTheme);
  if (!mounted) return <div>Loading</div>;
  if (resolvedTheme == "dark")
    return (
      <button
        className="fixed left-2 bottom-2 rounded-full w-12 h-12 bg-white p-3"
        onClick={() => {
          console.log("Light theme");
          setTheme("light");
        }}
      >
        <div className="w-full h-full relative">
          <Image
            alt="Light Mode image"
            src={lightImage}
            fill
            objectFit="cover"
          />
        </div>
      </button>
    );

  return (
    <button
      className="fixed left-2 bottom-2 rounded-full w-12 h-12 bg-white p-3"
      onClick={() => {
        console.log("Dark theme");

        setTheme("dark");
      }}
    >
      <div className="w-full h-full relative">
        <Image alt="Light Mode image" src={darkImage} fill objectFit="cover" />
      </div>
    </button>
  );
}
