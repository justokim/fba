import Image from "next/image";
export const Team = () => {
  const people = [
    {
      name: "Vishrant Prabhu",
      title: "Founder/Coach",
      experience: "Played at MSJHS and founded FBA in 2020",
      hometown: "Fremont, CA",
      img: "/portrait_vish.jpg",
    },
    {
      name: "Luis",
      title: "Coach",
      experience: "Played at MSJHS",
      hometown: "Fremont, CA",
      img: "/asian.jpeg",
    },
    {
      name: "Harnoor",
      title: "Coach",
      experience: "Played at MSJHS",
      hometown: "Fremont, CA",
      img: "/indian.jpeg",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <div className="mb-6 flex items-center gap-6">
              <div className="h-1 w-16 bg-orange-600" />
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-orange-600">
                The Team
              </span>
            </div>
            <h2 className="font-heading text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl">
              MEET THE
              <br />
              <span className="text-orange-600">COACHES</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-lg border-2 border-white/10 bg-black transition-all duration-300 hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/20"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-900">
                <div className="h-full w-full rounded-none">
                  <Image
                    src={person.img}
                    alt={person.name}
                    className="object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="absolute inset-0 bg-orange-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="mb-1 font-heading text-xl font-black uppercase tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="mb-3 font-heading text-xs font-bold uppercase tracking-wider text-orange-600">
                  {person.title}
                </p>
                <p className="text-sm leading-relaxed text-white/60">
                  {person.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
