import LankaMapComp from "@/components/LankaMapComp";
import React from "react";

export default function InstitutionsPage() {
  return (
    <div className="w-full min-h-screen mt-20 max-w-6xl mx-auto">
      <h1 className="text-heading">Choose the SLIATE Institute</h1>
      <LankaMapComp />
    </div>
  );
}
