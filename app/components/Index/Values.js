import { Trophy } from "lucide-react";
import { AlarmClock } from "lucide-react";
import { LayoutPanelTop } from "lucide-react";

export const Values = () => {
  const values = [
    {
      name: "Committed",
      summary:
        "Dedicated to nurturing every player's potential, regardless of skill level, through consistent practice and personal attention.",
      icon: <AlarmClock color="#6D31ED" />,
    },
    {
      name: "Structured",
      summary:
        "Utilizing a well-defined curriculum that emphasizes fundamentals, sportsmanship, and strategic play to foster athletic, personal, and skill growth at all levels",
      icon: <LayoutPanelTop color="#6D31ED" />,
    },
    {
      name: "Passionate",
      summary:
        "Driven by a love for the game and a desire to inspire young athletes, infusing each session with energy and enthusiasm.",
      icon: <Trophy color="#6D31ED" />,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pb-8"> Core Values</h1>

      <div className="flex flex-col  max-w-xs md:max-w-xl lg:max-w-6xl mx-auto justify-center space-y-52">
        {" "}
        <div className="flex lg:flex-row w-full flex-col items-center lg:space-y-0 space-y-4 lg:space-x-4  justify-center mx-auto">
          {values.map((value) => {
            return (
              <div className="p-4 grow border-2 border-solid border-gray-100 rounded-lg">
                <div className="flex flex-col justify-start items-start">
                  <h2 className="font-semibold text-lg">{value.name}</h2>
                  <a className="text-gray-400">{value.summary}</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex lg:flex-row lg:space-x-6 lg:justify-start justify-center space-x-6">
          {values.map((value) => {
            return (
              <div className="flex flex-col space-y-2 items-center lg:items-start h-48 ">
                <div className="">{value.icon}</div>
                <a className="text-sm tracking-wide">{value.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
