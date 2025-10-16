import Link from "next/link";
import { Star } from "lucide-react";

const testimony = [
  {
    name: "Nandini V",
    summary:
      "Vishrant has put together a great initiative to coach kids in basketball. They have been consistent, organized, flexible, open to feedback, and have kept the sport fun for our 9 year old. Highly recommend them for a grass-roots approach to learning the nuances of basketball in a small group.",
  },
  {
    name: "Anitha H",
    summary:
      "My daughter has been going to basketball classes with Coach Vishrant. It is a full 60 minute non-stop workout and I have seen her skills improve every week. I have seen the amount of personal attention each kid gets from the coach. The competitive games at the end of the session helps the kids implement the learnings.",
  },
  {
    name: "Alpana K ",
    summary:
      "Vishrant has coached my kids for the past year. They are extremely good with little kids, keeping them engaged and making the game fun while pushing them to do better.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            What Our Families Say
          </h2>
          <p className="mx-auto max-w-2xl text-white/50 text-lg">
            Real feedback from students and parents in our program
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {testimony.map((person, index) => (
            <div key={index}>
              <div className="h-full p-6 transition-all duration-300 hover:shadow-lg border-2 border-white/10 bg-black/90 rounded-md">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-orange-600 text-orange-600"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 text-balance leading-relaxed text-white/90">
                  "{person.summary}"
                </blockquote>
                <div>
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-white/50">Parent</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-600 text-black px-6 py-2.5 rounded-md">
            <Link href="/register">Join Our Academy Today</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
