export const Testimonials = () => {
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
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center py-8">
        Hear What Parents Have to Say
      </h1>
      <div className="flex lg:flex-row lg:h-full  justify-center items-center lg:space-x-6 lg:max-w-7xl mx-auto lg:space-y-0  max-w-lg flex-col space-y-4 md:max-w-2xl  lg:items-stretch">
        {testimony.map((person) => {
          return (
            <div className="p-4 w-96  flex-grow border-2 border-solid border-gray-200 rounded-lg">
              <div className="flex flex-col space-y-4 h-full">
                <div className="grow">{person.summary}</div>
                <div> -{person.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
