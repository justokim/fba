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
  const renderPersonCard = (person) => {
    return (
      <div className="p-4 border-2 border-solid border-gray-200 rounded-lg">
        <div className="flex flex-row space-x-10 justify-center">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">
              {person.name}
              <span className="pl-3 font-normal text-sm text-[#6D31ED]">
                {person.title}
              </span>
            </h2>
            <p className="text-sm grow">{person.experience}</p>
            <div className="text-sm">Hometown: {person.hometown}</div>
          </div>
          <div>
            <Image
              src={person.img}
              height={350}
              width={270}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center py-8">Meet The Team</h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl">{renderPersonCard(people[0])}</div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 justify-center">
          <div className="flex-1 max-w-md lg:max-w-lg">
            {renderPersonCard(people[1])}
          </div>
          <div className="flex-1 max-w-md lg:max-w-lg">
            {renderPersonCard(people[2])}
          </div>
        </div>
      </div>
    </div>
  );
};
