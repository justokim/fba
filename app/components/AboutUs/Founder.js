"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
export const Founder = () => {
  const [index, setIndex] = useState(0);

  const prevIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const forwardIndex = () => {
    if (index < paragraphs.length - 1) {
      setIndex(index + 1);
    }
  };
  console.log(index);

  const paragraphs = [
    "Vishrant Prabhu's basketball journey began at Gomes Elementary School and continued through his school years, including playing for the varsity team at Mission San Jose High School. Driven by a passion for basketball and empowering youth, he founded Fremont Basketball Academy in June 2020, sharing skills that he had learned with young students within a fun and engaging environment.",
    `"I had a great coach and mentor growing up and wanted to motivate kids in a similar way. I played basketball throughout my childhood. The game of basketball has taught me valuable skills Pursuing this game has helped build discipline and perseverance. Not only that,basketball has allowed me to develop valuable teamwork, skills, and whether it is a pickup game at the gym or playing in a more structured environment elsewhere, the game gives me a lot of joy. I have a lot of experience working with kids as a basketball couch and as a summer camp counselor. I bring that experience to FBA."`,
  ];

  return (
    <div className="py-8">
      {" "}
      <h1 className="text-4xl font-bold text-center py-16">Meet The Founder</h1>
      <div className="max-w-sm text-center md:text-left  md:max-w-lg lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 h-full gap-2 lg:grid lg:grid-cols-2 mt-6 place-items-center  ">
          <div className="col-span-1">
            {" "}
            <Image
              src="/vish.jpg"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>

          <div className="col-span-1 h-full">
            <div className="flex flex-col h-full  ">
              <div className="">{paragraphs[index]}</div>
              <div className="flex-grow"></div>

              <div className="flex flex-row justify-between">
                {" "}
                <div className="font-semibold text-sm pt-4">
                  Vishrant Prabhu
                </div>
                <div className="flex flex-row justify-center items-center">
                  <ChevronLeft
                    className="cursor-pointer"
                    onClick={prevIndex}
                    size={32}
                  />
                  <div className="flex space-x-2">
                    {paragraphs.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                          index === idx ? "bg-[#6D31ED]" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <ChevronRight
                    className="cursor-pointer"
                    onClick={forwardIndex}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
