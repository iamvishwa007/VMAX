"use client";
import React from "react";
import { WavyBackground } from "./WavyBackground";

export function WavyBackgroundDemo({ theme }) {
  return (
    <WavyBackground className="max-w-2xl mx-auto pb-0" theme={theme}>
      <p className={`text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        VMAX — Enjoy Every Minute!
      </p>
      <p className={`text-base md:text-lg mt-4 font-normal inter-var text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
       Your world of movies, shows, and exclusive originals. Stream. Binge. Repeat. Every story, every moment — unforgettable.
      </p>
      <marquee>Explore.....</marquee>
    </WavyBackground>
  );
}
