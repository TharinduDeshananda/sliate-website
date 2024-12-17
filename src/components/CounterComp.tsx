"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

type CounterType = {
  endsAt: number;
  startsFrom: number;
  title: string;
};

type PropType = {
  counters: CounterType[];
  duration: number; // Duration for the animation in milliseconds
};

export default function CounterComp() {
  const counters = useMemo(() => getCounters(), []);
  const duration = useMemo(() => getDuration(), []);
  return (
    <div className="w-full flex flex-row flex-wrap justify-between gap-4 card  my-10 py-10 sm:px-20 px-10">
      {counters?.map((counter, index) => (
        <CounterItemComp
          key={index}
          startsFrom={counter.startsFrom}
          endsAt={counter.endsAt}
          title={counter.title}
          duration={duration}
        />
      ))}
    </div>
  );
}

type CounterItemProps = CounterType & { duration: number };

function CounterItemComp({
  startsFrom,
  endsAt,
  title,
  duration,
}: CounterItemProps) {
  const [currentValue, setCurrentValue] = useState(startsFrom);
  const [isInView, setIsInView] = useState(false);

  // Use @uidotdev/usehooks useIntersectionObserver
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2, // Trigger when 20% of the element is visible
    root: null,
    rootMargin: "5px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsInView(true);
    }
  }, [entry]);

  useEffect(() => {
    if (!isInView) return;

    const totalSteps = 60; // Number of animation steps
    const stepDuration = duration / totalSteps;

    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3); // Cubic ease-out

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / totalSteps, 1); // Progress from 0 to 1
      const easedProgress = easeOut(progress); // Apply easing function

      const newValue = startsFrom + easedProgress * (endsAt - startsFrom);
      setCurrentValue(Math.floor(newValue));

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, startsFrom, endsAt, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center ">
      <h1 className="text-lg font-medium color-text-primary">{title}</h1>
      <h1 className="text-3xl font-bold color-text-primary">{currentValue}</h1>
    </div>
  );
}

function getCounters() {
  return [
    { startsFrom: 0, endsAt: 6300, title: "Graduates" },
    { startsFrom: 0, endsAt: 21560, title: "Graduated" },
    { startsFrom: 0, endsAt: 900, title: "Staff" },
    { startsFrom: 0, endsAt: 4300, title: "Published" },
  ];
}

function getDuration() {
  return 4000;
}
