import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import mainImage from "../../public/main.jpg";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* top background container start */}
      <div className="w-full h-[400px] relative bg-green-50">
        <Image src={mainImage} alt="Main Image" fill objectFit="cover" />
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        {/* content */}
        <div></div>
        <TopNavigation />
      </div>
      {/* top background container end */}
    </div>
  );
}
