"use client";
import Head from "next/head";
import React from "react";
import { HeroSection } from "./components/Index/HeroSection";
import { Values } from "./components/Index/Values";
import { Team } from "./components/Index/Team";
import { Location } from "./components/Index/Location";
import { Testimonials } from "./components/Index/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Fremont Basketball Academy</title>
        <meta name="description" content="Fremont Basketball Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <Values />
        <Team />
        <Testimonials />
        <Location />
      </main>
    </div>
  );
}
