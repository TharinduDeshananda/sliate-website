"use client";

import React, { useState } from "react";
import { PlayIcon, PauseIcon, StopIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function AnthemComp() {
  const [lang, setLang] = useState<"SINHALA" | "TAMIL">();
  const [status, setStatus] = useState<"PAUSED" | "PLAYING">("PAUSED");
  return (
    <div className="w-full max-w-2xl relative mx-auto flex-col  border-2 flex justify-center items-center my-5 rounded-lg">
      <div className="absolute flex flex-row gap-x-2 right-0 top-0 py-2 px-2">
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
        <StopIcon className="w-[50px] aspect-square cursor-pointer card-hover" />
        <div className="rounded-full w-[100px] aspect-square cursor-pointer card-hover">
          {status == "PAUSED" && (
            <PlayIcon
              className="w-full text-green-500"
              onClick={() => setStatus("PLAYING")}
            />
          )}
          {status == "PLAYING" && (
            <PauseIcon
              className="w-full text-yellow-500"
              onClick={() => setStatus("PAUSED")}
            />
          )}
        </div>

        <ArrowPathIcon className="w-[50px] aspect-square cursor-pointer card-hover" />
      </div>
      <div>
        <h1>
          Play {lang == "SINHALA" ? "Anthem in Sinhala" : "Anthem in Tamil"}
        </h1>
      </div>
    </div>
  );
}
