import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const Navbar = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="group">
          <Image
            src="/logoLight.png"
            alt="Fremont Basketball Academy"
            width={100}
            height={100}
          />
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {routes.map((route) => (
            <Link
              key={route.link}
              href={route.link}
              className="font-heading text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-white"
            >
              {route.name}
            </Link>
          ))}
          <button className="font-heading text-xs font-bold rounded-md uppercase tracking-wider bg-orange-600 py-2.5 px-6">
            <Link href="/register">Join Now</Link>
          </button>
        </div>

        {/* mobile menu */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* mobile */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="container mx-auto space-y-1 px-6 py-6">
            {routes.map((route) => (
              <Link
                key={route.link}
                href={route.link}
                className="block rounded px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <button className="w-full font-heading text-xs font-black uppercase tracking-wider bg-orange-600">
              <Link href="/register" onClick={() => setIsOpen(false)}>
                Join Now
              </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
