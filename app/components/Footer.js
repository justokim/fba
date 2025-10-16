import Image from "next/image";
import Link from "next/link";

const Footer = ({ routes, activeTab, handleTabClick }) => {
  return (
    <footer className="border-t border-white/20 bg-black/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                <span className="text-xl font-bold text-black">FBA</span>
              </div>
            </div>
            <p className="text-sm text-white/50">
              Develop Your Game, Build Your Future
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {routes.map((route) => (
                <li>
                  <Link
                    href={route.link}
                    className="text-white/50 hover:text-orange-600"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2025 Fremont Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

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
