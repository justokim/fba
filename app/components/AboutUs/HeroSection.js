import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative w-full mx-auto h-96 md:h-100">
      <Image src="/hoop.jpg" className="w-full h-full" layout="fill"></Image>
    </div>
  );
};
