import Image from "next/image";
import Link from "next/link";

const Footer = ({ routes, activeTab, handleTabClick }) => {
  return (
    <footer className="border-t border-white/20 bg-black/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logoLight.png"
                alt="Fremont Basketball Academy"
                width={100}
                height={100}
              />
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
};

export default Footer;
