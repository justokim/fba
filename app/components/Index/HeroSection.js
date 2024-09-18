export const HeroSection = () => {
  return (
    <div className="">
      <video
        autoPlay={true}
        muted
        controls
        playsInline
        loop
        className=" mx-auto w-full md:w-11/12 h-96 md:h-100 pointer-events-none   object-cover  "
      >
        <source src="/basketball.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
