import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import mainImage from "../../public/main.jpg";
import mainLogoImage from "../../public/main-logo.png";
import logoImage from "../../public/SLIATE_LOGO.png";
import MissionCard from "@/components/MissionCard";
import MainContent from "@/components/MainContent";
import ImageGalleryComp from "@/components/ImageGalleryComp";
import NavComps from "@/components/NavComps";
import Footer from "@/components/FooterComp";
import CorousalComp from "@/components/CorousalComp";
import CounterComp from "@/components/CounterComp";
import AnthemComp from "@/components/AnthemComp";
import HeaderComp from "@/components/HeaderComp";

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
