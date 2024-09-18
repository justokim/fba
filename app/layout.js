"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function RootLayout({ children }) {
  const routes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Register", link: "/register" },
    { name: "Contact", link: "/contact" },
  ];

  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (route) => {
    setActiveTab(route);
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col flex-1 min-h-screen justify-between relative">
          <Navbar
            routes={routes}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <main className="flex-grow overflow-hidden pt-20 flex items-stretch">
            {children}
          </main>
          <Footer
            routes={routes}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        </div>
      </body>
    </html>
  );
}
