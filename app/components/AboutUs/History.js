"use client";

import { screenWidth } from "../../hooks/screenWidth";

export const History = () => {
  const { width } = screenWidth();

  const isMobile = width < 768;
  return (
    <div className=" max-w-sm px-4 text-center md:max-w-2xl md:text-left lg:max-w-6xl mx-auto ">
      <h1 className="text-4xl font-bold text-center py-8">About Us</h1>

      {isMobile && (
        <div className="flex flex-col space-y-10">
          {" "}
          <div>
            Fremont Basketball Academy was established in June 2020. The goal of
            the academy is to teach children of all ages fundamentals in the
            game of basketball in a fun, engaging manner.
          </div>
          <div>
            Founded by Vishrant Prabhu in June 2020, Fremont Basketball Academy
            has flourished under his passionate leadership and extensive
            experience working with children, significantly expanding its reach
            and impact in the community through youth basketball.
          </div>
          <div>
            The academy has experienced tremendous growth with support from the
            community. We have proudly trained over 200 students, building a
            legacy of success and community in youth basketball.
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="flex flex-row  ">
          <div className="flex space-y-20 flex-col h-full pr-10 w-1/2">
            <div>
              Fremont Basketball Academy was established in June 2020. The goal
              of the academy is to teach children of all ages fundamentals in
              the game of basketball in a fun, engaging manner.
            </div>
            <div className="grow"> </div>

            <div>
              Founded by Vishrant Prabhu in June 2020, Fremont Basketball
              Academy has flourished under his passionate leadership and
              extensive experience working with children, significantly
              expanding its reach and impact in the community through youth
              basketball.
            </div>
          </div>
          <div className="  border-l-[#6D31ED] border-2 "></div>
          <div className="flex flex-col space-y-36  pl-10 w-1/2">
            <div></div>
            <div>
              The academy has experienced tremendous growth with support from
              the community. We have proudly trained over 200 students, building
              a legacy of success and community in youth basketball.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
