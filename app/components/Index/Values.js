import { Trophy, AlarmClock, Calendar } from "lucide-react";

export const Values = () => {
  const values = [
    {
      name: "Commitment",
      summary:
        "Dedicated to nurturing every player's potential, regardless of skill level, through consistent practice and personal attention.",
      icon: AlarmClock,
    },
    {
      name: "Structured",
      summary:
        "Utilizing a well-defined curriculum that emphasizes fundamentals, sportsmanship, and strategic play to foster athletic, personal, and skill growth at all levels",
      icon: Calendar,
    },
    {
      name: "Passionate",
      summary:
        "Driven by a love for the game and a desire to inspire young athletes, infusing each session with energy and enthusiasm.",
      icon: Trophy,
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-1 w-16 bg-orange-600" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-orange-600">
              Our Values
            </span>
          </div>
          <h2 className="font-heading text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl lg:text-8xl">
            BUILT ON
            <br />
            <span className="text-orange-600">EXCELLENCE</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.name}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-600/30 bg-orange-600/10 transition-all group-hover:border-orange-600 group-hover:bg-orange-600">
                  <value.icon className="h-7 w-7 text-orange-600 transition-colors group-hover:text-black" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-black uppercase tracking-tight text-white">
                  {value.name}
                </h3>
                <p className="text-balance leading-relaxed text-white/60 group-hover:text-white/80">
                  {value.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
