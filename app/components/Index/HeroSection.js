import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
        >
          <source src="/basketball.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 space-y-4">
            <h1 className="font-heading text-7xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
              ELEVATE
              <br />
              <span className="text-orange-600">YOUR GAME</span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-orange-600" />
              <p className="font-heading text-lg font-bold uppercase tracking-wider text-white/80 md:text-xl">
                Fremont Basketball Academy
              </p>
            </div>
          </div>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Elite training programs for elementary through high school athletes.
            Professional coaching, proven methods, championship mindset.
          </p>

          <div className="flex flex-col sm:flex-row">
            <button className="bg-orange-600 min-w-[200px] py-2.5 rounded-md font-heading text-sm font-black uppercase tracking-wider">
              <Link href="/register">Start Free Trial</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-white/50">
            Scroll
          </span>
          <div className="h-12 w-[2px] bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};
