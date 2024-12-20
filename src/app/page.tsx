import MissionCard from "@/components/MissionCard";
import MainContent from "@/components/MainContent";
import ImageGalleryComp from "@/components/ImageGalleryComp";
import NavComps from "@/components/NavComps";
import CorousalComp from "@/components/CorousalComp";
import CounterComp from "@/components/CounterComp";
import AnthemComp from "@/components/AnthemComp";

export default function HomePage() {
  return (
    <div>
      {/* top background container end */}
      <CorousalComp />
      <CounterComp />
      <MissionCard />
      <MainContent />
      <ImageGalleryComp />
      <NavComps />
      <AnthemComp />
    </div>
  );
}
