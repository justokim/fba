"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function ClientLayout({ children }) {
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
    <>
      <Navbar
        routes={routes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {children}
      <Footer
        routes={routes}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
    </>
  );
}
