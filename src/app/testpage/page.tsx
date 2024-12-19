import LankaMapComp from "@/components/LankaMapComp";
import Image from "next/image";
import React from "react";

export default function TestPage() {
  return (
    <div className="w-full min-h-screen">
      {/* <Image
        width={400}
        height={400}
        alt="image of sri lanka"
        src={"/sri-lanka.svg"}
        className="mt-20 mx-auto bg-red-100 p-20"
      /> */}
      <LankaMapComp />
    </div>
  );
}
