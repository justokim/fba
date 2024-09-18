import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { screenWidth } from "../hooks/screenWidth.js";

const Navbar = ({ routes, activeTab, setActiveTab }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { width } = screenWidth();

  const isMobile = width < 768;

  const isOpen = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleTab = (route) => {
    setActiveTab(route);
    if (isMobile) {
      setToggleMenu(!toggleMenu);
    }
  };

  console.log(toggleMenu);
  return (
    <div className="h-20 z-10 fixed w-full bg-white  text-black shadow-xl">
      <div className="px-6 lg:px-8 flex items-center justify-between">
        <div className="flex md:space-x-10 justify-center items-center">
          <Link href="/" className="relative w-36 h-20">
            <Image
              src="/logoDark.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
              onClick={() => setActiveTab("Home")}
            />
          </Link>

          <div className=" hidden md:flex md:items-center md:space-x-12 md:ml-12">
            {routes.map((route) => (
              <Link
                href={route.link}
                key={route.link}
                className={`text-lg
              ${activeTab == route.name ? `text-[#6D31ED]` : `text-black`}
            `}
                name={route.name}
                onClick={() => handleTab(route.name)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden " onClick={isOpen}>
          {toggleMenu ? <X /> : <Menu size={36} />}
        </div>
        <button className=" md:block hidden px-7 py-3 bg-[#6D31ED] rounded-xl text-sm text-white tracking-wider">
          <Link
            href="/contact"
            onClick={() => {
              handleTab("Contact");
            }}
          >
            Get in Touch
          </Link>
        </button>
      </div>

      {toggleMenu && (
        <div className="space-y-20 fixed inset-0 z-50 text-center  bg-slate-50 text-black flex flex-col pt-32  lg:hidden">
          <button
            onClick={isOpen}
            className="absolute top-4 text-black right-4  text-3xl focus:outline-none"
          >
            <X />
          </button>
          {routes.map((route) => (
            <Link
              href={route.link}
              key={route.link}
              className={`text-3xl 
            ${activeTab == route.name ? `text-[#6D31ED]` : `text-black`}
          `}
              name={route.name}
              onClick={() => handleTab(route.name)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
