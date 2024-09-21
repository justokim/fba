import Link from "next/link";

export const JoinUs = ({ handleTabClick }) => {
  return (
    <div className="py-8">
      <h1 className="lg:text-4xl text-3xl font-bold text-center py-8 text-[#6D31ED]">
        Ready to become a better player?
      </h1>
      <div className="flex flex-col space-y-4 justify-center items-center max-w-lg lg:max-w-6xl text-center mx-auto">
        <div>
          Join Fremont Basketball Academy to elevate your child's basketball
          experience with passionate coaches!
        </div>
        <Link
          // onClick={() => {
          //   handleTabClick("Register");
          // }}
          href="/register"
        >
          <button className="p-4 bg-[#6D31ED] text-white rounded-lg px-4 py-3 tracking-wide">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  );
};
