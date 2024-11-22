"use client";
import Head from "next/head";
import React from "react";
import { HeroSection } from "./components/Index/HeroSection";
import { Welcome } from "./components/Index/Welcome";
import { Values } from "./components/Index/Values";
import { Team } from "./components/Index/Team";
import { Location } from "./components/Index/Location";
import { Testimonials } from "./components/Index/Testimonials";
import { JoinUs } from "./components/Index/JoinUs";
export default function Home({ handleTabClick }) {
  return (
    <div className="w-full">
      <Head>
        <title>Fremont Basketball Academy</title>
        <meta name="description" content="Fremont Basketball Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto bg-slate-50 text-black  ">
        <HeroSection />
        <Welcome />
        <Values />
        <Team />
        <Testimonials />
        <JoinUs handleTabClick={handleTabClick} />
        <Location />
      </main>
    </div>
  );
}
