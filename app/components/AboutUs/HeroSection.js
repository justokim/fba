import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center bg-black/80">
      <div className="absolute inset-0">
        <Image
          src="/hoop.jpg"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          ABOUT US
        </h1>
      </div>
    </section>
  );
};
