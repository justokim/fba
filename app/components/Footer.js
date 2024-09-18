import Image from "next/image";
import Link from "next/link";

const Footer = ({ routes, activeTab, handleTabClick }) => {
  return (
    <footer className="w-full border-t-4  border-[#6D31ED]  bg-slate-200 text-black">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid  md:grid-cols-2 items-center justify-center lg:grid-cols-12 py-8">
          <div className="relative md:col-span-1  lg:col-span-4 w-48 h-24 md:block hidden">
            <Image src="/logoDark.png" layout="fill" alt="logo" />
          </div>

          <div className="relative md:col-span-1 lg:col-span-4 pt-8 lg:pt-0">
            <h1 className="uppercase font-semibold pb-2.5">Navigation</h1>
            <div className="flex flex-col space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.link}
                  href={route.link}
                  className={`w-fit font-medium text-sm ${
                    activeTab == route.name ? `text-[#6D31ED]` : `text-black`
                  }`}
                  onClick={() => handleTabClick(route.name)}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-black py-4 text-sm">
          <div>©Fremont Basketball Academy. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
