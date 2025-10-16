import Image from "next/image";

export const Location = () => {
  return (
    <div className="relative h-99">
      <Image
        src="/Vish-6.jpg"
        layout="fill"
        objectFit="cover"
        alt="Gomes"
        className="scale-x-flip"
      />
      <div className="absolute left-10 text-xl lg:text-2xl top-24 font-bold uppercase">
        All classes held at
      </div>
      <div className="absolute left-10 top-36 text-5xl lg:text-6xl uppercase font-bold">
        John Gomes Elementary School
      </div>
    </div>
  );
};
