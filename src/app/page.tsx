import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import mainImage from "../../public/main.jpg";
import mainLogoImage from "../../public/main-logo.png";
import logoImage from "../../public/SLIATE_LOGO.png";
import MissionCard from "@/components/MissionCard";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* top background container start */}
      <div className="w-full h-[300px] relative bg-green-50 mb-14">
        <Image src={mainImage} alt="Main Image" fill objectFit="cover" />
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        {/* content */}
        <div className="inset-0 z-20 absolute flex items-stretch">
          <div className="w-1/2 absolute top-0 right-0 min-w-[300px]">
            <Image src={mainLogoImage} alt="Main Image" objectFit="cover" />
          </div>
          <div className="flex flex-row items-end w-full px-2 sm:px-10 gap-x-1 pb-5">
            <div className="w-1/6 max-w-[200px] min-w-[100px] relative ">
              <Image
                src={logoImage}
                alt="Main Image"
                objectFit="cover"
                className="bg-white"
              />
            </div>
            {/* contact info */}
            <div className="flex flex-col justify-end gap-y-2 text-xs sm:text-sm  text-white">
              <div className="">
                <h1 className="">(800) 123 1234</h1>
                <h1 className="">(800) 123 1235</h1>
              </div>

              <div className="">
                <div>
                  <span className="font-bold">Sri Lanka:</span>
                  <span> 320, T B Jayah Mawatha Colombo, Sri Lanka</span>
                </div>
                <div>
                  <span className="font-bold">Email:</span>
                  <span> sliate@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopNavigation />
      </div>
      {/* top background container end */}

      <MissionCard />
    </div>
  );
}
