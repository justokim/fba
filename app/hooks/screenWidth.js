"use client";
import { useEffect, useState } from "react";

export const screenWidth = () => {
  const [windowSize, getWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const resizeWindow = () => {
      getWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resizeWindow);
    resizeWindow();

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return windowSize;
};
