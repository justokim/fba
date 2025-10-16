import Image from "next/image";

export const Pictures = () => {
  return (
    <div className="h-100 md:h-80 w-full relative flex flex-col  md:flex-row">
      <div className="relative w-full h-full hidden lg:block">
        <Image src="/Vish-41.jpg" layout="fill" className="" />
      </div>
      <div className="relative w-full  h-full">
        <Image src="/Vish-21.jpg" layout="fill" className="" />
      </div>
      <div className="relative w-full h-full">
        <Image src="/Vish-91.jpg" layout="fill" className="" />
      </div>
    </div>
  );
};
