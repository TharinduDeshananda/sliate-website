"use client";
import { useEffect } from "react";

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("icon-container");
    if (!container) return;

    const spawnIcon = () => {
      const icon = document.createElement("div");
      icon.className =
        "absolute bg-white rounded-full opacity-70 animate-float";

      // Randomize size, position, and animation duration
      const size = Math.random() * 40 + 10; // 10px to 50px
      icon.style.width = `${size}px`;
      icon.style.height = `${size}px`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s to 10s
      icon.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(icon);

      // Remove after animation ends
      icon.addEventListener("animationend", () => icon.remove());
    };

    const interval = setInterval(spawnIcon, 500); // Spawn every 500ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="icon-container"
      className="absolute inset-0 overflow-hidden z-[-1]"
    ></div>
  );
};

export default AnimatedBackground;
