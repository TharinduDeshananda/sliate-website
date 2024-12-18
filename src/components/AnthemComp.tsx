"use client";
import React, { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon, StopIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
// import Lottie from "lottie-react";

export default function AnthemComp() {
  const [lang, setLang] = useState<"SINHALA" | "TAMIL">("SINHALA");
  const [status, setStatus] = useState<"PAUSED" | "PLAYING" | "ENDED">(
    "PAUSED"
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  // const [animationData, setAnimationData] = useState(null);

  // useEffect(() => {
  //   const fetchAnimationData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://cdn.lottielab.com/l/CfnuTWsBMid2uE.json"
  //       );
  //       const data = await response.json();
  //       setAnimationData(data);
  //     } catch (error) {
  //       console.error("Failed to load animation:", error);
  //     }
  //   };

  //   fetchAnimationData();
  // }, []);

  // Audio sources
  const audioSources = {
    SINHALA:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
    TAMIL:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
  };

  // Handle Play
  const handlePlay = () => {
    if (lang) {
      setStatus("PLAYING");
      audioRef.current?.play();
    }
  };

  // Handle Pause
  const handlePause = () => {
    setStatus("PAUSED");
    audioRef.current?.pause();
  };

  // Handle Stop
  const handleStop = () => {
    setStatus("PAUSED");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handle Replay
  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setStatus("PLAYING");
    }
  };

  // Effect to handle language changes
  useEffect(() => {
    if (audioRef.current && lang) {
      // Reset audio when language changes
      audioRef.current.src = audioSources[lang];
      audioRef.current.load();

      // Reset status
      setStatus("PAUSED");
    }
  }, [lang]);

  // Effect to handle audio end
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleAudioEnd = () => {
      setStatus("PAUSED");
    };

    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnd);

      // Cleanup listener
      return () => {
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, []);

  return (
    <div
      className={`
      w-full max-w-2xl relative mx-auto flex-col border-2 flex 
      justify-center items-center my-5 rounded-lg
      ${status === "PLAYING" ? "animate-rainbow-border" : ""}
    `}
    >
      {/* {animationData && (
        <Lottie
          className="absolute inset-0 z-0 opacity-50 "
          animationData={animationData}
          loop={true}
          autoplay={true}
        />
      )} */}
      <audio ref={audioRef} src={lang ? audioSources[lang] : undefined} />

      <div className="absolute flex flex-row gap-x-2 right-0 top-0 py-2 px-2 z-10">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded-lg"
          onClick={() => setLang("SINHALA")}
          style={{ backgroundColor: lang == "SINHALA" ? "#eab308" : "#facc15" }}
        >
          Sinhala
        </button>
        <button
          onClick={() => setLang("TAMIL")}
          className="bg-orange-400 hover:bg-orange-500 text-white px-2 py-1 rounded-lg"
          style={{ backgroundColor: lang == "TAMIL" ? "#f97316" : "#fb923c" }}
        >
          Tamil
        </button>
      </div>

      <div className="w-full p-20 flex justify-center items-center gap-x-5">
        <StopIcon
          className="w-[50px] aspect-square cursor-pointer card-hover"
          onClick={handleStop}
        />

        <div className="rounded-full w-[100px] aspect-square cursor-pointer card-hover">
          {(status === "PAUSED" || status === "ENDED") && (
            <PlayIcon className="w-full text-green-500" onClick={handlePlay} />
          )}
          {status === "PLAYING" && (
            <PauseIcon
              className="w-full text-yellow-500"
              onClick={handlePause}
            />
          )}
        </div>

        <ArrowPathIcon
          className="w-[50px] aspect-square cursor-pointer card-hover text-blue-500"
          onClick={handleReplay}
        />
      </div>

      <div>
        <h1>
          Play {lang == "SINHALA" ? "Anthem in Sinhala" : "Anthem in Tamil"}
        </h1>
      </div>
    </div>
  );
}
