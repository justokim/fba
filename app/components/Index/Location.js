import Image from "next/image";

export const Location = () => {
  return (
    <div className=" relative  h-99  ">
      <Image
        src="/Vish-6.jpg"
        layout="fill"
        objectFit="cover"
        alt="Gomes"
        className="scale-x-flip "
      ></Image>
      <div className="absolute left-10  text-3xl lg:text-4xl  top-24 ">
        All classes are held at
      </div>
      <div className="absolute left-10 top-40 text-5xl lg:text-6xl uppercase font-medium">
        John Gomes Elementary School
      </div>
    </div>
  );
};
