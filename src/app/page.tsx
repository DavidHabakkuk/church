"use client";

import { useEffect, useRef } from "react";
import Hero from "./Comp/Hero";
import Team from "./Comp/mission";
import Video from "./Comp/video";
import Department from "./Comp/department";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.2; // Change this value to control when the sections appear
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < offset) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={addToRefs} className="section">
        <Hero />
      </div>
      <div ref={addToRefs} className="section">
        <Team />
      </div>
      <div ref={addToRefs} className="section">
        <Video />
      </div>
      <div ref={addToRefs} className="section">
        <Department />
      </div>
    </>
  );
}
